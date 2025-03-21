import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit/query';

const formatDate = date => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
};

const formatTime = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
};

const YourOrders = () => {
  const booking = useSelector((state: RootState) => state.booking);

  // Get the current date and time
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const formattedTime = formatTime(currentDate);

  return (
    <View style={styles.main}>
      <Text style={styles.txt}>
        Order on :
        <Text style={styles.orderDetail}>
          {formattedDate} at {formattedTime}
        </Text>
      </Text>
      <View style={styles.orderCard}>
        <View style={styles.movieDetails}>
          <Image
            source={{
              uri: `http://10.0.2.2:5000/images/${booking.movie.posterurl}`,
            }}
            style={styles.moviePoster}
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{booking.movie.title}</Text>
            <Text style={styles.movieTime}>
              {formattedDate} | {booking.selectedTime}
            </Text>
            <Text style={styles.theater}>{booking.theaterName}</Text>
            <Text style={styles.seats}>
              {booking.selectedSeatsCount} ticket(s): {booking.selectedSeats}
            </Text>
          </View>
          <View>
            <Text style={styles.data}>M-Ticket</Text>
          </View>
        </View>
        <View style={styles.case}>
          <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>REFUNDABLE</Text>
          </TouchableHighlight>
          <Text style={styles.caseText}>
            Refund credit to your BMS cash balance
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
    borderRadius: 12,
    resizeMode: 'contain',
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
    fontSize: 15,
    padding: 5,
    fontFamily: 'Lato-Regular',
  },
  seats: {
    padding: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 15,
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
    fontFamily: 'Lato-Bold',
  },
});
