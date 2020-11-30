import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../components/Card';

const NewsDetailsScreen = (props) => {
  const { image, title, description } = props.route.params;
  return (
    <View >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          //source={require('../assets/news-demo.jpg')}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>

          {title}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>

          {description}
        </Text>
      </View>
    </View>
  );
};

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  titleContainer: {
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'ubuntu-bold',
  },
  descriptionContainer: {
    paddingHorizontal: 15,
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'ubuntu-regular',
  },


});
