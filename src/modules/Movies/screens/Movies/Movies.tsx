import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MovieDetails from '../MovieDetails/MovieDetails';

const Movies = () => {
  const navigation = useNavigation();
  const Movies = [
    {
      id: 1,
      title: 'Chhaava',
      image: require('../../../../assets/Chhaava.webp'),
    },
    {
      id: 2,
      title: 'Fati Ne ?',
      image: require('../../../../assets/Fatine.png'),
    },
    {
      id: 3,
      title: 'Umbaro',
      image: require('../../../../assets/Umbaro.webp'),
    },
    {
      id: 4,
      title: 'Mom Tne Nai Samjay',
      image: require('../../../../assets/MomTneNaiSmjai.webp'),
    },
    {
      id: 5,
      title: 'The Monkey',
      image: require('../../../../assets/TheMonkey.webp'),
    },
    {
      id: 6,
      title: 'Best Of Luck Pandya',
      image: require('../../../../assets/BestOfLuckPandya.png'),
    },
  ];

  return (
    <FlatList
      numColumns={2}
      data={Movies}
      renderItem={({item}) => (
        <View style={styles.main}>
          <Pressable onPress={() => navigation.navigate('MovieDetails')}>
            <Image source={item.image} style={styles.img} />
          </Pressable>

          <View>
            <Text>{item.title}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default Movies;

const styles = StyleSheet.create({
  main: {
    padding: 5,
    backgroundColor: '#dedddc',
    paddingTop: 20,
  },
  img: {
    width: 195,
    height: 270,
    borderRadius: 10,
  },
});
