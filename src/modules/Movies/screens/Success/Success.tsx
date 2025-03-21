import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Success = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/icon/backBtn.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle} />
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.cardMain}>
          <View style={styles.card}>
            <Text style={styles.text}>Order Confirmed</Text>
            <Image
              source={require('../../../../assets/icon/firework.png')}
              style={styles.img}
            />
          </View>
          <Image
            source={require('../../../../assets/icon/right.png')}
            style={styles.img2}
          />
        </View>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f5',
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,
  },
  cardMain: {
    backgroundColor: '#fcf7f8',
    elevation: 15,
    height: 200,
    width: 240,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Lato-Black',
  },
  img: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  img2: {
    height: 50,
    width: 50,
    padding: 60,
  },
});
