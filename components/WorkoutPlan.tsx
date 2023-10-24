import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const WorkoutPlan = () => {
  // Sample data for images and text
  const data = [
    {
      id: '1',
      image: require('../assets/rectangle-8.png'),
      text: 'Welcome to our Recommended Arms Workouts section, curated especially for you to achieve your fitness goals effectively and efficiently.',
    },
    {
      id: '2',
      image: require('../assets/rectangle-9.png'),
      text: 'Welcome to our Recommended Legs Workouts section, designed to help you build strong, sculpted legs and enhance your lower body strength and endurance.',
    },
    {
      id: '3',
      image: require('../assets/rectangle-8.png'),
      text: 'Welcome to our Recommended Chest & Back Workouts section, curated especially for you to achieve your fitness goals effectively and efficiently.',
    },
    {
      id: '4',
      image: require('../assets/rectangle-9.png'),
      text: 'Welcome to our Recommended Lower Body Workouts section, designed to help you build strong, sculpted legs and enhance your lower body strength and endurance.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended Workout Plan</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  card: {
    width: 375,
    marginRight: 16,
    padding: 8,
    height: 320,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardText: {
    marginTop: 8,
    fontSize: 18,
    color: '#fff',
  },
});

export default WorkoutPlan;
