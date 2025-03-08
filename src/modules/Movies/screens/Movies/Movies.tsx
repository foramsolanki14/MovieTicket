import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Movies = () => {
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
          <Image source={item.image} style={styles.img} />
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
