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
import Navigation from '../../../../navigation/NavigationBuilder';

const Home = () => {
  const navigation = useNavigation();

  const Movies = [
    {
      id: 1,
      title: 'Chhaava',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAyOTUuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wqmumfxjtk-portrait.jpg',
      genres: ['Historical'],
      Details:
        'Chhaava is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji Maharaj, the second ruler of the Maratha Empire, who is played ...',
    },
    {
      id: 2,
      title: 'Fati Ne ?',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAxLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00428340-qubtwcwbeb-portrait.jpg',
      genres: ['Horror'],
      Details:
        'Param Laal and Padam Laal, two dimwitted but well-meaning cops in Melbourne, owe their jobs to their legendary uncle Velji',
    },
    {
      id: 3,
      title: 'Umbaro',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA1LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420660-yemjtgvzze-portrait.jpg',
      genres: ['Family'],
      Details:
        'Seven women from rural Gujarat embark on their first international trip to London, facing cultural clashes, language barriers in word.',
    },
    {
      id: 4,
      title: 'Mom Tne Nai Samjay',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICAxLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424440-htumtjtrgz-portrait.jpg',
      genres: ['Family'],
      Details:
        'Set in London, this emotional drama follows the life of Aashka and Kunal, a couple who strive to uphold Indian culture while raising their children',
    },
    {
      id: 5,
      title: 'The Monkey',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICA0MDEgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430332-sarpksnaqb-portrait.jpg',
      genres: ['Horror'],
      Details:
        'It follows twin brothers whose lives are turned upside down by a cursed toy monkey that causes random horrific deaths around them.',
    },
    {
      id: 6,
      title: 'Best Of Luck Pandya',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICA0MjkgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432831-zzbmbvvtsa-portrait.jpg',
      genres: ['Drama', 'Comedy'],
      Details:
        ' Comedy Drama released in Gujarati language in theatre near you in kolkata . Know about Film reviews, lead cast & crew, ...',
    },
    {
      id: 7,
      title: 'Mere Husband ki Biwi',
      image:
        'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni45LzEwICAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430518-pbbpufjmrb-portrait.jpg',
      genres: ['Romantic'],
      Details:
        'A lovelorn Delhi realtor, Ankur, finally finds new love after a bitter divorce. But when his amnesiac ex-wife, stuck in a blissful memory of their past, stumbles back into his life, Ankur is caught in a hilarious and heart-warming tug-of-war between past and present love, forcing him to navigate wedding plans and rekindled memories in a desperate bid to choose his future.',
    },
  ];

  const getMoviesByGenre = genre => {
    return Movies.filter(movie => movie.genres.includes(genre));
  };

  const genres = [
    'Recommended',
    'Horror',
    'Historical',
    'Drama',
    'Family',
    'Comedy',
    'Romantic',
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
        <View style={styles.mainView}>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
              <Image
                source={require('../../../../assets/icon/film.png')}
                style={styles.film}
              />
              <Text style={styles.iconText}>Movies</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
              <Image
                source={require('../../../../assets/icon/comedy.png')}
                style={styles.film}
              />
              <Text style={styles.iconText}>Comedy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
              <Image
                source={require('../../../../assets/icon/music.png')}
                style={styles.film}
              />
              <Text style={styles.iconText}>Music</Text>
            </TouchableOpacity>
          </View>
        </View>
        {genres.map(genre => {
          const moviesToShow =
            genre === 'Recommended' ? Movies : getMoviesByGenre(genre);
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
                      <Image src={item.image} style={styles.imgSection} />
                    </Pressable>
                    <Text style={styles.txtImg}>{item.title}</Text>
                  </View>
                )}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f3f0',
    paddingBottom: 70,
  },
  mainView: {
    flexDirection: 'row',
    gap: 30,
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
  imgSection: {
    width: 180,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
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
  },
  txtImg: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    paddingTop: 10,
  },
});
