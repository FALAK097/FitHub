import * as React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
  Text,
  ImageBackground, // Import ImageBackground
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { Color, Border, FontFamily, FontSize } from '../GlobalStyles';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      source={require('../assets/pxfuel-1-1.png')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.fithub}>FitHub</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="johndoe@gmail.com"
            keyboardType="email-address"
            placeholderTextColor={Color.colorDimgray}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor={Color.colorDimgray}
            secureTextEntry
          />
        </View>

        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </Pressable>

        <Pressable
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>

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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // You can adjust this property based on your image aspect ratio
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Set to 'transparent' to see the background image
    alignItems: 'center',
    justifyContent: 'center',
  },
  fithub: {
    fontSize: 51,
    fontFamily: FontFamily.inknutAntiquaBold,
    color: Color.colorYellow,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
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
  loginButton: {
    backgroundColor: Color.colorOlive,
    width: '80%',
    height: 50,
    borderRadius: Border.br_xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
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
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  logosgoogleGmailIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  flatColorIconsgoogle: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default Login;
