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
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chhaava-et00408691-1737623374.jpg',
      genres: ['Historical'],
      Details:
        'Chhaava is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji Maharaj, the second ruler of the Maratha Empire, who is played ...After Chhatrapati Shivaji Maharaj`s death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava, inspired by Shivaji Sawant`s novel, chronicles Chhatrapati Sambhaji Maharaj`s unwavering resistance against Aurangzeb, marked by courage, strategy, and betrayal',
    },
    {
      id: 2,
      title: 'Fati Ne ?',
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/faati-ne-et00428340-1739770188.jpg',
      genres: ['Horror'],
      Details:
        'Param Laal and Padam Laal, two dimwitted but well-meaning cops in Melbourne, owe their jobs to their legendary uncle Velji',
    },
    {
      id: 3,
      title: 'Umbaro',
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/umbarro-et00420660-1734089497.jpg',
      genres: ['Family'],
      Details:
        'Seven women from rural Gujarat embark on their first international trip to London, facing cultural clashes, language barriers in word.',
    },
    {
      id: 4,
      title: 'Mom Tne Nai Samjay',
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mom-tane-nai-samjay-et00424440-1734259829.jpg  ',
      genres: ['Family'],
      Details:
        'Set in London, this emotional drama follows the life of Aashka and Kunal, a couple who strive to uphold Indian culture while raising their children',
    },
    {
      id: 5,
      title: 'The Monkey',
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-monkey-et00430332-1737555963.jpg',
      genres: ['Horror'],
      Details:
        'It follows twin brothers whose lives are turned upside down by a cursed toy monkey that causes random horrific deaths around them.',
    },
    {
      id: 6,
      title: 'Best Of Luck Pandya',
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/all-the-best-pandya-et00432831-1740136851.jpg',
      genres: ['Drama', 'Comedy'],
      Details:
        ' Comedy Drama released in Gujarati language in theatre near you in kolkata . Know about Film reviews, lead cast & crew, ...',
    },
    {
      id: 7,
      title: 'Mere Husband ki Biwi',
      image:
        'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mere-husband-ki-biwi-et00430518-1738572406.jpg',
      genres: ['Romantic'],
      Details:
        'A lovelorn Delhi realtor, Ankur, finally finds new love after a bitter divorce. But when his amnesiac ex-wife, stuck in a blissful memory of their past, stumbles back into his life, Ankur is caught in a hilarious and heart-warming tug-of-war between past and present love, forcing him to navigate wedding plans and rekindled memories in a desperate bid to choose his future.',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Now Showing</Text>
          </View>
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
              <Image src={item.image} style={styles.img} />
            </Pressable>
            <View style={styles.txtView}>
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
    paddingBottom: 70,
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

  main: {
    padding: 10,
  },
  img: {
    width: 185,
    height: 290,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  nameCity: {
    fontSize: 15,
    paddingLeft: 20,
    paddingTop: 3,
    fontFamily: 'Lato-Regular',
  },
  txtView: {
    paddingTop: 5,
    justifyContent: 'center',
  },
  imgText: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    backgroundColor: '#bdbebf',
    borderRadius: 4,
    paddingLeft: 7,
  },
});
