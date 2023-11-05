import React from 'react';
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
import FastImage from 'react-native-fast-image'; // Import FastImage
import axios from 'axios';
import CommonLayout from '../components/CommonLayout';
import {useNavigation} from '@react-navigation/native';

const SmartCamera = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = React.useState<string | null>(null);
  const [className, setClassName] = React.useState('');
  const [machineInfo, setMachineInfo] = React.useState<{
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
          'http://10.2.0.2:5000/classify',
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

  const renderCustomButton = (
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | null
      | undefined,
    onPress: ((event: GestureResponderEvent) => void) | undefined,
  ) => (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <CommonLayout navigation={navigation}>
      <View>
        <Text style={styles.header}>Smart Camera</Text>
        {imageUri && (
          <Image source={{uri: imageUri}} style={styles.machineImage} />
        )}
        {renderCustomButton('Select Image', selectImage)}
        {renderCustomButton('Upload Image', uploadImage)}

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
            <Text style={styles.machineInfo}>
              {machineInfo.intermediateReps}
            </Text>
            <Text style={styles.machineInfo}>{machineInfo.expertReps}</Text>
            <Text style={styles.machineInfo}>{machineInfo.usageTips}</Text>
            {imageUri && (
              <FastImage
                source={machineInfo?.image}
                style={styles.machineImage}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
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
});

export default SmartCamera;
