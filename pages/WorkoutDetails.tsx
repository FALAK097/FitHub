import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';
import {getWorkoutDetailsById} from '../utils/WorkoutUtils';
import CommonLayout from '../components/CommonLayout';
import {useNavigation} from '@react-navigation/native';

type WorkoutDetailsRouteProp = RouteProp<ParamListBase, 'WorkoutDetails'>;

interface WorkoutDetailsProps {
  route: WorkoutDetailsRouteProp;
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({route}) => {
  const {itemId} = route.params as {itemId: string};
  const navigation = useNavigation();
  const workoutDetail = getWorkoutDetailsById(itemId) ?? {
    id: '',
    image: null,
    text: '',
  };

  const isUpperBodyWorkout = itemId === '1' || itemId === '3'; // Check if it's an upper body workout
  const isLowerBodyWorkout = itemId === '2' || itemId === '4'; // Check if it's a lower body workout

  return (
    <CommonLayout navigation={navigation}>
      <View style={styles.container}>
        <Image source={workoutDetail.image} style={styles.backgroundImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.emoji}>🔥</Text>
          <Text style={styles.infoText}>Hard</Text>
          <Text style={styles.emoji}>⏰</Text>
          <Text style={styles.infoText}>45 min</Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.heading}>Overview</Text>
            <Text style={styles.text}>{workoutDetail.text}</Text>
            {/* Add more workout details here */}
          </View>
        </View>
        {isUpperBodyWorkout && (
          <View style={styles.section}>
            <Image
              source={require('../assets/bicep.png')}
              style={styles.sectionImage}
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Biceps Curls</Text>
              <Text style={styles.sectionDescription}>
                Biceps curls with dumbbells or resistance bands isolate the
                biceps, helping you achieve well-deserved arms.
              </Text>
            </View>
          </View>
        )}
        {isUpperBodyWorkout && (
          <View style={styles.section}>
            <Image
              source={require('../assets/tricep.png')}
              style={styles.sectionImage}
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Tricep Dips</Text>
              <Text style={styles.sectionDescription}>
                Tricep dips are great for building strength and definition in
                your triceps, the muscles in the back of your upper arm.
              </Text>
            </View>
          </View>
        )}
        {isLowerBodyWorkout && (
          <View style={styles.section}>
            <Image
              source={require('../assets/squats.png')}
              style={styles.sectionImage}
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Squats</Text>
              <Text style={styles.sectionDescription}>
                Squats are a compound exercise that works the muscles in your
                thighs, hips, and buttocks.
              </Text>
            </View>
          </View>
        )}
        {isLowerBodyWorkout && (
          <View style={styles.section}>
            <Image
              source={require('../assets/deadlifts.png')}
              style={styles.sectionImage}
            />
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>Deadlifts</Text>
              <Text style={styles.sectionDescription}>
                Deadlifts are excellent for targeting the muscles in your lower
                back, glutes, and hamstrings.
              </Text>
            </View>
          </View>
        )}
      </View>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -5,
    marginBottom: 10,
    color: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    width: '100%',
  },
  text: {
    marginTop: -5,
    fontSize: 18,
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  emoji: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
    color: '#fff',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  sectionImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 60,
    resizeMode: 'cover',
  },
  sectionContent: {
    marginLeft: 20,
    flex: 1,
    marginBottom: 60,
  },
  sectionTitle: {
    marginLeft: -9,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 2,
    fontSize: 16,
    color: '#fff',
  },
});

export default WorkoutDetails;
