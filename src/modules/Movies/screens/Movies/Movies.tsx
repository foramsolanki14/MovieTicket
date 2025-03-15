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
