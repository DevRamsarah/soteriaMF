import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import studentData from '../data/studentData';

const StudentList = () => {
  return (
    <View>
      <Text>Student List ...</Text>
      <FlatList
        data={studentData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StudentList;
