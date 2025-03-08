import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const Cinema = () => {
  const Dates = [
    {
      day: 'MON',
      date: '01',
      month: 'MAR',
    },
    {
      day: 'TUE',
      date: '02',
      month: 'MAR',
    },
    {
      day: 'THU',
      date: '03',
      month: 'MAR',
    },
    {
      day: 'FRI',
      date: '04',
      month: 'MAR',
    },
    {
      day: 'STU',
      date: '05',
      month: 'MAR',
    },
    {
      day: 'SUN',
      date: '06',
      month: 'MAR',
    },
  ];
  const priceFilters = [
    {
      price: '₹0-₹100',
    },
    {
      price: '₹101-₹200',
    },
    {
      price: '₹201-₹300',
    },
    {
      price: '₹301-₹400',
    },
    {
      price: '₹401-₹500',
    },
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
      showtimes: ['08:15 PM'],
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
  ];

  return (
    <View>
      <FlatList
        horizontal
        data={Dates}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.date}>
            <Text>{item.day}</Text>
            <Text>{item.date}</Text>
            <Text>{item.month}</Text>
          </TouchableOpacity>
        )}
      />
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
      <View style={styles.cinema}>
        <FlatList
          data={MovieList}
          renderItem={({item}) => (
            <View>
              <Text>{item.theater}</Text>
              <Text>{item.cancellable}</Text>
              <TouchableOpacity>
                <Text>{item.showtimes}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Cinema;

const styles = StyleSheet.create({
  date: {
    padding: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#dbd7d7',
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
  cinema: {
    padding: 10,
  },
});
