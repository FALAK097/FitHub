import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Sample workout details data
const workoutDetailsData = [
  {
    id: '1',
    title: 'Fat Loss',
    image: require('../assets/rectangle-10.png'),
    text: 'Welcome to our Recommended Arms Workouts section, curated especially for you to achieve your fitness goals effectively and efficiently.',
  },
  {
    id: '2',
    title: 'Muscle Gain',
    image: require('../assets/rectangle-11.png'),
    text: 'Welcome to our Recommended Legs Workouts section, designed to help you build strong, sculpted legs and enhance your lower body strength and endurance.',
  },
  {
    id: '3',
    title: 'Protein Goal',
    image: require('../assets/rectangle-10.png'),
    text: 'Welcome to our Recommended Chest & Back Workouts section, curated especially for you to achieve your fitness goals effectively and efficiently.',
  },
  {
    id: '4',
    title: 'Gain Weight',
    image: require('../assets/rectangle-11.png'),
    text: 'Welcome to our Recommended Lower Body Workouts section, designed to help you build strong, sculpted legs and enhance your lower body strength and endurance.',
  },
];

const WorkoutPlan = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  // Function to navigate to a detailed page based on the ID
  const navigateToDetailPage = (itemId: string) => {
    navigation.navigate('WorkoutDetails', { itemId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended Diet Plan</Text>
      <FlatList
        data={workoutDetailsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
    padding: 8,
    height: 500,
  },
  image: {
    width: '100%',
    height: 200,
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
