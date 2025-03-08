import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

function MovieDetails({route}) {
  const {movie} = route.params;
  return (
    <View style={styles.Conatiner}>
      <Text style={styles.moviename}>{movie.title}</Text>
      <Image source={movie.image} style={styles.img} />
      <Text style={styles.Details}>{movie.Details}</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Book Tickets</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    padding: 10,
  },
  moviename: {
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
  btntxt: {
    textAlign: 'center',
    color: '#f5f0f1',
    fontWeight: 'bold',
  },
});
