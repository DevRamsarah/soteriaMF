import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About Us</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
