import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Card from '../components/Card';

const NewsListScreen = (props) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticles = () => {
    const API_KEY = '5d153c04454040feaa0c05efa831f6ab'; // Add your own API Key here
    const URL = `http://newsapi.org/v2/everything?q=samsung&from=2020-10-28&to=2020-10-28&sortBy=popularity&apiKey=${API_KEY}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size={'large'} color={'#00f'} />;
  }

  return (
    <View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('NewsDetails', {
                image: item.urlToImage,
                title: item.title,
                description: item.description,
              });
            }}
          >
            <Card
              image={item.urlToImage}
              title={item.title}
              description={item.description}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NewsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
