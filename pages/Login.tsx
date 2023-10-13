import * as React from 'react';
import {StyleSheet, View, Pressable, Text, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.login, styles.iconLayout]}>
      <Pressable
        style={styles.loginChild}
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={[styles.login1, styles.login1Typo]}>LOGIN</Text>
      <View style={[styles.loginItem, styles.loginLayout]} />
      <Text style={[styles.enterEmailOr, styles.enterTypo]}>
        Enter Email or Phone
      </Text>
      <Text style={[styles.emailOrPhone, styles.passwordTypo]}>
        EMAIL OR PHONE
      </Text>
      <Text style={[styles.fithub, styles.login1Typo]}>FitHub</Text>
      <View style={[styles.loginInner, styles.loginLayout]} />
      <Text style={[styles.password, styles.passwordTypo]}>PASSWORD</Text>
      <Text style={[styles.enterPass, styles.enterTypo]}>Enter Password</Text>
      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0}]}>
        <Text style={styles.forgetPassword}>Forgot Password?</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.evaarrowbackfill0,
          {opacity: pressed ? 0.5 : 1.0},
        ]}
        onPress={() => navigation.navigate('Landing')}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/evaarrowbackfill0.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%',
  },
  login1Typo: {
    textAlign: 'left',
    fontWeight: '700',
    position: 'absolute',
  },
  loginLayout: {
    height: 50,
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_3xl_5,
    width: 375,
    left: 10,
    position: 'absolute',
  },
  enterTypo: {
    width: 237,
    color: Color.colorDimgray,
    left: 30,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: 'left',
    position: 'absolute',
  },
  passwordTypo: {
    fontSize: FontSize.size_lg,
    left: 20,
    textAlign: 'left',
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '900',
    position: 'absolute',
  },
  loginChild: {
    top: 575,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorOlive,
    height: 67,
    width: 375,
    left: 10,
    position: 'absolute',
  },
  login1: {
    top: 595,
    left: 155,
    fontSize: FontSize.size_3xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    textAlign: 'left',
    fontWeight: '700',
  },
  loginItem: {
    top: 382,
  },
  enterEmailOr: {
    top: 396,
  },
  emailOrPhone: {
    top: 349,
  },
  fithub: {
    top: 100,
    left: 98,
    fontSize: 51,
    fontFamily: FontFamily.inknutAntiquaBold,
    color: Color.colorYellow,
    textAlign: 'left',
    fontWeight: '700',
  },
  loginInner: {
    top: 495,
  },
  password: {
    top: 462,
  },
  enterPass: {
    top: 510,
  },
  forgetPassword: {
    top: 677,
    left: 140,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    position: 'absolute',
  },
  icon: {
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  evaarrowbackfill0: {
    left: '3.72%',
    top: '7.62%',
    right: '88.84%',
    bottom: '89.81%',
    width: '7.44%',
    height: '2.58%',
    position: 'absolute',
  },
  login: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
  },
});

export default Login;
