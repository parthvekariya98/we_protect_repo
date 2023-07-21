import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const NewsAlertItem = ({ item }) => {
  const { image, title, timeAgo } = item;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../images/ic_news.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
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
    marginRight: 10,
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10
  },
  image: {
    width: wp('20%'),
    height: wp('20%'),
    // borderRadius: 30,
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