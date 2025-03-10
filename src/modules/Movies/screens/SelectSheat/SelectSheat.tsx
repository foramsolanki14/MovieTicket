import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

const SelectSeat = () => {
  const seat1 = [1, 2, 3, 4];
  const seat2 = [1, 2, 3, 4, 5, 6, 7, 8];
  const seat3 = [1, 2, 3, 4, 5, 6];
  const seat4 = [1, 2, 3, 4, 5, 6, 7];
  const slot = ['Bestseller', 'Available', 'Selected', 'Sold'];
  return (
    <View style={styles.container}>
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
        <View style={styles.screen}></View>
        <View>
          <Text style={styles.screenTxt}>All Eyes this way Please</Text>
        </View>
      </View>
      <View style={styles.seatSlot}>
        <FlatList
          data={slot}
          numColumns={4}
          renderItem={({item}) => (
            <View style={styles.seatItm}>
              <View style={{width: 15, height: 15, borderWidth: 1}} />
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.countBtn}>
          <Text style={styles.btnTxt}>Pay ₹ 0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectSeat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcfc',
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
    fontWeight: '600',
  },
  ticket: {
    fontSize: 13,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    padding: 15,
  },
  sectionTxt: {
    fontSize: 13,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderColor: '#e0dadb',
  },
  seatSection: {
    paddingLeft: '10%',
    paddingBottom: 10,
  },
  seat: {
    height: 20,
    width: 20,
    borderWidth: 1,
    margin: 4,
    textAlign: 'center',
    borderRadius: 3,
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
    fontSize: 13,
    paddingLeft: 10,
  },
  seatSlot: {
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#e8e3e4',
    height: 40,
    marginTop: 40,
  },
  seatItm: {
    padding: 17,
    flexDirection: 'row',
  },
  countBtn: {
    backgroundColor: '#e3204a',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
