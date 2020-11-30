import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          //source={require('../assets/news-demo.jpg')}
          source={{
            uri: props.image,
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {props.title.length > 25
            ? props.title.slice(0, 25) + '...'
            : props.title}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          {props.description && props.description.length > 100
            ? props.description.slice(0, 100) + '...'
            : props.description}
        </Text>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
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
