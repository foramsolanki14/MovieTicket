import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Cinema = () => {
  const navigation = useNavigation();
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
      showtimes: ['03:15 PM', '08:05 PM'],
    },
    {
      theater: 'PVR: Acropolis, Ahmedabad',
      cancellable: 'cancellation Available',
      showtimes: ['08:15 PM', '10:20 PM'],
    },
    {
      theater: 'Nexus Ahmedabad One',
      cancellable: 'Non-Cancellbale',
      showtimes: ['02:30 PM', '04:35 PM'],
    },
    {
      theater: 'City Gold, Ashram Road',
      cancellable: 'Non-Cancellbale ',
      showtimes: ['02:45 PM', '05:30 PM', '08:30 PM'],
    },
    {
      theater: 'PVR: Palladium Mall, Ahmedabad',
      cancellable: 'cancellation Available',
      showtimes: ['03:15 PM', '08:05 PM'],
    },
    {
      theater: 'PVR: Palladium Mall, Ahmedabad',
      cancellable: 'cancellation Available',
      showtimes: ['03:15 PM', '08:05 PM'],
    },
    {
      theater: 'Orange Cinemas: Bapunagar',
      cancellable: 'cancellation Available',
      showtimes: ['12:30 PM', '03:30 PM', '06:30 PM'],
    },
    {
      theater: 'Orange Cinemas: Bapunagar',
      cancellable: 'cancellation Available',
      showtimes: ['12:30 PM', '03:30 PM', '06:30 PM'],
    },
  ];

  const [selectedDateId, setSelectedDateId] = useState(null);

  const renderDateItem = ({item}) => (
    <TouchableOpacity
      style={[styles.date, selectedDateId === item.id && styles.selectedDate]}
      onPress={() => setSelectedDateId(item.id)}>
      <Text style={[selectedDateId === item.id && styles.selectedText]}>
        {item.day}
      </Text>
      <Text style={[selectedDateId === item.id && styles.selectedText]}>
        {item.date}
      </Text>
      <Text style={[selectedDateId === item.id && styles.selectedText]}>
        {item.month}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList horizontal data={Dates} renderItem={renderDateItem} />
      <View style={styles.priceDetail}>
        <FlatList
          horizontal
          data={priceFilters}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.price}>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.cinemaScroll}>
        <ScrollView style={styles.cinema}>
          <FlatList
            data={MovieList}
            renderItem={({item}) => (
              <View style={styles.movieItem}>
                <Text style={styles.name}> &#x2661; {item.theater}</Text>
                <Text style={styles.cancellable}>{item.cancellable}</Text>
                <View style={styles.timeview}>
                  {item.showtimes.map((time, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.timebtn}
                      onPress={() => navigation.navigate('SelectSheat')}>
                      <Text>{time}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Cinema;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#cccaca',
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
  selectedText: {
    color: '#ebe6e6',
  },
  priceDetail: {
    marginTop: 20,
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
    padding: 20,
    backgroundColor: '#f2f0f0',
    borderRadius: 10,
    margin: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },
  cancellable: {
    fontSize: 15,
    marginTop: -10,
    padding: 5,
  },
  timeview: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    flexWrap: 'wrap',
  },
  timebtn: {
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieItem: {
    marginBottom: 10,
  },
});
