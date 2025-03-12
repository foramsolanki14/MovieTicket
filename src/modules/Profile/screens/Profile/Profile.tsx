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
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>

          <Image
            source={require('../../../../assets/icon/profile.png')}
            style={styles.searchBtn}
          />
        </View>
      </View>
      <ScrollView>
        <Pressable
          style={styles.data}
          onPress={() => navigation.navigate('MyProfile')}>
          <Image
            source={require('../../../../assets/icon/profile.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>MyProfile</Text>
        </Pressable>
        <Pressable
          style={styles.data}
          onPress={() => navigation.navigate('YourOrders')}>
          <Image
            source={require('../../../../assets/icon/yourorder.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Your Orders</Text>
        </Pressable>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/streem.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Stream Library</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/playcradit.webp')}
            style={styles.img}
          />
          <Text style={styles.txt}>Play Cradit Card</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/help.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Help Center</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/settings.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Account & Settings</Text>
        </View>
        <View style={{backgroundColor: '#c0c4c1', paddingTop: 15}} />

        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/reward.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Rewards</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/offer.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>offers</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/gift-card.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Gift Cards</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/food.png')}
            style={styles.img}
          />
          <Text style={styles.txt}>Food & Beverages</Text>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/show.webp')}
            style={styles.img}
          />
          <Text style={styles.txt}>List your Show</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
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
    fontWeight: 'bold',
    paddingLeft: 20,
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
  },
  txt: {
    justifyContent: 'center',
    fontSize: 20,
  },
  img: {
    padding: 10,
    height: 30,
    width: 30,
    margin: 10,
  },
});
