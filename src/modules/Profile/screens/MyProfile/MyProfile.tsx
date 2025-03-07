import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MyProfile = () => {
  return (
    <ScrollView>
      <Text style={styles.mainTxt}>My Profile</Text>
      <View style={styles.main}>
        <Image
          source={require('../../../../assets/p1.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.txt}>Mobile Number</Text>
        <TextInput style={styles.txtInput} placeholder="Enter name" />
        <Text style={styles.txt}>Email Address</Text>
        <TextInput style={styles.txtInput} placeholder="Enter Email Address" />
      </View>
      <View style={{backgroundColor: '#a6adaa'}}>
        <Text></Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.txt}>First Name</Text>
        <TextInput style={styles.txtInput} placeholder="Enter First Name" />
        <Text style={styles.txt}>Last Name</Text>
        <TextInput style={styles.txtInput} placeholder="Enter Last Name" />
        <Text style={styles.txt}>BirthDay Date(optional)</Text>
        <TextInput style={styles.txtInput} placeholder="Enter BirthDay Date" />
        <Text style={styles.txt}> Identity(Optional)</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 5, width: 50}}>
            <Text style={{textAlign: 'center'}}>male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 5, width: 60}}>
            <Text style={{textAlign: 'center'}}>Female</Text>
          </TouchableOpacity>
        </View>
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
  },
  view: {
    padding: 10,
    margin: 10,
    gap: 10,
  },
  txt: {
    fontSize: 20,
  },
  card: {
    gap: 10,
    padding: 10,
  },
});
