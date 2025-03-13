import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

function Cinema({route}) {
  const navigation = useNavigation();
  const {movie} = route.params;
  const Dates = [
    {id: 1, day: 'MON', date: '01', month: 'MAR'},
    {id: 2, day: 'TUE', date: '02', month: 'MAR'},
    {id: 3, day: 'THU', date: '03', month: 'MAR'},
    {id: 4, day: 'FRI', date: '04', month: 'MAR'},
    {id: 5, day: 'STU', date: '05', month: 'MAR'},
    {id: 6, day: 'SUN', date: '06', month: 'MAR'},
  ];
  const priceFilters = [
    {price: '₹0-₹100'},
    {price: '₹101-₹200'},
    {price: '₹201-₹300'},
    {price: '₹301-₹400'},
    {price: '₹401-₹500'},
  ];

  const MovieList = [
    {
      theater: 'PVR: Palladium Mall, Ahmedabad',
      cancellable: 'cancellation Available',
      showTimes: ['03:15 PM', '08:05 PM'],
    },
    {
      theater: 'PVR: Acropolis, Ahmedabad',
      cancellable: 'cancellation Available',
      showTimes: ['08:15 PM', '10:20 PM'],
    },
    {
      theater: 'Nexus Ahmedabad One',
      cancellable: 'Non-Cancellbale',
      showTimes: ['02:30 PM', '04:35 PM'],
    },
    {
      theater: 'City Gold, Ashram Road',
      cancellable: 'Non-Cancellbale ',
      showTimes: ['02:45 PM', '05:30 PM', '08:30 PM'],
    },
    {
      theater: 'PVR: Palladium Mall, Ahmedabad',
      cancellable: 'cancellation Available',
      showTimes: ['03:15 PM', '08:05 PM'],
    },
    {
      theater: 'PVR: Palladium Mall, Ahmedabad',
      cancellable: 'cancellation Available',
      showTimes: ['03:15 PM', '08:05 PM'],
    },
    {
      theater: 'Orange Cinemas: Bapunagar',
      cancellable: 'cancellation Available',
      showTimes: ['12:30 PM', '03:30 PM', '06:30 PM'],
    },
    {
      theater: 'Orange Cinemas: Bapunagar',
      cancellable: 'cancellation Available',
      showTimes: ['12:30 PM', '03:30 PM', '06:30 PM'],
    },
  ];

  const [selectedDateId, setSelectedDateId] = useState(null);

  const renderDateItem = ({item}) => (
    <TouchableOpacity
      style={[styles.date, selectedDateId === item.id && styles.selectedDate]}
      onPress={() => setSelectedDateId(item.id)}>
      <Text
        style={[selectedDateId === item.id && styles.selectedText, styles.txt]}>
        {item.day}
      </Text>
      <Text
        style={[selectedDateId === item.id && styles.selectedText, styles.txt]}>
        {item.date}
      </Text>
      <Text
        style={[selectedDateId === item.id && styles.selectedText, styles.txt]}>
        {item.month}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/icon/backBtn.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{movie.title}</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/icon/search.png')}
              style={styles.searchBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList horizontal data={Dates} renderItem={renderDateItem} />
      <View style={styles.priceDetail}>
        <FlatList
          horizontal
          data={priceFilters}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.price}>
              <Text style={styles.priceText}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.cinemaScroll}>
        <FlatList
          style={styles.cinema}
          data={MovieList}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Text style={styles.name}> &#x2661; {item.theater}</Text>
              <Text style={styles.cancellable}>{item.cancellable}</Text>
              <View style={styles.timeView}>
                {item.showTimes.map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.timeBtn}
                    onPress={() =>
                      navigation.navigate('SelectSeat', {
                        movie,
                        theater: item.theater,
                      })
                    }>
                    <Text style={styles.timeText}>{time}</Text>
                  </TouchableOpacity>
                ))}
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
  searchBtn: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    paddingLeft: '110%',
  },
  date: {
    padding: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#dbd7d7',
  },
  selectedDate: {
    backgroundColor: '#e3204a',
  },
  txt: {
    fontFamily: 'Lato-Bold',
    paddingLeft: 0,
  },
  selectedText: {
    color: '#ebe6e6',
    fontFamily: 'Lato-Regular',
    padding: 1,
    paddingLeft: 0,
  },
  priceText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  priceDetail: {
    marginTop: 20,
    elevation: 15,
  },
  price: {
    borderWidth: 1,
    padding: 5,
    margin: 4,
    borderRadius: 15,
  },
  cinemaScroll: {
    maxHeight: '80%',
    backgroundColor: '#ccc2c2',
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
    height: 35,
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
