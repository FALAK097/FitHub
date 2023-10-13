import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import {Color} from '../GlobalStyles';

const Footer: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={[styles.footer]}>
      <Pressable
        style={styles.footerIcon}
        onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/majesticonshome.png')}
        />
      </Pressable>
      <Pressable
        style={styles.footerIcon}
        onPress={() => navigation.navigate('SmartCamera')}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/claritycamerasolid.png')}
        />
      </Pressable>
      <Pressable
        style={styles.footerIcon}
        onPress={() => navigation.navigate('Community')}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/fluentpeoplecommunityadd20filled.png')}
        />
      </Pressable>
      <Pressable
        style={styles.footerIcon}
        onPress={() => navigation.navigate('UserProfile')}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/basilusersolid.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: Color.colorDimgray,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 6,
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerIcon: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    overflow: 'hidden',
  },
});

export default Footer;
