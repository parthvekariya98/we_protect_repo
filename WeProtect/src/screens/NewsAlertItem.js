import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { formatTimeAgo } from '../helper/helper';

const NewsAlertItem = ({ item }) => {
  const { urlToImage, title, publishedAt } = item;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={urlToImage ? {uri: item.urlToImage} : require('../images/ic_news.png')} 
          style={urlToImage ? styles.image : styles.placeholder_image} 
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timeAgo}>{formatTimeAgo(publishedAt)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: wp('32%'),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 15,
    backgroundColor: '#74B7F4',
    padding: 10
  },
  imageContainer: {
    width: wp('25%'),
    height: wp('25%'),
    marginRight: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  placeholder_image: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: 10,
  },
  image: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timeAgo: {
    color: 'gray',
    marginTop: 10
  },
});

export default NewsAlertItem;