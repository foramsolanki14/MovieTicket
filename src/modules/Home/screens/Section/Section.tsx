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
  const {genre, moviesToShow} = route.params;
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
          <Text style={styles.headerTitle}>{genre} Movies </Text>
        </View>
        <View>
          <Text style={styles.nameCity}>
            Ahemdabad | {moviesToShow.length} Movies
          </Text>
        </View>
      </View>
      <FlatList
        data={moviesToShow}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() => navigation.navigate('MovieDetails', {movie: item})}>
            <Image src={item.image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafbfc',
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
  movieItem: {
    flex: 1 / 2,
    margin: 8,
    alignItems: 'center',
  },
  movieImage: {
    width: 185,
    height: 290,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  nameCity: {
    fontSize: 13,
    paddingLeft: 100,
    paddingTop: 3,
    fontFamily: 'Lato-Regular',
  },
});
