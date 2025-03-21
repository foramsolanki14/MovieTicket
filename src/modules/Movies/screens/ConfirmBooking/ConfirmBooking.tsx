import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setBookingDetails} from '../../../../redux/bookingSlice';

function ConfirmBooking({route}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    movie,
    location,
    theaterName,
    selectedSeats,
    selectedTime,
    totalPrice,
    selectedDate,
    selectedSeatsCount,
    userEmail,
    userContactNumber,
  } = route.params;

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      })
    : '';
  const convenienceFee = 45.0;
  const orderTotal = totalPrice + convenienceFee;

  // Dispatch action to store booking details in Redux
  useEffect(() => {
    dispatch(
      setBookingDetails({
        movie,
        selectedSeats,
        selectedDate,
        selectedTime,
        totalPrice,
        userEmail,
        userContactNumber,
        theaterName,
        selectedSeatsCount,
      }),
    );
  }, [
    dispatch,
    movie,
    selectedDate,
    selectedSeats,
    selectedSeatsCount,
    selectedTime,
    theaterName,
    totalPrice,
    userContactNumber,
    userEmail,
  ]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/icon/backBtn.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Confirm Booking</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{movie.title}</Text>
              <Text style={styles.date}>
                {formattedDate} | {selectedTime}
              </Text>
              <Text style={styles.theater}>{selectedSeats}</Text>
              <Text style={styles.theater}>
                {theaterName}|{location}
              </Text>
            </View>
            <View>
              <Text style={styles.number}>{selectedSeatsCount}</Text>
              <Text style={styles.ticket}>M-Ticket</Text>
            </View>
          </View>
          <View style={styles.cardBottom}>
            <Text style={styles.txtLine1}>Cancellation Available</Text>
            <Text style={styles.txtLine2}>
              This Venue supports booking cancellation. To know more, view the
              cancellation policy
            </Text>
          </View>
        </View>
        <View style={styles.priceCard}>
          <View style={styles.card2}>
            <Text style={styles.label}>Ticket(s) price</Text>
            <Text style={styles.label1}>₹{totalPrice}</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.label}>Convenience fees</Text>
            <Text style={styles.label1}>₹{convenienceFee}</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.label}>Donate to BookAChange</Text>
            <Text style={styles.label1}>₹0.00</Text>
          </View>
          <View style={styles.total}>
            <Text style={styles.label}>Order total</Text>
            <Text style={styles.label}>₹{orderTotal}</Text>
          </View>
        </View>
        <View style={styles.detailView}>
          <View style={styles.detailsCard}>
            <Text style={styles.data}>
              Your details
              <Text style={styles.data1}>(For sending booking details)</Text>
            </Text>
            <TouchableOpacity>
              <Text style={styles.data}>Edit</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.data1}>{userEmail}</Text>
          <Text style={styles.data1}>{userContactNumber}</Text>
        </View>

        <View style={styles.totalView}>
          <View>
            <Text style={styles.label}>Total</Text>
            <Text style={styles.label}>₹{orderTotal}</Text>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Success')}>
              <Text style={styles.btnTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ConfirmBooking;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebf2f2',
    // paddingTop: 60,
  },
  container: {
    padding: 10,
    gap: 10,
    backgroundColor: '#ebf2f2',
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
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    paddingLeft: 20,
  },
  main: {
    borderRadius: 10,
    backgroundColor: '#fcf0f2',
    borderColor: '#adadad',
    elevation: 15,
  },
  theater: {
    fontFamily: 'Lato-Regular',
    paddingTop: 5,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 30,
  },
  cardBottom: {
    backgroundColor: '#f5dadd',
    padding: 10,
    borderRadius: 10,
  },
  txtLine1: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
  },
  txtLine2: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
  },
  name: {
    fontSize: 15,
    fontFamily: 'Lato-Black',
  },
  date: {
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
  number: {
    fontSize: 18,
    fontFamily: 'Lato-Black',
    paddingLeft: 50,
  },
  ticket: {
    fontFamily: 'Lato-Bold',
  },
  priceCard: {
    backgroundColor: '#faf5f6',
    gap: 15,
    padding: 10,
    borderRadius: 10,
    elevation: 15,
  },
  card2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 15,
    fontFamily: 'Lato-Black',
    paddingLeft: 20,
  },
  label1: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 10,
    borderStyle: 'dotted',
  },
  detailView: {
    backgroundColor: '#faf5f6',
    gap: 5,
    borderRadius: 10,
    elevation: 15,
    padding: 15,
  },
  detailsCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  totalView: {
    backgroundColor: '#faf5f6',
    marginTop: '70%',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    position: 'static',
  },
  btnView: {
    paddingLeft: '50%',
    paddingTop: 10,
  },
  btn: {
    backgroundColor: '#fc2348',
    height: 30,
    width: 140,
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnTxt: {
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    color: '#f5f0f1',
    textAlign: 'center',
  },
  data: {
    fontFamily: 'Lato-Black',
    fontSize: 16,
  },
  data1: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
});
