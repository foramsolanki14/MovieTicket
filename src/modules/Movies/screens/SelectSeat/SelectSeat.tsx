import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function SelectSeat({route}) {
  const navigation = useNavigation();
  const {movie, theater} = route.params;

  const seat1 = [1, 2, 3, 4];
  const seat2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const seat3 = [1, 2, 3, 4, 5, 6];
  const seat4 = [1, 2, 3, 4, 5, 6, 7];

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
          <Text style={styles.headerTitle}>{movie.title}</Text>
        </View>
        <Text style={styles.theaterName}>{theater}</Text>
      </View>
      <View style={styles.topView}>
        <View style={styles.DateTime}>
          <Text style={styles.date}>Mon, 03 Mar</Text>
          <Text style={styles.ticket}>2 Ticket</Text>
        </View>
        <TouchableOpacity style={styles.timeBtn}>
          <Text style={styles.timeTxt}>3:15 PM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTxt}>Rs. 550 RECLINER: </Text>
      </View>
      <View style={styles.seatSection}>
        <FlatList
          data={seat1}
          numColumns={4}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={styles.seat}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTxt}>Rs. 250 PRIME PLUS: </Text>
      </View>
      <View style={styles.seatSection}>
        <FlatList
          data={seat2}
          numColumns={4}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={styles.seat}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTxt}>Rs. 200 PRIME : </Text>
      </View>
      <View style={styles.seatSection}>
        <FlatList
          data={seat3}
          numColumns={4}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={styles.seat}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTxt}>Rs. 170 CLASSIC: </Text>
      </View>
      <View style={styles.seatSection}>
        <FlatList
          data={seat4}
          numColumns={4}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={styles.seat}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.screenView}>
        <View style={styles.screen} />
        <View>
          <Text style={styles.screenTxt}>All Eyes this way Please</Text>
        </View>
      </View>
      <View>
        <View style={styles.slot}>
          <View style={styles.slotItem}>
            <View style={[styles.slotColor, {backgroundColor: '#FFD700'}]} />
            <Text style={styles.slotText}>Bestseller</Text>
          </View>
          <View style={styles.slotItem}>
            <View style={[styles.slotColor, {backgroundColor: '#FFFFFF'}]} />
            <Text style={styles.slotText}>Available</Text>
          </View>
          <View style={styles.slotItem}>
            <View style={[styles.slotColor, {backgroundColor: '#008000'}]} />
            <Text style={styles.slotText}>Selected</Text>
          </View>
          <View style={styles.slotItem}>
            <View style={[styles.slotColor, {backgroundColor: '#808080'}]} />
            <Text style={styles.slotText}>Sold</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.countBtn}
          onPress={() => navigation.navigate('ContactDetails')}>
          <Text style={styles.btnTxt}>Pay ₹ 0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SelectSeat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcfc',
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  theaterName: {
    fontSize: 12,
    color: 'gray',
    paddingLeft: 13,
    fontFamily: 'Lato-Regular',
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

  topView: {
    backgroundColor: '#e4eaeb',
    height: '11%',
    width: '100%',
    padding: 10,
  },
  DateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  date: {
    fontSize: 13,
    fontFamily: 'Lato-Bold',
  },
  ticket: {
    fontSize: 13,
    fontFamily: 'Lato-Bold',
  },
  timeBtn: {
    height: 35,
    width: '25%',
    backgroundColor: '#3a991a',
    borderRadius: 5,
    justifyContent: 'center',
  },
  timeTxt: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    color: 'white',
  },
  section: {
    padding: 15,
  },
  sectionTxt: {
    fontSize: 13,
    fontFamily: 'Lato-Bold',
    borderBottomWidth: 1,
    borderColor: '#e0dadb',
  },
  seatSection: {
    paddingLeft: '10%',
    paddingBottom: 10,
  },
  seat: {
    fontFamily: 'Lato-Regular',
    height: 20,
    width: 20,
    borderWidth: 1,
    margin: 4,
    textAlign: 'center',
    borderRadius: 3,
    flexWrap: 'wrap',
  },
  screenView: {
    paddingLeft: '30%',
    paddingTop: 50,
  },
  screen: {
    height: 70,
    backgroundColor: '#69e0f0',
    width: '60%',
    borderWidth: 1,
    borderColor: '#70bdc4',
  },
  screenTxt: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    paddingLeft: 10,
  },
  slot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    paddingTop: 20,
  },
  slotItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slotColor: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 8,
  },
  slotText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  btnView: {
    paddingTop: 9,
  },
  countBtn: {
    backgroundColor: '#e3204a',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: 'white',
  },
});
