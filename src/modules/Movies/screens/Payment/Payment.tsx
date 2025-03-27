import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {payment} from '../../../Api/Api';

const Payments = ({route}: any) => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const {orderTotal} = route.params; // Get the order total from route params

  // Validate card number (16 digits)
  const validateCardNumber = (number: string) => {
    const cleanedNumber = number.replace(/\s+/g, '');
    if (!/^\d+$/.test(cleanedNumber)) {
      return false;
    }
    return cleanedNumber.length === 16;
  };

  // Validate expiry date (MM/YY)
  const validateExpiryDate = (date: string) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    return regex.test(date);
  };

  // Validate CVV (3 or 4 digits)
  const validateCvv = (cvvValue: string) => {
    return /^\d{3,4}$/.test(cvvValue);
  };

  // Handle booking confirmation and payment processing
  const handleConfirmBooking = async () => {
    if (!validateCardNumber(cardNumber)) {
      Alert.alert('Error', 'Please enter a valid 16-digit card number.');
      return;
    }
    if (!validateExpiryDate(expiryDate)) {
      Alert.alert('Error', 'Please enter a valid expiry date (MM/YY).');
      return;
    }
    if (!validateCvv(cvv)) {
      Alert.alert('Error', 'Please enter a valid CVV.');
      return;
    }

    setLoading(true); // Start loading

    // Prepare payment data
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
      orderTotal,
    };

    try {
      // Call the payment function to save the data
      const result = await payment(paymentData);

      if (result && result.message === 'Payment saved successfully') {
        setLoading(false); // Stop loading
        navigation.navigate('Success'); // Navigate to success screen
      } else {
        setLoading(false); // Stop loading
        Alert.alert('Error', 'Payment failed. Please try again.');
      }
    } catch (error) {
      setLoading(false); // Stop loading
      Alert.alert('Error', 'An error occurred while processing payment.');
    }
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
          <Text style={styles.headerTitle}>Payment</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.cardMain}>
          <View style={styles.card}>
            <Text style={styles.text}>Credit/Debit Card</Text>
          </View>
          <View style={styles.Data}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              placeholder="Enter Card Number"
              style={styles.labelInput}
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
          </View>
          <View style={styles.Data}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              placeholder="MM/YY"
              style={styles.labelInput}
              keyboardType="numeric"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
          </View>
          <View style={styles.Data}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              placeholder="Enter CVV"
              style={styles.labelInput}
              keyboardType="numeric"
              value={cvv}
              onChangeText={setCvv}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={handleConfirmBooking}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#e3dedf" />
              ) : (
                <Text style={styles.txtBtn}>Pay ₹{orderTotal}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f5',
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
    alignItems: 'center',
    paddingTop: 150,
  },
  cardMain: {
    backgroundColor: '#fcf7f8',
    height: 400,
    width: 350,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Lato-Black',
    borderBottomWidth: 1,
    borderColor: '#edebeb',
  },
  Data: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    paddingBottom: 10,
  },
  labelInput: {
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Lato-Regular',
  },
  btnView: {
    paddingTop: 30,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#f5405e',
    width: 300,
    height: 35,
    borderRadius: 10,
  },
  txtBtn: {
    textAlign: 'center',
    fontFamily: 'Lato-Black',
    fontSize: 20,
    color: 'white',
    paddingTop: 5,
  },
});
