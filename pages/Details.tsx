import * as React from 'react';
import {StyleSheet, View, Pressable, Text, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const Details = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.details, styles.iconLayout]}>
      <Pressable
        style={({pressed}) => [
          styles.detailsChild,
          {opacity: pressed ? 0.5 : 1.0},
        ]}
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={styles.go}>GO</Text>
      <View style={[styles.detailsItem, styles.detailsChildLayout]} />
      <Text style={[styles.enterHeight, styles.enterTypo]}>Enter Height</Text>
      <Text style={[styles.height, styles.passwordTypo]}>HEIGHT</Text>
      <View style={[styles.detailsInner, styles.detailsChildLayout]} />
      <Text style={[styles.enterPassword, styles.enterTypo]}>
        Enter Password
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>PASSWORD</Text>
      <View style={[styles.rectangleView, styles.detailsChildLayout]} />
      <Text style={[styles.enterPasswordAgain, styles.enterTypo]}>
        Enter Password again
      </Text>
      <Text style={[styles.reEnterPassword, styles.passwordTypo]}>
        RE-ENTER PASSWORD
      </Text>
      <Text style={[styles.emailOrPhone, styles.passwordTypo]}>
        EMAIL OR PHONE
      </Text>
      <View style={[styles.detailsChild1, styles.detailsChildLayout]} />
      <Text style={[styles.enterAge, styles.enterTypo]}>Enter age</Text>
      <Text style={[styles.age, styles.passwordTypo]}>AGE</Text>
      <View style={[styles.detailsChild2, styles.detailsChildLayout]} />
      <Text style={[styles.enterWeight, styles.enterTypo]}>Enter Weight</Text>
      <Text style={[styles.weight, styles.passwordTypo]}>WEIGHT</Text>
      <View style={[styles.detailsChild3, styles.detailsChildLayout]} />
      <Text style={[styles.enterEmailOr, styles.enterTypo]}>
        Enter Email or Phone
      </Text>
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
  detailsChildLayout: {
    height: 45,
    backgroundColor: Color.colorLightgray,
    borderRadius: Border.br_3xl_5,
    left: 10,
    width: 375,
    position: 'absolute',
  },
  enterTypo: {
    width: 237,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: 'left',
    position: 'absolute',
  },
  passwordTypo: {
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    left: 20,
    position: 'absolute',
  },
  detailsChild: {
    top: 695,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorOlive,
    height: 50,
    width: 375,
    left: 10,
    position: 'absolute',
  },
  go: {
    top: 700,
    left: 170,
    fontSize: FontSize.size_6xl,
    textAlign: 'left',
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    position: 'absolute',
  },
  detailsItem: {
    top: 330,
  },
  enterHeight: {
    top: 340,
    left: 40,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  height: {
    top: 300,
  },
  detailsInner: {
    top: 530,
  },
  enterPassword: {
    top: 540,
    left: 40,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  password: {
    top: 500,
  },
  rectangleView: {
    top: 630,
  },
  enterPasswordAgain: {
    top: 640,
    left: 40,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  reEnterPassword: {
    top: 600,
  },
  emailOrPhone: {
    top: 400,
  },
  detailsChild1: {
    top: 130,
  },
  enterAge: {
    top: 140,
    left: 40,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  age: {
    top: 100,
  },
  detailsChild2: {
    top: 230,
  },
  enterWeight: {
    top: 240,
    left: 40,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  weight: {
    top: 200,
  },
  detailsChild3: {
    top: 430,
  },
  enterEmailOr: {
    top: 440,
    left: 41,
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
  details: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
  },
});

export default Details;
