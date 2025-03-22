import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

function SelectSeat({route}) {
  const navigation = useNavigation();
  const {
    movie,
    theaterName,
    ticketPrice,
    selectedTime,
    selectedDate,
    location,
    ScreenName,
  } = route.params;

  const seat1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const section = ['D', 'C', 'B', 'A'];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [soldSeats, setSoldSeats] = useState([]);

  useEffect(() => {
    setSoldSeats(['D-1', 'C-3', 'A-7']);
  }, []);

  const handleSeatSelection = (sec, seat) => {
    const seatId = `${sec}-${seat}`;

    if (soldSeats.includes(seatId)) {
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(
        selectedSeats.filter(selectedSeat => selectedSeat !== seatId),
      );
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getSeatColor = (sec, seat) => {
    const seatId = `${sec}-${seat}`;
    if (soldSeats.includes(seatId)) {
      return '#808080'; // Sold
    } else if (selectedSeats.includes(seatId)) {
      return '#008000'; // Selected
    } else {
      return '#FFFFFF'; // Available
    }
  };
  const totalPrice = selectedSeats.length * ticketPrice;

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      })
    : '';

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
        <Text style={styles.theaterName}>
          {theaterName} | {location}
        </Text>
      </View>
      <View style={styles.topView}>
        <View style={styles.DateTime}>
          <Text style={styles.date}>{formattedDate}</Text>

          <Text style={styles.ticket}>{selectedSeats.length} Ticket(s)</Text>
        </View>
        <Text style={styles.sText}>{ScreenName}</Text>
        <TouchableOpacity style={styles.timeBtn}>
          <Text style={styles.timeTxt}>{selectedTime}</Text>
        </TouchableOpacity>
        <Text style={styles.price}>Rs.{ticketPrice}</Text>
      </View>
      <View style={styles.section}>
        <FlatList
          data={section}
          renderItem={({item: sec}) => (
            <View>
              <Text style={styles.sectionTxt}>{sec} </Text>
              <View style={styles.seatSection}>
                <FlatList
                  data={seat1}
                  numColumns={6}
                  renderItem={({item: seat}) => {
                    const seatColor = getSeatColor(sec, seat);
                    const seatId = `${sec}-${seat}`;
                    return (
                      <TouchableOpacity
                        onPress={() => handleSeatSelection(sec, seat)}
                        disabled={soldSeats.includes(seatId)}>
                        <Text
                          style={[styles.seat, {backgroundColor: seatColor}]}>
                          {seat}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
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
          onPress={() =>
            navigation.navigate('ContactDetails', {
              movie: movie,
              selectedSeats,
              totalPrice: totalPrice,
              theaterName,
              selectedDate: selectedDate,
              selectedTime,
              location: location,
              selectedSeatsCount: selectedSeats.length,
              ScreenName,
            })
          }>
          <Text style={styles.btnTxt}>Pay ₹ {totalPrice}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SelectSeat;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcfc',
    // paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
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
    paddingLeft: 17,
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
    height: '14%',
    width: '100%',
    padding: 5,
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
  price: {
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 17,
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
    fontSize: 15,
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
    paddingTop: '10%',
    position: 'static',
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
    paddingTop: '5%',
    position: 'static',
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
    paddingTop: '10%',
    position: 'static',
  },
  countBtn: {
    backgroundColor: '#e3204a',
    height: '22%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: 'white',
  },
  sText: {
    fontFamily: 'Lato-Bold',
    paddingBottom: 4,
  },
});
