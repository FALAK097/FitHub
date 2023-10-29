import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Sample workout details data
const workoutDetailsData = [
  {
    id: '1',
    title: 'Full Body',
    image: require('../assets/rectangle-8.png'),
    text: 'Welcome to our Recommended Arms Workouts section, curated especially for you to achieve your fitness goals effectively and efficiently.',
  },
  {
    id: '2',
    title: 'Legs',
    image: require('../assets/rectangle-9.png'),
    text: 'Welcome to our Recommended Legs Workouts section, designed to help you build strong, sculpted legs and enhance your lower body strength and endurance.',
  },
  {
    id: '3',
    title: 'Chest & Back',
    image: require('../assets/rectangle-13.png'),
    text: 'Welcome to our Recommended Chest & Back Workouts section, curated especially for you to achieve your fitness goals effectively and efficiently.',
  },
  {
    id: '4',
    title: 'Lower Body',
    image: require('../assets/rectangle-12.png'),
    text: 'Welcome to our Recommended Lower Body Workouts section, designed to help you build strong, sculpted legs and enhance your lower body strength and endurance.',
  },
];

const WorkoutPlan = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  // Function to navigate to a detailed page based on the ID
  const navigateToDetailPage = (itemId: string) => {
    navigation.navigate('WorkoutDetails', {itemId});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended Workout Plan</Text>
      <FlatList
        data={workoutDetailsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable onPress={() => navigateToDetailPage(item.id)}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.text}</Text>
            </View>
          </Pressable>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  card: {
    width: 375,
    marginRight: 16,
    padding: 10,
    height: 338,
    borderRadius: 15, // Add border radius to make it curved
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20, // Add border radius to the image
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  cardText: {
    marginTop: 8,
    fontSize: 18,
    color: '#FFFFF7',
  },
});

export default WorkoutPlan;
