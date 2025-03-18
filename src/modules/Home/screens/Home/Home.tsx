import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {fetchMovies} from '../../../Api/Api';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface movieData {
  description: string;
  duration: number;
  genres: string;
  movie_id: number;
  posterurl: string;
  release_date: string;
  title: string;
}

const Home = () => {
  const navigation = useNavigation();
  const [movie, setMovie] = useState<movieData[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  const getMoviesByGenre = (genre: string) => {
    return movie.filter(movie => movie.genres.includes(genre));
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovie(moviesData);
        const allGenres = Array.from(
          new Set(
            moviesData.flatMap((movie: {genres: string}) =>
              movie.genres.split(', '),
            ),
          ),
        );
        setGenres(allGenres);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    loadMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerView}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Welcome Guest!</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={require('../../../../assets/icon/menubar.png')}
                  style={styles.searchBtn}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header}>
            <View>
              <Text style={styles.nameCity}>Ahmedabad</Text>
            </View>
            <View style={styles.menu}>
              <TouchableOpacity onPressOut={() => navigation.navigate('Cites')}>
                <Image
                  source={require('../../../../assets/icon/arrow-right.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          {genres.map(genre => {
            const moviesToShow =
              genre === 'Recommended' ? movie : getMoviesByGenre(genre);
            if (moviesToShow.length === 0) return null;

            return (
              <View key={genre} style={styles.section}>
                <View style={styles.card}>
                  <Text style={styles.cardHeader}>{genre} Movies</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Section', {genre, moviesToShow})
                    }>
                    <Text style={styles.txtBtn}>
                      See All
                      <Image
                        source={require('../../../../assets/icon/arrow-right.png')}
                        style={styles.arrow1}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal
                  data={moviesToShow}
                  renderItem={({item}) => (
                    <View style={styles.main}>
                      <Pressable
                        onPress={() =>
                          navigation.navigate('MovieDetails', {movie: item})
                        }>
                        <Image
                          source={{uri: item.posterurl}}
                          style={styles.imgSection}
                        />
                      </Pressable>
                      <View style={styles.title}>
                        <Text style={styles.txtImg}>{item.title}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
    paddingBottom: '30%',
    // paddingTop: 50,
  },

  headerView: {
    padding: 5,
    backgroundColor: '#fffafa',
    height: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    paddingLeft: 20,
  },
  searchBtn: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
    paddingLeft: '105%',
    paddingTop: '7%',
  },
  nameCity: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    paddingLeft: 20,
  },
  arrow: {
    height: 15,
    width: 16,
    resizeMode: 'contain',
    paddingLeft: '20%',
    paddingTop: 20,
  },
  menu: {
    justifyContent: 'center',
  },
  arrow1: {
    height: 11,
    width: 11,
  },
  iconView: {
    padding: 15,
  },
  film: {
    height: 40,
    width: 40,
  },
  iconText: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
    paddingTop: 10,
  },
  main: {
    padding: 4,
    paddingTop: 10,
    gap: 4,
  },
  imgSection: {
    width: 150,
    height: 220,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeader: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    paddingLeft: 10,
  },
  section: {
    paddingLeft: 11,
    paddingTop: 20,
  },
  txtBtn: {
    fontFamily: 'Lato-Black',
    paddingRight: 10,
  },
  txtImg: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    borderRadius: 4,
    paddingLeft: 7,
  },
  title: {
    padding: 5,
    backgroundColor: '#ede9e8',
    borderRadius: 7,
  },
});
