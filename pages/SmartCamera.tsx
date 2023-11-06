import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import CommonLayout from '../components/CommonLayout';
import { useNavigation } from '@react-navigation/native';


const machineInfoMapping: Record<
  string,
  {
    info: string;
    muscleGroup: string;
    beginnerReps: string;
    intermediateReps: string;
    expertReps: string;
    usageTips: string;
    image: any;
  }
> = {
  'chest-fly': {
    info: 'Chest Fly Machine Information...\n',
    muscleGroup: 'Muscle Group: Chest\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 15kg-25kg)',
    intermediateReps:
      'Intermediate Reps: 3 sets of 12-15 reps (weight 15kg-25kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 45kg)\n',
    usageTips:
      'Usage Tips: Lie on a bench, keep a slight elbow bend, and perform a controlled, semi-circular motion with weights above your chest. Focus on chest engagement and controlled breathing.',
    image: require('../assets/pec-deck-movement.gif'), // Use require to load the GIF
  },
  'chest-press': {
    info: 'Chest Press Machine Information...\n',
    muscleGroup: 'Muscle Group: Chest\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 15kg-25kg)',
    intermediateReps:
      'Intermediate Reps: 3 sets of 12-15 reps (weight 40kg-60kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 50kg)\n',
    usageTips:
      'Usage Tips: Use a chest press machine by adjusting the seat and weight, gripping the handles with palms forward, and pushing the weight forward while exhaling. Ensure controlled movements and a full range of motion for an effective workout.',
    image: require('../assets/chest-press-machine.gif'), // Use require to load the GIF
  },
  'lat-pull-down': {
    info: 'Lat Pull-Down Machine Information...\n',
    muscleGroup: 'Muscle Group: Back\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 20kg-30kg)',
    intermediateReps:
      'Intermediate Reps: 3 sets of 12-15 reps (weight 40kg-60kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 60kg)\n',
    usageTips:
      'Usage Tips: Adjust the machine settings, push the weight up with extended legs, and lower it with bent knees. Avoid locking your knees and experiment with foot placement for muscle targeting.',
    image: require('../assets/Lat-Pulldown.gif'), // Use require to load the GIF
  },
  'leg-press': {
    info: 'Leg Press Machine Information...\n',
    muscleGroup: 'Muscle Group: Legs\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 30kg-40kg)',
    intermediateReps:
      'Intermediate Reps: 3 sets of 12-15 reps (weight 50kg-70kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 70kg)\n',
    usageTips:
      'Usage Tips: Sit with thigh pads secure, use a suitable grip, and pull the bar down to your chest, focusing on engaging your lats. Maintain an upright position.',
    image: require('../assets/leg-press.gif'), // Use require to load the GIF
  },
};

const defaultImageSource = require('../assets/machine-default.jpg'); // Change the path to your default image


const SmartCamera = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [className, setClassName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [machineInfo, setMachineInfo] = useState<
    | {
        info: string;
        muscleGroup: string;
        beginnerReps: string;
        intermediateReps: string;
        expertReps: string;
        usageTips: string;
        image: any;
      }
    | null
  >(null);

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      marginTop: 2,
      cropping: true,
      mediaType: 'photo',
    })
      .then(image => {
        if (image) {
          setImageUri(image.path);
        }
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error);
      });
  };

  const uploadImage = async () => {
    if (imageUri) {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      try {
        const response = await axios.post(
          'http://192.168.0.100:5000//classify',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        const {class_name} = response.data;
        setClassName(class_name);

        setMachineInfo(machineInfoMapping[class_name]);
      } catch (error) {
        console.log('Error uploading image: ', error);
      }
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const machineName = query.toLowerCase(); // Convert search query to lowercase
    if (machineInfoMapping[machineName]) {
      setClassName(machineName);
      setMachineInfo(machineInfoMapping[machineName]);
    } else {
      // Clear the class name and machine info if not found
      setClassName('');
      setMachineInfo(null);
    }
  };

  const renderCustomButton = (
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | null
      | undefined,
    onPress: ((event: GestureResponderEvent) => void) | undefined
  ) => (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <CommonLayout navigation={navigation}>
    <View>
      <Text style={styles.header}>Smart Camera</Text>
     
      <View style={styles.imageContainer}>
        <Image
          source={imageUri ? { uri: imageUri } : defaultImageSource}
          style={styles.machineImage}
        />
        {imageUri && (
          <FastImage
            source={machineInfo?.image}
            style={styles.machineImage}
            resizeMode={FastImage.resizeMode.contain}
          />
        )}
      </View>
      
      {renderCustomButton('Select Image', selectImage)}
      {renderCustomButton('Upload Image', uploadImage)}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a machine"
            placeholderTextColor="#000" // Set the placeholder text color to black

            onChangeText={(text) => handleSearch(text)}
            value={searchQuery}
          />
        </View>
        <TextInput
          value={className}
          editable={false}
          style={styles.machineName}
        />
        {machineInfo && (
          <View style={styles.container}>
            <Text style={styles.machineInfo}>{machineInfo.info}</Text>
            <Text style={styles.machineInfo}>{machineInfo.muscleGroup}</Text>
            <Text style={styles.machineInfo}>{machineInfo.beginnerReps}</Text>
            <Text style={styles.machineInfo}>{machineInfo.intermediateReps}</Text>
            <Text style={styles.machineInfo}>{machineInfo.expertReps}</Text>
            <Text style={styles.machineInfo}>{machineInfo.usageTips}</Text>
          </View>
        )}
      </View>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#545490',
  },
  container: {
    marginTop: 10,
  },
  machineName: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 5,
    color: '#333',
  },
  machineInfo: {
    color: '#333',
  },
  machineImage: {
    width: 200,
    height: 200,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  customButton: {
    backgroundColor: '#545d90',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  customButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  searchContainer: {
    margin: 10,
  },
  searchInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#000',
  },
});

export default SmartCamera;