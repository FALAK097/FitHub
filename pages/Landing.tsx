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
      <Text style={styles.fithub}>FitHub</Text>
      <Text style={[styles.aiEnhancedSmart, styles.aiEnhancedSmartTypo]}>
        AI enhanced smart vision for fitness optimization
      </Text>
      <Pressable
        style={({pressed}) => [
          styles.alreadyHadAccountContainer,
          {opacity: pressed ? 0.5 : 1.0},
        ]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>
          <Text style={styles.alreadyHadAccount}>Already a User? </Text>
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
  imgpxfuel1Icon: {
    width: 400,
    height: '100%',
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
    backgroundColor: Color.colorOlive,
    width: 375,
    height: 67,
    position: 'absolute',
  },
  getStarted: {
    fontSize: 21,
    color: Color.colorWhite,
    textAlign: 'left',
    position: 'absolute',
    left: 120,
    top: 20,
  },
  fithub: {
    top: 470,
    left: 110,
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
  alreadyHadAccount: {
    fontFamily: FontFamily.interRegular,
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    textAlign: 'left',
  },
  alreadyHadAccountContainer: {
    left: 140,
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
