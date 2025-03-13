import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ContactDetails = () => {
  const navigation = useNavigation();
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
          <TextInput style={styles.txtInput} placeholder="eg:abc@gmail.com" />
          <Text style={styles.line}>
            This E-mail will only be used for sending ticket(s)
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.txt}>Phone number</Text>
          <TextInput style={styles.txtInput} placeholder="eg:91480XXXXX" />
          <Text style={styles.line}>
            To access the ticket(s) on other devices, Login with this number
          </Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('ConfirmBooking')}>
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
    fontFamily: 'Lato-Bold',
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
    paddingTop: 500,
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
