import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function MovieDetails({route}) {
  const navigation = useNavigation();
  const {movie} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.movieName}>{movie.title}</Text>
      <Image source={movie.image} style={styles.img} />
      <Text style={styles.Details}>{movie.Details}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Cinema')}>
        <Text style={styles.btnTxt}>Book Tickets</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  movieName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    height: 260,
    width: 390,
    borderRadius: 10,
  },
  Details: {
    marginTop: 20,
    fontSize: 15,
  },

  btn: {
    backgroundColor: '#e33653',
    height: 30,
    marginTop: 370,
    justifyContent: 'center',
  },
  btnTxt: {
    textAlign: 'center',
    color: '#f5f0f1',
    fontWeight: 'bold',
  },
});
