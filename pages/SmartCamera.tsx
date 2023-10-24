import {View, Text} from 'react-native';
import React from 'react';
import CommonLayout from '../components/CommonLayout';
import {useNavigation} from '@react-navigation/native';

const SmartCamera = () => {
  const navigation = useNavigation();
  return (
    <CommonLayout navigation={navigation}>
      <View>
        <Text>SmartCamera</Text>
      </View>
    </CommonLayout>
  );
};

export default SmartCamera;
