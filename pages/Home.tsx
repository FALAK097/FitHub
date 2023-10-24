import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

import CommonLayout from '../components/CommonLayout';
import ProfileInfo from '../components/ProfileInfo';
import SearchBar from '../components/SearchBar';
import WorkoutPlan from '../components/WorkoutPlan';
import DietPlan from '../components/DietPlan';

const HOME = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <CommonLayout navigation={navigation}>
      <View style={styles.home}>
        <LinearGradient
          style={styles.homeChild}
          locations={[0, 1]}
          colors={['rgba(0, 0, 0, 0)', '#000']}
          useAngle={true}
          angle={180}
        />
        <ScrollView>
          <ProfileInfo />
          <SearchBar
            placeholder="Search anything ..."
            onSearch={(text: any) => {
              console.log('Search text:', text);
            }}
          />
          <WorkoutPlan />
          <DietPlan />
        </ScrollView>
      </View>
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    overflow: 'hidden',
    width: '100%',
  },
  homeChild: {
    width: 447,
    backgroundColor: 'transparent',
    left: 16,
    position: 'absolute',
  },
});

export default HOME;
