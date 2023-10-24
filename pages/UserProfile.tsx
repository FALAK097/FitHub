import {View, Text} from 'react-native';
import React from 'react';
import CommonLayout from '../components/CommonLayout';
import {useNavigation} from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <CommonLayout navigation={navigation}>
      <View>
        <Text>UserProfile</Text>
      </View>
    </CommonLayout>
  );
};

export default UserProfile;
