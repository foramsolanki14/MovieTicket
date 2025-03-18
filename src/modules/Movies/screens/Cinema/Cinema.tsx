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

interface CinemaData {
  createdat: string;
  location: string;
  name: string;
  theater_id: number;
  totalscreens: number;
}

function Cinema({route}) {
  const navigation = useNavigation();
  const [cinema, setCinema] = useState<CinemaData[]>([]);
  // const [selectedDateId, setSelectedDateId] = useState(null);
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

  const API_URL = 'http://10.0.2.2:5000/theaters/all-theaters';

  const fetchCinema = async () => {
    try {
      const res = await axios.get(API_URL);
      setCinema(res.data.data);
    } catch (err) {
      console.log('Error fetching cinema:', err);
    }
  };

  useEffect(() => {
    fetchCinema();
  }, []);

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
          data={Dates}
          renderItem={({item}) => (
            <View style={styles.date}>
              <TouchableOpacity>
                <Text style={styles.txt}>{item.date}</Text>
                <Text style={styles.txt}>{item.day}</Text>
                <Text style={styles.txt}>{item.month}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
      </View>

      <View style={styles.cinemaScroll}>
        <FlatList
          style={styles.cinema}
          data={cinema}
          renderItem={({item}) => (
            <View style={styles.movieItem}>
              <Text style={styles.name}> &#x2661; {item.name}</Text>
              <Text>{item.createdat}</Text>
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
    paddingBottom: 6,
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
