import {useNavigation} from '@react-navigation/native';
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

const Home = () => {
  const navigation = useNavigation();

  const Movies = [
    {
      id: 1,
      title: 'Chhaava',
      image: require('../../../../assets/Chhaava.webp'),
      Genres: 'Historical',
      Details:
        'Chhaava is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji Maharaj, the second ruler of the Maratha Empire, who is played ...',
    },
    {
      id: 2,
      title: 'Fati Ne ?',
      image: require('../../../../assets/Fatine.png'),
      Genres: 'Horror',
      Details:
        'Param Laal and Padam Laal, two dimwitted but well-meaning cops in Melbourne, owe their jobs to their legendary uncle Velji',
    },
    {
      id: 3,
      title: 'Umbaro',
      image: require('../../../../assets/Umbaro.webp'),
      Genres: 'Family',
      Details:
        'Seven women from rural Gujarat embark on their first international trip to London, facing cultural clashes, language barriers in word.',
    },
    {
      id: 4,
      title: 'Mom Tne Nai Samjay',
      image: require('../../../../assets/MomTneNaiSmjai.webp'),
      Genres: 'Family',
      Details:
        'Set in London, this emotional drama follows the life of Aashka and Kunal, a couple who strive to uphold Indian culture while raising their children',
    },
    {
      id: 5,
      title: 'The Monkey',
      image: require('../../../../assets/TheMonkey.webp'),
      Genres: 'Horror',
      Details:
        'It follows twin brothers whose lives are turned upside down by a cursed toy monkey that causes random horrific deaths around them.',
    },
    {
      id: 6,
      title: 'Best Of Luck Pandya',
      image: require('../../../../assets/BestOfLuckPandya.png'),
      Genres: 'Drama',
      Details:
        ' Comedy Drama released in Gujarati language in theatre near you in kolkata . Know about Film reviews, lead cast & crew, ...',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Welcome Guest!</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../../../../assets/icon/search.png')}
              style={styles.searchBtn}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View>
            <Text style={styles.nameCity}>Ahmedabad</Text>
          </View>
          <TouchableOpacity onPressOut={() => navigation.navigate('Cites')}>
            <Image
              source={require('../../../../assets/icon/arrow-right.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.iconView}>
          <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
            <Image
              source={require('../../../../assets/icon/film.png')}
              style={styles.film}
            />
            <Text style={styles.iconText}>Movies</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section1}>
          <View style={styles.card}>
            <Text style={styles.cardHeader}>Recommended Movies</Text>
            <TouchableOpacity>
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
            data={Movies}
            renderItem={({item}) => (
              <View style={styles.main}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('MovieDetails', {movie: item})
                  }>
                  <Image source={item.image} style={styles.imgSection1} />
                </Pressable>
                <Text style={styles.txtImg}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.section2}>
          <View style={styles.card}>
            <Text style={styles.cardHeader}>Recommended Movies</Text>
            <TouchableOpacity>
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
            data={Movies}
            renderItem={({item}) => (
              <View style={styles.main}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('MovieDetails', {movie: item})
                  }>
                  <Image source={item.image} style={styles.imgSection2} />
                </Pressable>
                <Text style={styles.txtImg}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.section3}>
          <View style={styles.card}>
            <Text style={styles.cardHeader}>Recommended Movies</Text>
            <TouchableOpacity>
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
            data={Movies}
            renderItem={({item}) => (
              <View style={styles.main}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('MovieDetails', {movie: item})
                  }>
                  <Image source={item.image} style={styles.imgSection3} />
                </Pressable>
                <Text style={styles.txtImg}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
  },
  headerView: {
    padding: 10,
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
    paddingLeft: '100%',
  },
  nameCity: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    paddingLeft: 20,
    fontWeight: '500',
  },
  arrow: {
    height: 15,
    width: 16,
    resizeMode: 'contain',
    paddingLeft: '20%',
    paddingTop: 20,
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
  },
  imgSection1: {
    width: 179,
    height: 220,
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
  section1: {
    paddingLeft: 11,
    paddingTop: 15,
  },
  txtBtn: {
    fontFamily: 'Lato-Black',
  },
  txtImg: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
  },
  section2: {
    paddingLeft: 11,
    paddingTop: 20,
  },
  imgSection2: {
    width: 179,
    height: 220,
    borderRadius: 10,
  },
  section3: {
    paddingLeft: 11,
    paddingTop: 20,
  },
  imgSection3: {
    width: 179,
    height: 220,
    borderRadius: 10,
  },
});
