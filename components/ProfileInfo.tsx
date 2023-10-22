import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Color, FontSize, FontFamily} from '../GlobalStyles';

const ProfileInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.letsCrushIt}>Let’s Crush it, Falak 🔥</Text>
      <Image
        style={styles.profileIcon}
        resizeMode="cover"
        source={require('../assets/ellipse-1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  letsCrushIt: {
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    marginLeft: 0,
    marginTop: 10,
  },
  profileIcon: {
    width: 45,
    height: 45,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 60,
  },
});

export default ProfileInfo;
