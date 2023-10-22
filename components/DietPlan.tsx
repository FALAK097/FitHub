import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface DietPlanProps {
  style?: any;
}

const DietPlan: React.FC<DietPlanProps> = ({style}) => {
  // Sample data for images and text
  const data = [
    {
      id: '1',
      image: require('../assets/rectangle-10.png'),
      text: 'Fat Loss',
    },
    {
      id: '2',
      image: require('../assets/rectangle-11.png'),
      text: 'Weight Gain',
    },
    {
      id: '3',
      image: require('../assets/rectangle-10.png'),
      text: 'Muscle Gain',
    },
    {
      id: '4',
      image: require('../assets/rectangle-11.png'),
      text: 'Calorie Deficit',
    },
    {
      id: '5',
      image: require('../assets/rectangle-10.png'),
      text: 'Calorie Surplus',
    },
  ];

  return (
    <ScrollView style={[styles.container, style]}>
      <Text style={styles.heading}>Recommended Diet Plan</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
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
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textOverlay: {
    position: 'absolute',
    top: '40%',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  cardText: {
    fontSize: 24,
    color: '#30ff07',
  },
});

export default DietPlan;
