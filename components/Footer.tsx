import React, {useState} from 'react';
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Color} from '../GlobalStyles';

type FooterItem = {
  icon: ImageSourcePropType;
  navigateTo: string;
};

const footerItems: FooterItem[] = [
  {
    icon: require('../assets/majesticonshome.png'),
    navigateTo: 'Home',
  },
  {
    icon: require('../assets/claritycamerasolid.png'),
    navigateTo: 'SmartCamera',
  },
  {
    icon: require('../assets/fluentpeoplecommunityadd20filled.png'),
    navigateTo: 'Community',
  },
  {
    icon: require('../assets/basilusersolid.png'),
    navigateTo: 'UserProfile',
  },
];

const Footer: React.FC<{navigation: any}> = ({navigation}) => {
  const [activeScreen, setActiveScreen] = useState('Home');

  return (
    <View style={styles.footer}>
      {footerItems.map((item, index) => (
        <Pressable
          key={index}
          style={[
            styles.footerIcon,
            activeScreen === item.navigateTo && styles.activeIcon,
          ]}
          onPress={() => {
            console.log('Navigating to:', item.navigateTo);
            navigation.navigate(item.navigateTo);
            setActiveScreen(item.navigateTo);
            console.log('Active screen:', activeScreen);
          }}>
          <Image style={styles.icon} resizeMode="cover" source={item.icon} />
        </Pressable>
      ))}
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
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  footerIcon: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    overflow: 'hidden',
  },
  activeIcon: {
    backgroundColor: '#333333ba',
    borderRadius: 50,
  },
});

export default Footer;
