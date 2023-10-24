import React from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from './Footer';

interface CommonLayoutProps {
  navigation: any;
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({children, navigation}) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommonLayout;
