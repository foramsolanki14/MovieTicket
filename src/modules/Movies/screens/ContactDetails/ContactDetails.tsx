import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ContactDetails = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactNumberError, setContactNumberError] = useState('');

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validateContactNumber = () => {
    if (!contactnumber.trim()) {
      setContactNumberError('Please enter your phone number.');
      return false;
    } else if (!/^\d{10}$/.test(contactnumber)) {
      setContactNumberError('Please enter a valid 10-digit phone number.');
      return false;
    } else {
      setContactNumberError('');
      return true;
    }
  };

  const handleUpdateDetails = () => {
    const isEmailValid = validateEmail();
    const isContactNumberValid = validateContactNumber();

    if (isEmailValid && isContactNumberValid) {
      navigation.navigate('ConfirmBooking');
    }
  };

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
          <Text style={styles.headerTitle}>Contact Details</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.txt}>Your Email</Text>
          <TextInput
            style={[styles.txtInput, emailError ? styles.inputError : null]}
            placeholder="eg : abc@gmail.com"
            onChangeText={text => {
              setEmail(text);
              setEmailError('');
            }}
            value={email}
            onBlur={validateEmail}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : (
            <Text style={styles.line}>
              This E-mail will only be used for sending ticket(s)
            </Text>
          )}
        </View>
        <View style={styles.main}>
          <Text style={styles.txt}>Phone number</Text>
          <TextInput
            style={[
              styles.txtInput,
              contactNumberError ? styles.inputError : null,
            ]}
            placeholder="eg : 91480XXXXX"
            onChangeText={text => {
              setContactnumber(text);
              setContactNumberError('');
            }}
            value={contactnumber}
            keyboardType="numeric"
            onBlur={validateContactNumber}
          />
          {contactNumberError ? (
            <Text style={styles.errorText}>{contactNumberError}</Text>
          ) : (
            <Text style={styles.line}>
              To access the ticket(s) on other devices, Login with this number
            </Text>
          )}
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn} onPress={handleUpdateDetails}>
            <Text style={styles.btnTxt}>Update Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fcf2f2',
    // paddingTop: 50,
  },
  container: {
    padding: 10,
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
  txt: {
    fontFamily: 'Lato-Bold',
    paddingBottom: 10,
    fontSize: 16,
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Lato-Bold ',
  },
  main: {
    paddingTop: 20,
    padding: 5,
  },
  line: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    padding: 5,
  },
  btnView: {
    paddingTop: '125%',
  },
  btn: {
    backgroundColor: '#525151',
    height: 40,
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: '#3d3d3d',
  },
  btnTxt: {
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    color: '#f2eeed',
    textAlign: 'center',
  },
});
