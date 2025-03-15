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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/icon/backBtn.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hey!</Text>

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
        <Pressable
          style={styles.data}
          onPress={() => navigation.navigate('YourOrders')}>
          <Image
            source={require('../../../../assets/icon/yourorder.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Your Orders</Text>
            <Text style={styles.textLine}>
              View all your booking & purchases
            </Text>
          </View>
        </Pressable>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/streem.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Stream Library</Text>
            <Text style={styles.textLine}>Rented & Purchsed Movies</Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            src="https://assets-in.bmscdn.com/members/common/icons/playcreditcard.png"
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Play Cradit Card</Text>
            <Text style={styles.textLine}>
              View your play cardit card details and offers
            </Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/help.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Help Center</Text>
            <Text style={styles.textLine}>Need help or have questions?</Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/settings.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Account & Settings</Text>
            <Text style={styles.textLine}>
              Location, payments,permission & More
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#c0c4c1', paddingTop: 15}} />

        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/reward.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Rewareds</Text>
            <Text style={styles.textLine}>
              View your rewards & unlock new ones
            </Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/offer.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>offers</Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/gift-card.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Gift Cards</Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/food.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>Food & Beverages</Text>
          </View>
        </View>
        <View style={styles.data}>
          <Image
            source={require('../../../../assets/icon/show.webp')}
            style={styles.img}
          />
          <View>
            <Text style={styles.txt}>List your Show</Text>
            <Text style={styles.textLine}>got an event ? Partner with us</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
    paddingTop: 50,
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
    paddingLeft: 12,
  },
  textLine: {
    justifyContent: 'center',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    paddingLeft: 12,
    paddingTop: 3,
  },
  img: {
    padding: 10,
    height: 23,
    width: 23,
    margin: 10,
    resizeMode: 'contain',
  },
});
