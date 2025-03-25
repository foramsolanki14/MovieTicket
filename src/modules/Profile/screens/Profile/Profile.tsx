import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {firstName} = route.params || {};
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
          <Text style={styles.headerTitle}>Hey {firstName}!</Text>

          <Image
            source={require('../../../../assets/icon/profile.png')}
            style={styles.searchBtn}
          />
        </View>
      </View>
      <View style={styles.main}>
        <Pressable
          style={styles.data}
          onPress={() => navigation.navigate('MyProfile')}>
          <Image
            source={require('../../../../assets/icon/profile.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>My Profile</Text>
          </View>
        </Pressable>
        <View style={styles.gap} />
        <Pressable
          style={styles.data}
          onPress={() => navigation.navigate('YourOrders')}>
          <Image
            source={require('../../../../assets/icon/yourorder.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Your Booking</Text>
            <Text style={styles.textLine}>View all your booking</Text>
          </View>
        </Pressable>
        <View style={styles.gap} />
        <Pressable
          style={styles.data}
          onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../../../../assets/icon/settings.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Settings</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
    // paddingTop: 50,
  },
  main: {
    paddingTop: 20,
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    paddingLeft: 20,
  },
  backButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  searchBtn: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    paddingLeft: '140%',
  },
  data: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 7,
  },
  txt: {
    justifyContent: 'center',
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    paddingLeft: 20,
  },
  textLine: {
    justifyContent: 'center',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    paddingLeft: 20,
    paddingTop: 3,
  },
  img: {
    padding: 10,
    height: 30,
    width: 30,
    margin: 10,
    resizeMode: 'contain',
  },
  gap: {
    backgroundColor: '#e6e5e3',

    paddingTop: 15,
  },
});
