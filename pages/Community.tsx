import {View, Text} from 'react-native';
import React from 'react';
import CommonLayout from '../components/CommonLayout';
import {useNavigation} from '@react-navigation/native';

const Community = () => {
  const navigation = useNavigation();
  return (
    <CommonLayout navigation={navigation}>
      <View>
        <Text>Community</Text>
      </View>
    </CommonLayout>
  );
};

export default Community;
