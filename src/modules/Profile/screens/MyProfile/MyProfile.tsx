import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

const MyProfile = () => {
  return (
    <ScrollView>
      <Text style={styles.mainTxt}>My Profile</Text>
      <View style={styles.main}>
        <Image
          source={require('../../../../assets/icon/profile.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.txt}>Mobile Number</Text>
        <TextInput style={styles.txtInput} placeholder="Enter name" />
        <Text style={styles.txt}>Email Address</Text>
        <TextInput style={styles.txtInput} placeholder="Enter Email Address" />
      </View>
      <View style={{backgroundColor: '#c0c4c1', paddingTop: 15}} />
      <View style={styles.card}>
        <Text style={styles.txt}>First Name</Text>
        <TextInput style={styles.txtInput} placeholder="Enter First Name" />
        <Text style={styles.txt}>Last Name</Text>
        <TextInput style={styles.txtInput} placeholder="Enter Last Name" />
        <Text style={styles.txt}>BirthDay Date(optional)</Text>
        <TextInput style={styles.txtInput} placeholder="Enter BirthDay Date" />
        <Text style={styles.txt}> Identity(Optional)</Text>
        <View style={{flexDirection: 'row', gap: 10, padding: 5}}>
          <TouchableOpacity style={styles.genderView}>
            <Text style={styles.gender}>male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderView}>
            <Text style={styles.gender}>Female</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  mainTxt: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
    fontFamily: 'Lato-Bold',
  },
  img: {
    width: 100,
    height: 100,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    fontFamily: 'Lato-Regular',
  },
  view: {
    padding: 10,
    margin: 10,
    gap: 10,
  },
  txt: {
    fontSize: 20,
    padding: 10,
    fontFamily: 'Lato-Regular',
  },
  card: {
    gap: 10,
    padding: 4,
  },
  genderView: {
    borderWidth: 1,
    borderRadius: 5,
    width: 70,
  },
  gender: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'gray',
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
