import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image'; // Import FastImage
import axios from 'axios';

const machineInfoMapping: Record<string, {
  info: string;
  muscleGroup: string;
  beginnerReps: string;
  intermediateReps: string;
  expertReps: string;
  usageTips: string;
  image: any; // Import GIFs as require statements
}> = {
  'chest-fly': {
    info: 'Chest Fly Machine Information...\n',
    muscleGroup: 'Muscle Group: Chest\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 15kg-25kg)',
    intermediateReps: 'Intermediate Reps: 3 sets of 12-15 reps (weight 15kg-25kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 45kg)\n',
    usageTips: 'Usage Tips: Lie on a bench, keep a slight elbow bend, and perform a controlled, semi-circular motion with weights above your chest. Focus on chest engagement and controlled breathing.',
    image: require('../assets/pec-deck-movement.gif'), // Use require to load the GIF
  },
  'chest-press': {
    info: 'Chest Press Machine Information...\n',
    muscleGroup: 'Muscle Group: Chest\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 15kg-25kg)',
    intermediateReps: 'Intermediate Reps: 3 sets of 12-15 reps (weight 40kg-60kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 50kg)\n',
    usageTips: 'Usage Tips: Use a chest press machine by adjusting the seat and weight, gripping the handles with palms forward, and pushing the weight forward while exhaling. Ensure controlled movements and a full range of motion for an effective workout.',
    image: require('../assets/chest-press-machine.gif'), // Use require to load the GIF
  },
  'lat-pull-down': {
    info: 'Lat Pull-Down Machine Information...\n',
    muscleGroup: 'Muscle Group: Back\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 20kg-30kg)',
    intermediateReps: 'Intermediate Reps: 3 sets of 12-15 reps (weight 40kg-60kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 60kg)\n',
    usageTips: 'Usage Tips: Adjust the machine settings, push the weight up with extended legs, and lower it with bent knees. Avoid locking your knees and experiment with foot placement for muscle targeting.',
    image: require('../assets/Lat-Pulldown.gif'), // Use require to load the GIF
  },
  'leg-press': {
    info: 'Leg Press Machine Information...\n',
    muscleGroup: 'Muscle Group: Legs\n',
    beginnerReps: 'Beginner Reps: 3 sets of 10-12 reps (weight 30kg-40kg)',
    intermediateReps: 'Intermediate Reps: 3 sets of 12-15 reps (weight 50kg-70kg)',
    expertReps: 'Expert Reps: 4 sets of 15-20 reps (above 70kg)\n',
    usageTips: 'Usage Tips: Sit with thigh pads secure, use a suitable grip, and pull the bar down to your chest, focusing on engaging your lats. Maintain an upright position.',
    image: require('../assets/leg-press.gif'), // Use require to load the GIF
  },
};

const SmartCamera = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [className, setClassName] = useState('');
  const [machineInfo, setMachineInfo] = useState<{
    info: string;
    muscleGroup: string;
    beginnerReps: string;
    intermediateReps: string;
    expertReps: string;
    usageTips: string;
    image: any;
  } | null>(null);

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      mediaType: 'photo',
    })
    .then((image) => {
      if (image) {
        setImageUri(image.path);
      }
    })
    .catch((error) => {
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
          'http://192.168.0.103:5000/classify',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Extract the class name from the response and set it in the state
        const { class_name } = response.data;
        setClassName(class_name);

        // Set the machine information based on the class name
        setMachineInfo(machineInfoMapping[class_name]);
      } catch (error) {
        console.log('Error uploading image: ', error);
      }
    }
  };

  return (
    <View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      }
      <Button title="Select Image" onPress={selectImage} />
      <Button title="Upload Image" onPress={uploadImage} />
      <TextInput
        value={className}
        editable={false}
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 5,
          color: 'black',
        }}
      />
      {machineInfo && (
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: 'black' }}>{machineInfo.info}</Text>
          <Text style={{ color: 'black' }}>{machineInfo.muscleGroup}</Text>
          <Text style={{ color: 'black' }}>{machineInfo.beginnerReps}</Text>
          <Text style={{ color: 'black' }}>{machineInfo.intermediateReps}</Text>
          <Text style={{ color: 'black' }}>{machineInfo.expertReps}</Text>
          <Text style={{ color: 'black' }}>{machineInfo.usageTips}</Text>
          {imageUri && <FastImage source={machineInfo?.image} style={{ width: 200, height: 200 }} resizeMode={FastImage.resizeMode.contain} />}

        </View>
      )}
      
    </View>
  );
};

export default SmartCamera;
