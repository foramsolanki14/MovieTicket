import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Pressable
        style={styles.data}
        onPress={() => navigation.navigate('MyProfile')}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          MyProfile
        </Text>
      </Pressable>
      <Pressable
        style={styles.data}
        onPress={() => navigation.navigate('YourOrders')}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          Your Orders
        </Text>
        r
      </Pressable>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          Stream Library
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          Play Cradit Card
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          Help Center
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          Account & Settings
        </Text>
      </View>
      <View style={{backgroundColor: '#c0c4c1'}}>
        <Text></Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          Rewards
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />
          offers
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />{' '}
          Gift Cards
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />{' '}
          Food & Beverages
        </Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.txt}>
          <Image source={require('../assets/profile.png')} style={styles.img} />{' '}
          List your Show
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  data: {
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  txt: {
    justifyContent: 'center',
    fontSize: 20,
  },
  img: {
    padding: 10,
    height: 30,
    width: 30,
    margin: 20,
  },
});
