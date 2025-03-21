import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Cites = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentCity = route.params?.currentCity || 'Select City';

  const cites = [
    {id: 1, name: 'Mumbai', image: require('../../../../assets/city/c1.webp')},
    {
      id: 2,
      name: 'Delhi-NCR',
      image: require('../../../../assets/city/c2.png'),
    },
    {
      id: 3,
      name: 'Bengaluru',
      image: require('../../../../assets/city/c3.png'),
    },
    {
      id: 4,
      name: 'Hyderabad',
      image: require('../../../../assets/city/c4.png'),
    },
    {
      id: 5,
      name: 'Ahmedabad',
      image: require('../../../../assets/city/c5.png'),
    },
    {
      id: 6,
      name: 'Chandigarh',
      image: require('../../../../assets/city/c6.png'),
    },
    {id: 7, name: 'Chennai', image: require('../../../../assets/city/c7.png')},
    {id: 8, name: 'Pune', image: require('../../../../assets/city/c8.png')},
    {id: 9, name: 'Kolkata', image: require('../../../../assets/city/c9.png')},
    {id: 10, name: 'Kochi', image: require('../../../../assets/city/c10.png')},
  ];
  const otherCities = [
    'Aalo',
    'Abohar',
    'Abu Road',
    'Achampet',
    'Addanki',
    'Adilabad',
    'Adimali',
    'Adipur',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerData}>
        <View style={styles.headerView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../../assets/icon/backBtn.png')}
                style={styles.search}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Pick a Region</Text>
          </View>
          <View style={styles.header}>
            <Image
              source={require('../../../../assets/icon/search.png')}
              style={styles.search}
            />
            <TextInput
              placeholder="Search for your City"
              style={styles.headerTitle}
            />
          </View>
          <View style={styles.header}>
            <Image
              source={require('../../../../assets/icon/gps.png')}
              style={styles.search}
            />
            <Text style={styles.gps}>Auto Detect My Location</Text>
          </View>
        </View>
      </View>

      <View style={styles.citesTitle}>
        <Text style={styles.cityTitle}>POPULAR CITIES</Text>
      </View>
      <View style={styles.mainView}>
        <FlatList
          data={cites}
          numColumns={4}
          renderItem={({item}) => (
            <View style={styles.citesView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home', {selectedCity: item.name});
                }}>
                <Image source={item.image} style={styles.citesImage} />
              </TouchableOpacity>
              <Text style={styles.cites}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.citesTitle}>
        <Text style={styles.cityTitle}>OTHER CITIES</Text>
      </View>

      <View style={[styles.otherCityView, {flex: 1}]}>
        <FlatList
          data={otherCities}
          renderItem={({item}) => (
            <View style={styles.cityView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home', {selectedCity: item});
                }}>
                <Text style={styles.name}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Cites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
  },
  headerData: {
    justifyContent: 'center',
  },
  headerView: {
    backgroundColor: '#faf8f2',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    padding: 7,
  },

  headerTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    paddingLeft: 20,
  },
  search: {
    width: 20,
    height: 20,
  },
  gps: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    paddingLeft: 10,
  },
  cityTitle: {
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
  citesTitle: {
    backgroundColor: '#f5edf7',
    padding: 14,
    borderColor: 'gray',
  },
  mainView: {
    padding: 5,
  },
  citesView: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    borderWidth: 1,
    borderColor: 'gray',
  },
  cites: {
    fontSize: 9,
    fontFamily: 'Lato-Bold',
    paddingTop: 10,
  },
  citesImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  otherCityView: {
    padding: 5,
  },
  cityView: {
    borderBottomWidth: 1,
    padding: 10,
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
});
