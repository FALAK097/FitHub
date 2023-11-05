import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CommonLayout from '../components/CommonLayout';
import {useNavigation} from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <CommonLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.header}>User Profile Page</Text>
      </View>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#545490',
  },
});

export default UserProfile;
