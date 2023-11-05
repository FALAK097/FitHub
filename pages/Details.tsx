import * as React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const Details = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Age</Text>
        <TextInput
          style={styles.textInput}
          placeholder="20 years"
          placeholderTextColor={Color.colorDimgray}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Height</Text>
        <TextInput
          style={styles.textInput}
          placeholder="180 cm"
          placeholderTextColor={Color.colorDimgray}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Weight</Text>
        <TextInput
          style={styles.textInput}
          placeholder="60 kg"
          placeholderTextColor={Color.colorDimgray}
          keyboardType="numeric"
        />
      </View> */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Your Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="John Doe"
          placeholderTextColor={Color.colorDimgray}
          keyboardType="default"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="johndoe@gmail.com"
          placeholderTextColor={Color.colorDimgray}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          placeholderTextColor={Color.colorDimgray}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Re-enter Password"
          placeholderTextColor={Color.colorDimgray}
          secureTextEntry
        />
      </View>
      <Pressable
        style={styles.goButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.goButtonText}>Register</Text>
      </Pressable>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate('Landing')}>
        <Image
          style={styles.backButtonImage}
          resizeMode="cover"
          source={require('../assets/evaarrowbackfill0.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    top: 40,
    width: '80%',
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  textInput: {
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderRadius: Border.br_3xl_5,
    width: '100%',
    height: 45,
    paddingLeft: 10,
    color: Color.colorDimgray,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  goButton: {
    backgroundColor: Color.colorOlive,
    width: '80%',
    height: 50,
    borderRadius: Border.br_xl,
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },
  goButtonText: {
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  backButtonImage: {
    width: 35,
    height: 30,
  },
});

export default Details;
