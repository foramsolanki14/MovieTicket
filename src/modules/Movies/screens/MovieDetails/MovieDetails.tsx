import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ReadMore from '@fawazahmed/react-native-read-more';

function MovieDetails({route}) {
  const navigation = useNavigation();
  const {movie} = route.params;
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
          <Text style={styles.headerTitle}>{movie.title}</Text>
        </View>
      </View>
      <View>
        <View style={styles.dataView}>
          <Image src={movie.image} style={styles.movieImage} />
          <View style={styles.textView}>
            <Text style={styles.text}>2h 41m</Text>
            <Text style={styles.text}>Action, Drama, Historical</Text>
            <Text style={styles.text}>14 Fab , 2025</Text>
          </View>
        </View>
        <Text style={styles.title}>About Movie</Text>
        <ReadMore numberOfLines={4} style={styles.Details}>
          {movie.Details}
        </ReadMore>
      </View>
      <View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Cinema', {movie})}>
            <Text style={styles.btnTxt}>Book Tickets</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    padding: 10,
    backgroundColor: '#fffafa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: '52%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0ebeb',
  },
  backButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    paddingLeft: 20,
  },
  movieImage: {
    height: 260,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    resizeMode: 'contain',
  },
  Details: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    lineHeight: 22,
    paddingLeft: 15,
    paddingRight: 15,
  },
  btnView: {
    padding: 10,
    paddingTop: 310,
  },
  btn: {
    backgroundColor: '#e33653',
    height: 40,
    marginTop: 3,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnTxt: {
    textAlign: 'center',
    color: '#f5f0f1',
    fontFamily: 'Lato-Bold',
    fontSize: 17,
  },
  textView: {
    padding: 10,
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 17,
  },
  title: {
    fontFamily: 'Lato-Black',
    fontSize: 17,
    paddingTop: 10,
    textAlign: 'center',
  },
});
