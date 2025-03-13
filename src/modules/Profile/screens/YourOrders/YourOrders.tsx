import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const YourOrders = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>
        Order on :
        <Text style={styles.orderDetail}> 08 Mar , 2025 at 09:40:29 AM</Text>
      </Text>
      <View style={styles.orderCard}>
        <View style={styles.movieDetails}>
          <Image
            source={require('../../../../assets/Chhaava.webp')}
            style={styles.moviePoster}
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>Chhaava</Text>
            <Text style={styles.movieLang}> Hindi</Text>
            <Text style={styles.movieTime}>Sun, 09 Mar, 2025 | 01:30 PM</Text>
            <Text style={styles.theater}>NY Cinemas: Swagat Mall</Text>
            <Text style={styles.seats}>2 ticket : Prime - E5, E6 </Text>
          </View>
          <View>
            <Text style={styles.data}>M-Ticket</Text>
            <Text style={styles.screen}>SCREEN 2</Text>
          </View>
        </View>
        <View style={styles.case}>
          <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>REFUNDABLE</Text>
          </TouchableHighlight>
          <Text style={styles.caseText}>
            Refund cradit to your BMS cash balance
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.book}>
        <Text style={styles.bookTxt}> View Order Bookings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourOrders;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 10,
    gap: 10,
    backgroundColor: '#dedbd7',
  },
  txt: {
    fontFamily: 'Lato-Regular',
    padding: 10,
  },
  orderCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 10,
    marginBottom: 50,
  },
  orderDetail: {
    fontFamily: 'Lato-Black',
  },
  movieDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 16,
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 17,
    fontFamily: 'Lato-Black',
    padding: 5,
    marginTop: -10,
  },
  movieLang: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: 'gray',
    marginTop: -7,
  },
  movieTime: {
    fontFamily: 'Lato-Black',
    fontSize: 13,
    marginTop: 10,
    padding: 5,
  },
  theater: {
    fontSize: 14,
    padding: 5,
    fontFamily: 'Lato-Regular',
  },
  seats: {
    padding: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  data: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: 'gray',
  },
  screen: {
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    marginTop: 85,
  },
  case: {
    borderTopWidth: 1,
    borderColor: '#bfbdba',
    flexDirection: 'row',
    padding: 10,
  },
  btn: {
    height: 30,
    width: 100,
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#f5f2ed',
    fontFamily: 'Lato-Bold',
  },
  caseText: {
    padding: 5,
    fontFamily: 'Lato-Regular',
  },
  book: {
    alignItems: 'center',
    marginTop: -20,
  },
  bookTxt: {
    color: 'red',
    fontFamily: 'Lato-Black',
  },
});
