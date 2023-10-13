import * as React from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';

const Landing = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.main}>
      <Image
        style={styles.imgpxfuel1Icon}
        resizeMode="cover"
        source={require('../assets/pxfuel-1.png')}
      />
      <View style={styles.iconsContainer}>
        <Image
          style={styles.flatColorIconsgoogle}
          resizeMode="cover"
          source={require('../assets/flatcoloriconsgoogle.png')}
        />
        <Image
          style={styles.logosgoogleGmailIcon}
          resizeMode="cover"
          source={require('../assets/logosgooglegmail.png')}
        />
      </View>
      <Text style={[styles.unlockYourPotential, styles.loginTypo]}>
        Unlock Your Potential, Unleash Your Power
      </Text>
      <View style={styles.mainItem}>
        <Pressable
          style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}]}
          onPress={() => navigation.navigate('Details')}>
          <Text style={[styles.getStarted, styles.loginTypo]}>GET STARTED</Text>
        </Pressable>
      </View>
      <Text style={styles.fithub}>FitHUB</Text>
      <Text style={[styles.aiEnhancedSmart, styles.aiEnhancedSmartTypo]}>
        AI enhanced smart vision for fitness optimization
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require('../assets/vector.png')}
      />
      <Pressable
        style={({pressed}) => [
          styles.alreadyHadAccountContainer,
          {opacity: pressed ? 0.5 : 1.0},
        ]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>
          <Text style={styles.alreadyHadAccount}>Already had Account? </Text>
          <Text style={styles.loginTypo}>LOGIN</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  aiEnhancedSmartTypo: {
    fontSize: FontSize.size_lg,
    position: 'absolute',
  },
  logosgoogleGmailIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
  },
  flatColorIconsgoogle: {
    width: 24,
    left: 50,
    height: 24,
    position: 'absolute',
  },
  iconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 710,
    left: 140,
  },
  imgpxfuel1Icon: {
    width: 400,
    height: 1000,
  },
  unlockYourPotential: {
    color: Color.colorWhite,
    textAlign: 'left',
    fontSize: FontSize.size_lg,
    position: 'absolute',
    top: 369,
    left: 28,
  },
  mainItem: {
    top: 595,
    left: 15,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorYellow,
    width: 375,
    height: 67,
    position: 'absolute',
  },
  getStarted: {
    fontSize: 21,
    color: Color.colorBlack,
    textAlign: 'left',
    position: 'absolute',
    left: 120,
    top: 22,
  },
  fithub: {
    top: 470,
    left: 91,
    fontSize: 55,
    fontFamily: FontFamily.interBold,
    color: Color.colorYellow,
    textAlign: 'left',
    fontWeight: '700',
    position: 'absolute',
  },
  aiEnhancedSmart: {
    top: 414,
    left: 94,
    color: Color.colorGainsboro_200,
    textAlign: 'center',
    width: 237,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon: {
    height: '1.93%',
    width: '4.19%',
    top: '94.48%',
    right: '34.86%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
  },
  alreadyHadAccount: {
    fontFamily: FontFamily.interRegular,
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorGainsboro_100,
    textAlign: 'left',
  },
  alreadyHadAccountContainer: {
    left: 102,
    top: 680,
    position: 'absolute',
  },
  main: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: '100%',
    height: 900,
    overflow: 'hidden',
    position: 'relative',
  },
});

export default Landing;
