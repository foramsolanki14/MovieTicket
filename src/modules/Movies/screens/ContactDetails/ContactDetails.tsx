import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const ContactDetails = () => {
  return (
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
        <TextInput style={styles.txtInput} placeholder="Enter number" />
        <Text style={styles.line}>
          To access the ticket(s) on other devices, Login with this number
        </Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Update Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
  },
  txt: {
    fontWeight: '500',
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 5,
  },
  main: {
    paddingTop: 20,
  },
  line: {
    fontSize: 11,
    fontWeight: '500',
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
    fontWeight: 'bold',
    color: '#f2eeed',
    textAlign: 'center',
  },
});
