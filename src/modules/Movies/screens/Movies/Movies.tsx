import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Movies = () => {
  const navigation = useNavigation();
  const Movies = [
    {
      id: 1,
      title: 'Chhaava',
      image: require('../../../../assets/Chhaava.webp'),
      Details:
        'Chhaava is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji Maharaj, the second ruler of the Maratha Empire, who is played ...',
    },
    {
      id: 2,
      title: 'Fati Ne ?',
      image: require('../../../../assets/Fatine.png'),
      Details:
        'Param Laal and Padam Laal, two dimwitted but well-meaning cops in Melbourne, owe their jobs to their legendary uncle Velji',
    },
    {
      id: 3,
      title: 'Umbaro',
      image: require('../../../../assets/Umbaro.webp'),
      Details:
        'Seven women from rural Gujarat embark on their first international trip to London, facing cultural clashes, language barriers in word.',
    },
    {
      id: 4,
      title: 'Mom Tne Nai Samjay',
      image: require('../../../../assets/MomTneNaiSmjai.webp'),
      Details:
        'Set in London, this emotional drama follows the life of Aashka and Kunal, a couple who strive to uphold Indian culture while raising their children',
    },
    {
      id: 5,
      title: 'The Monkey',
      image: require('../../../../assets/TheMonkey.webp'),
      Details:
        'It follows twin brothers whose lives are turned upside down by a cursed toy monkey that causes random horrific deaths around them.',
    },
    {
      id: 6,
      title: 'Best Of Luck Pandya',
      image: require('../../../../assets/BestOfLuckPandya.png'),
      Details:
        ' Comedy Drama released in Gujarati language in theatre near you in kolkata. Know about Film reviews, lead cast & crew, ...',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Now Showing</Text>
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
            <Text style={styles.nameCity}>
              Ahemdabad | {Movies.length} Movies
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={Movies}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.main}>
            <Pressable
              onPress={() =>
                navigation.navigate('MovieDetails', {movie: item})
              }>
              <Image source={item.image} style={styles.img} />
            </Pressable>

            <View>
              <Text style={styles.imgText}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    paddingLeft: 20,
  },
  searchBtn: {
    height: 20,
    width: 25,
    resizeMode: 'contain',
    paddingLeft: '100%',
  },
  main: {
    padding: 5,
    paddingTop: 10,
  },
  img: {
    width: 195,
    height: 290,
    borderRadius: 5,
  },
  nameCity: {
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 3,
    fontFamily: 'Lato-Regular',
  },
  imgText: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
  },
});
