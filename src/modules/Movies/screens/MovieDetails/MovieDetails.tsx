import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function MovieDetails({route}) {
  const navigation = useNavigation();
  const {movie} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../assets/backBtn.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{movie.title}</Text>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Image source={movie.image} style={styles.movieImage} />
        <Text style={styles.Details}>{movie.Details}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Cinema', {movie})}>
          <Text style={styles.btnTxt}>Book Tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  movieImage: {
    height: 260,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    resizeMode: 'cover',
  },
  Details: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
  },
  btn: {
    backgroundColor: '#e33653',
    height: 40,
    marginTop: 370,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  btnTxt: {
    textAlign: 'center',
    color: '#f5f0f1',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
