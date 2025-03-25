import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetchCinema} from '../../../Api/Api';

const Cites = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState<string[]>([]);
  useEffect(() => {
    const loadCity = async () => {
      try {
        const cityData = await fetchCinema();
        setCity(cityData);
      } catch (error) {
        console.error(error);
      }
    };

    loadCity();
  }, []);

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
        </View>
      </View>
      <View style={styles.citesTitle}>
        <Text style={styles.cityTitle}>OTHER CITIES</Text>
      </View>

      <View style={[styles.otherCityView, {flex: 1}]}>
        <FlatList
          data={city}
          renderItem={({item}) => (
            <View style={styles.cityView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home', {
                    selectedCity: {location: item},
                  }); // Wrap in object
                }}>
                <Text style={styles.name}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
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
