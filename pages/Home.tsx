import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

import Footer from '../components/Footer';
import ProfileInfo from '../components/ProfileInfo';
import SearchBar from '../components/SearchBar';

const HOME = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <LinearGradient
        style={styles.homeChild}
        locations={[0, 1]}
        colors={['rgba(0, 0, 0, 0)', '#000']}
        useAngle={true}
        angle={180}
      />

      <ProfileInfo />

      <Text style={[styles.accessSmartCamera, styles.letsCrushItFlexBox]}>
        {'ACCESS SMART CAMERA ->'}
      </Text>
      <Text style={[styles.recommendedWorkout, styles.recommendedTypo]}>
        Recommended Workout
      </Text>
      <Pressable
        style={[styles.lowerBody, styles.containerPosition]}
        onPress={() => navigation.navigate('LowerBody')}>
        <Text style={[styles.lowerBody1, styles.fatLossClr]}>LOWER BODY</Text>
      </Pressable>
      <Pressable
        style={[styles.upperBody, styles.wrapperPosition]}
        onPress={() => navigation.navigate('UpperBody')}>
        <Text style={[styles.lowerBody1, styles.fatLossClr]}>UPPER BODY</Text>
      </Pressable>

      <SearchBar
        placeholder="Search anything ..."
        onSearch={(text: any) => {
          console.log('Search text:', text);
        }}
      />

      <View style={styles.rectangleView} />

      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate('UpperBody')}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-8.png')}
        />
      </Pressable>
      <Pressable
        style={[styles.welcomeToOurContainer, styles.wrapperPosition]}
        onPress={() => navigation.navigate('UpperBody')}>
        <Text style={[styles.welcomeToOurRecommendedUpp, styles.fatLossClr]}>
          Welcome to our Recommended Upper Body Workouts section, curated
          especially for you to achieve your fitness goals effectively and
          efficiently.
        </Text>
      </Pressable>
      <Pressable
        style={[styles.welcomeToOurContainer1, styles.containerPosition]}
        onPress={() => navigation.navigate('LowerBody')}>
        <Text style={[styles.welcomeToOurRecommendedUpp, styles.fatLossClr]}>
          Welcome to our Recommended Lower Body Workouts section, designed to
          help you build strong, sculpted legs and enhance your lower body
          strength and endurance.
        </Text>
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate('LowerBody')}>
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/rectangle-9.png')}
        />
      </Pressable>
      <Text style={[styles.recommendedDietPlans, styles.recommendedTypo]}>
        Recommended Diet Plans
      </Text>
      <Text style={[styles.fatLoss, styles.fatLossClr]}>FAT LOSS</Text>
      <Text style={[styles.muscleGain, styles.muscleGainPosition]}>
        MUSCLE GAIN
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        resizeMode="cover"
        source={require('../assets/rectangle-10.png')}
      />
      <Image
        style={[styles.homeChild2, styles.muscleGainPosition]}
        resizeMode="cover"
        source={require('../assets/rectangle-11.png')}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.muscleGainPosition]}
        onPress={() => navigation.navigate('SmartCamera')}>
        <Image
          resizeMode="cover"
          source={require('../assets/claritycamerasolid.png')}
        />
      </Pressable>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  letsCrushItFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  fatLossClr: {
    color: Color.colorGainsboro_200,
    width: 237,
    textAlign: 'left',
  },
  recommendedTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_200,
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    left: 16,
    position: 'absolute',
  },
  containerPosition: {
    left: 300,
    position: 'absolute',
  },
  wrapperPosition: {
    left: 23,
    position: 'absolute',
  },
  basiluserSolidPosition: {
    top: 849,
    position: 'absolute',
  },
  iconLayout: {
    height: '100%',
    width: '100%',
  },
  wrapperLayout: {
    height: 158,
    width: 262,
  },
  muscleGainPosition: {
    left: 300,
    position: 'absolute',
  },
  homeChild: {
    top: -149,
    width: 447,
    height: 884,
    backgroundColor: 'transparent',
    left: 16,
    position: 'absolute',
  },
  accessSmartCamera: {
    top: 220,
    left: 26,
    fontSize: 19,
    color: Color.colorWhite,
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  recommendedWorkout: {
    top: 281,
    width: 237,
  },
  lowerBody1: {
    width: 237,
    fontSize: FontSize.size_lg,
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  lowerBody: {
    top: 483,
  },
  upperBody: {
    top: 483,
  },
  homeItem: {
    width: 398,
    left: 10,
  },
  homeInner: {
    left: 290,
    width: 46,
  },
  rectangleView: {
    top: 827,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkslategray,
    width: 430,
    height: 140,
    position: 'absolute',
  },

  basiluserSolid: {
    left: 333,
    width: 50,
    height: 50,
  },
  claritycameraSolidIcon: {
    top: 853,
    left: 137,
    width: 42,
    height: 40,
    position: 'absolute',
    overflow: 'hidden',
  },
  homeChild1: {
    top: 910,
    left: 142,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray,
    width: 135,
    height: 6,
    position: 'absolute',
  },
  majesticonshome: {
    left: 43,
    width: 52,
    height: 48,
    overflow: 'hidden',
  },
  icon1: {
    borderRadius: Border.br_3xs,
  },
  wrapper: {
    top: 315,
    left: 23,
    position: 'absolute',
  },
  welcomeToOurRecommendedUpp: {
    fontSize: FontSize.size_sm,
    width: 237,
    fontFamily: FontFamily.interRegular,
  },
  welcomeToOurContainer: {
    top: 511,
  },
  welcomeToOurContainer1: {
    top: 516,
  },
  container: {
    top: 311,
    left: 306,
    position: 'absolute',
  },
  recommendedDietPlans: {
    top: 631,
    width: 276,
  },
  fatLoss: {
    top: 836,
    width: 237,
    fontSize: FontSize.size_lg,
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    left: 16,
    position: 'absolute',
  },
  muscleGain: {
    top: 832,
    width: 237,
    color: Color.colorGainsboro_200,
    textAlign: 'left',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  rectangleIcon: {
    top: 668,
    borderRadius: Border.br_3xs,
    left: 16,
    position: 'absolute',
  },
  homeChild2: {
    top: 664,
    borderRadius: Border.br_3xs,
    height: 158,
    width: 262,
  },
  rectanglePressable: {
    top: 210,
    borderRadius: 200,
    width: 88,
    height: 35,
  },
  icroundCamera: {
    left: 331,
    top: 220,
    width: 24,
    height: 24,
    position: 'absolute',
  },
  fluentpeopleCommunityAdd20: {
    left: 246,
    top: 857,
    width: 43,
    height: 39,
    position: 'absolute',
  },
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
    overflow: 'hidden',
    width: '100%',
  },
});

export default HOME;
