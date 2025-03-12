import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      setRecentSearches(prevSearches => [searchText, ...prevSearches]);
      setSearchText('');
      console.log('Searching for:', searchText);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/icon/backBtn.png')}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
        <TextInput
          placeholder=" Search for Movies"
          style={styles.headerTitle}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('../../../../assets/icon/search.png')}
            style={styles.searchBtn}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchView}>
        <View style={styles.searchHeader}>
          <Text style={styles.text1}>Recent Search</Text>
          <TouchableOpacity onPress={clearRecentSearches}>
            <Text style={styles.text1}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.itemView}>
        {recentSearches.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSearchText(item)}
            style={styles.item}>
            <Text style={styles.txt}>{item}</Text>
            <Image
              source={require('../../../../assets/icon/m1.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButtonImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '400',
    flex: 1,
    marginLeft: 5,
  },
  searchBtn: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  searchView: {
    backgroundColor: '#d4cfcf',
    borderTopWidth: 1,
    borderColor: '#a6a4a4',
    padding: 10,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 15,
    fontWeight: '500',
  },
  itemView: {
    paddingLeft: 10,
    flex: 1,
  },
  txt: {
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 15,
  },
  img: {
    height: 20,
    width: 20,
  },
});
