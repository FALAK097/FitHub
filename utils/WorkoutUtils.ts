const workoutDetailsData = [
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

// Function to get workout details by ID
export const getWorkoutDetailsById = (id: string) => {
  const workoutDetail = workoutDetailsData.find(item => item.id === id);
  return workoutDetail || null;
};
