import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
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
          <Image
            source={require('../../../../assets/icon/search.png')}
            style={styles.searchBtn}
          />
          <TextInput
            placeholder=" Search for Movies"
            style={styles.headerTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  headerView: {
    padding: 5,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButtonImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '400',
  },
  searchBtn: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    paddingLeft: '20%',
  },
});
