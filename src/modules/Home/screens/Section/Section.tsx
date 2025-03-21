import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

const Section = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {genre, moviesToShow, selectedCity} = route.params;
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
          <Text style={styles.headerTitle}>{genre} Movies </Text>
        </View>
        <View>
          <Text style={styles.nameCity}>
            {selectedCity.location} | {moviesToShow.length} Movies
          </Text>
        </View>
      </View>
      <FlatList
        data={moviesToShow}
        numColumns={2}
        keyExtractor={item => item.movie_id.toString()}
        renderItem={({item}) => (
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.movieItem}
              onPress={() =>
                navigation.navigate('MovieDetails', {movie: item})
              }>
              <Image
                src={`http://10.0.2.2:5000/images/${item.posterurl}`}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafbfc',
    // paddingTop: 50,
    paddingBottom: '20%',
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  headerTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    paddingLeft: 70,
  },
  backButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  section: {
    paddingTop: 10,
    paddingLeft: 7,
  },
  movieItem: {
    flex: 1 / 2,
    margin: 5,
    alignItems: 'center',
  },
  movieImage: {
    width: 180,
    height: 270,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
  },
  nameCity: {
    fontSize: 13,
    paddingLeft: 100,
    paddingTop: 3,
    fontFamily: 'Lato-Regular',
  },
});
