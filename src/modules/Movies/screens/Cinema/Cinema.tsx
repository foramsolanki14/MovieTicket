import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {fetchShowData} from '../../../Api/Api';
import {Screen} from 'react-native-screens';

interface DateItem {
  id: number;
  day: string;
  date: string;
  month: string;
  fullDate: Date;
}

interface ShowData {
  theater_id: number;
  TheaterName: string;
  TheaterLocation: string;
  ShowTimes: string;
  TicketPrices: string;
  ScreenName: string;
}

function Cinema({route}) {
  const navigation = useNavigation();
  const [datesOfWeek, setDatesOfWeek] = useState<DateItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showData, setShowData] = useState<ShowData[] | null>(null);
  const {movie} = route.params;

  useEffect(() => {
    const loadShowData = async () => {
      try {
        const formattedDate = selectedDate
          ? selectedDate.toISOString().split('T')[0]
          : '';
        const moviesData = await fetchShowData(movie.movie_id, formattedDate);
        setShowData(moviesData);
      } catch (error) {
        console.error(error);
      }
    };

    loadShowData();
  }, [movie.movie_id, selectedDate]);

  useEffect(() => {
    generateDatesOfWeek();
  }, []);

  const generateDatesOfWeek = () => {
    const today = new Date();
    const weekDates: DateItem[] = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const dayOptions: Intl.DateTimeFormatOptions = {weekday: 'short'};
      const dateOptions: Intl.DateTimeFormatOptions = {day: '2-digit'};
      const monthOptions: Intl.DateTimeFormatOptions = {month: 'short'};

      weekDates.push({
        id: i + 1,
        day: currentDate.toLocaleDateString('en-IN', dayOptions).toUpperCase(),
        date: currentDate.toLocaleDateString('en-IN', dateOptions),
        month: currentDate
          .toLocaleDateString('en-IN', monthOptions)
          .toUpperCase(),
        fullDate: currentDate,
      });
    }
    setDatesOfWeek(weekDates);
    if (weekDates.length > 0) {
      setSelectedDate(weekDates[0].fullDate);
    }
  };

  const handleDatePress = (dateItem: DateItem) => {
    setSelectedDate(dateItem.fullDate);
  };

  const isSameDate = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) {
      return false;
    }
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));

    const options = {hour: 'numeric', minute: 'numeric', hour12: true};
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const getPriceForTime = (
    showTimes: string,
    ticketPrices: string,
    selectedTime: string,
  ) => {
    const times = showTimes.split(',');
    const prices = ticketPrices.split(',');
    const formattedSelectedTime = selectedTime.split(' ').slice(0, 2).join(' ');

    for (let i = 0; i < times.length; i++) {
      const formattedTime = formatTime(times[i]);
      const formattedTimeTrimmed = formattedTime
        .split(' ')
        .slice(0, 2)
        .join(' ');

      if (formattedTimeTrimmed === formattedSelectedTime) {
        return prices[i];
      }
    }
    return 'Price not found';
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/icon/backBtn.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{movie.title}</Text>
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          data={datesOfWeek}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{paddingBottom: 5, paddingTop: 5}}>
              <TouchableOpacity
                style={[
                  styles.date,
                  isSameDate(item.fullDate, selectedDate) &&
                    styles.selectedDate,
                ]}
                onPress={() => handleDatePress(item)}>
                <Text
                  style={[
                    styles.txt,
                    isSameDate(item.fullDate, selectedDate) &&
                      styles.selectedText,
                  ]}>
                  {item.date}
                </Text>
                <Text
                  style={[
                    styles.txt,
                    isSameDate(item.fullDate, selectedDate) &&
                      styles.selectedText,
                  ]}>
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.txt,
                    isSameDate(item.fullDate, selectedDate) &&
                      styles.selectedText,
                  ]}>
                  {item.month}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.cinemaScroll}>
        <FlatList
          style={styles.cinema}
          data={showData}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Text style={styles.name}> &#x2661; {item.TheaterName}</Text>
              <View style={styles.timeView}>
                {item.ShowTimes.split(',').map((showTime, index) => {
                  const formattedShowTime = formatTime(showTime);
                  const price = getPriceForTime(
                    item.ShowTimes,
                    item.TicketPrices,
                    formattedShowTime,
                  );

                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.timeBtn}
                      onPress={() =>
                        navigation.navigate('SelectSeat', {
                          movie,
                          selectedTime: formattedShowTime,
                          selectedDate,
                          theaterName: item.TheaterName,
                          ticketPrice: price,
                          location: item.TheaterLocation,
                          ScreenName: item.ScreenName,
                        })
                      }>
                      <Text style={styles.timeText}>{formattedShowTime}</Text>
                      {/* <Text style={styles.priceText}>₹{price}</Text> */}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Cinema;
const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
  mainView: {
    backgroundColor: '#cccaca',
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    paddingLeft: 20,
  },

  date: {
    padding: 10,
    paddingTop: 10,
    marginHorizontal: 5,
    borderColor: '#dbd7d7',
    alignItems: 'center',
  },
  selectedDate: {
    backgroundColor: '#e3204a',
  },
  txt: {
    fontFamily: 'Lato-Regular ',
    paddingLeft: 0,
    fontSize: 17,
    color: '#333',
    paddingTop: 5,
  },
  selectedText: {
    color: '#ebe6e6',
    fontFamily: 'Lato-Bold',
  },
  priceText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  priceDetail: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  price: {
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingBottom: 5,
    marginTop: 1,
    alignItems: 'center',
  },
  cinemaScroll: {
    maxHeight: '89%',
    backgroundColor: '#ccc2c2',
    paddingBottom: 12,
  },
  cinema: {
    padding: 10,
    backgroundColor: '#f2f0f0',
    borderRadius: 10,
    margin: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    padding: 10,
  },
  cancellable: {
    fontSize: 15,
    marginTop: -10,
    fontFamily: 'Lato-Regular',
    padding: 5,
  },
  timeView: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    flexWrap: 'wrap',
  },
  timeBtn: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    width: '40%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
  movieItem: {
    marginBottom: 10,
  },
});
