import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {fetchCinema, fetchShow} from '../../../Api/Api';

interface CinemaData {
  createdat: string;
  location: string;
  name: string;
  theater_id: number;
  totalscreens: number;
}

interface DateItem {
  id: number;
  day: string;
  date: string;
  month: string;
  fullDate: Date; // Add a full Date object
}
interface ShowData {
  show_id: number;
  ticketprice: number;
  theater_name: string;
  showdate: string;
  showtime: string;
}

function Cinema({route}) {
  const navigation = useNavigation();
  const [cinema, setCinema] = useState<CinemaData[]>([]);
  const [datesOfWeek, setDatesOfWeek] = useState<DateItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [shows, setShows] = useState<ShowData[]>([]);
  const {movie} = route.params;
  const priceFilters = [
    {price: '₹0-₹100'},
    {price: '₹101-₹200'},
    {price: '₹201-₹300'},
    {price: '₹301-₹400'},
    {price: '₹401-₹500'},
  ];

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const theaterData = await fetchCinema();
        setCinema(theaterData);
      } catch (error) {
        console.error(error);
      }
    };
    const loadShow = async () => {
      try {
        const showdate = await fetchShow();
        setShows(showdate);
      } catch (err) {
        console.log(err);
      }
    };

    loadMovies();
    generateDatesOfWeek();
  }, []);

  const generateDatesOfWeek = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const startDate = new Date(today);

    const diff = startDate.getDate() - currentDay + (currentDay === 0 ? -7 : 1);
    startDate.setDate(diff);

    const weekDates: DateItem[] = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
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
    console.log('Selected Date:', dateItem.fullDate);
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
            <TouchableOpacity
              style={[
                styles.date,
                isSameDate(item.fullDate, selectedDate) && styles.selectedDate,
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
          )}
        />
        <View style={styles.priceDetail}>
          <FlatList
            horizontal
            data={priceFilters}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{paddingBottom: 5}}>
                <TouchableOpacity style={styles.price}>
                  <Text style={styles.priceText}>{item.price}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>

      <View style={styles.cinemaScroll}>
        <FlatList
          style={styles.cinema}
          data={cinema}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Text style={styles.name}> &#x2661; {item.name}</Text>
              <View style={styles.timeView}>
                <TouchableOpacity
                  style={styles.timeBtn}
                  onPress={() =>
                    navigation.navigate('SelectSeat', {
                      movie: movie,
                      cinemaName: item.name,
                      CinemaLocation: item.location,
                    })
                  }>
                  <Text style={styles.timeText}>12:30</Text>
                </TouchableOpacity>
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
    borderBottomWidth: 1,
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
    maxHeight: '80%',
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
