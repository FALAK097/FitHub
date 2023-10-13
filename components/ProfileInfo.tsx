import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Color, FontSize, FontFamily} from '../GlobalStyles';

const ProfileInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.letsCrushIt}>Let’s Crush it, Aniket 🔥</Text>
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
    marginLeft: 10,
    marginTop: 40,
  },
  profileIcon: {
    width: 45,
    height: 45,
    marginTop: 40,
    marginLeft: 20,
  },
});

export default ProfileInfo;
