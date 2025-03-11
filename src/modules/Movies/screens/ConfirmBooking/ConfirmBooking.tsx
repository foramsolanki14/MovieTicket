import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import React from 'react';

const ConfirmBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.card}>
          <View>
            <Text style={styles.name}>Chhaava</Text>
            <Text style={styles.date}>Sun, 09 Mar, 2025 | 01:30 PM</Text>
            <Text> Hindi</Text>
            <Text>NY Cinemas: Swagat Mall</Text>
          </View>
          <View>
            <Text style={styles.number}>2</Text>
            <Text style={{fontWeight: '500'}}>M-Ticket</Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <Text style={styles.txtLine1}>Cancellation Available</Text>
          <Text style={styles.txtLine2}>
            This Venue supports booking cancellation. to konw more view
            cancellation policy
          </Text>
        </View>
      </View>
      <View style={styles.priceCard}>
        <View style={styles.card2}>
          <Text style={styles.label}>Ticket(s) price</Text>
          <Text style={styles.label1}>₹300.00</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.label}>Convenience fees</Text>
          <Text style={styles.label1}>₹59.00</Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.label}>Donate to BookAChange</Text>
          <Text style={styles.label1}>₹0.00</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.label}>Order total</Text>
          <Text style={styles.label}>₹359.00</Text>
        </View>
      </View>
      <View style={styles.detailView}>
        <View style={styles.detailsCard}>
          <Text style={{fontWeight: 'bold'}}>
            Your details
            <Text style={{fontWeight: '400'}}>
              (For sending booking details)
            </Text>
          </Text>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text>abc@gmail.com</Text>
        <Text>9016171433 | Gujrat</Text>
      </View>

      <View style={styles.totalView}>
        <View>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.label}>₹359.00</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: '#ebf2f2',
  },
  main: {
    borderRadius: 10,
    backgroundColor: '#fcf0f2',
    borderColor: '#adadad',
    elevation: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardBottom: {
    backgroundColor: '#f5dadd',
    padding: 10,
    borderRadius: 10,
  },
  txtLine1: {
    fontWeight: '500',
    fontSize: 12,
  },
  txtLine2: {
    fontSize: 11,
    fontWeight: '400',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 50,
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
    fontSize: 13,
    fontWeight: 'bold',
  },
  label1: {
    fontSize: 14,
    fontWeight: '400',
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
    marginTop: '69%',
    flexDirection: 'row',
    gap: 5,
    height: 60,
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
    fontWeight: '500',
    color: '#f5f0f1',
    textAlign: 'center',
  },
});
