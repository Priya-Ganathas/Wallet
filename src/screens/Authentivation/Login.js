import React, { useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Button, Alert} from 'react-native';
import {AuthLayout, Home} from '../';
import {FONTS, SIZES, COLORS, icons} from '../../constants/Index';
import {FormInput, CustomSwitch, TextButton} from '../../Components';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {utils} from '../../utils';
// import BottomSheet from '../../src/Components/index';
import TouchID from 'react-native-touch-id';
import Animated, { FlipInEasyX } from 'react-native-reanimated';
import {NetworkConsumer} from 'react-native-offline';
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux';

const Login = ({navigation, getUserData}) => {
//Sign In Function
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [emailError, setEmailError] = React.useState('');
const [showPass, setShowPass] = React.useState('');
const [saveMe, setSaveMe] = React.useState(false);
//FingerPrint
const [isAuth, setIsAuth] = useState(false);

const optionalConfigObject = {
    title: 'Fingerprint ID', // Android
    imageColor: COLORS.primary, // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
;

const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject).then(biometryType  => {
      if (biometryType  === 'FaceID') {
        console.log('FaceID is supported.');
      } else {
        console.log('Fingerprint is supported.');
        if (isAuth) {
            return null
        }
        TouchID.authenticate('' , optionalConfigObject).then((success) => {
          console.log(' Authentication Success', success);
          setIsAuth(success);
          navigation.navigate('Home')
        })
        .catch(err => {
          // BackHandler.exitApp();
          console.log('Authentication Failed' + err)
        })
      }
    });
  }

  function isEnableSignIn() {
        return email != '' && password != '' && emailError == '';
      }
      const loginFunction = (email, password) => {
        console.error('email:', email);
        console.error('password:', password);

        auth()
          .signInWithEmailAndPassword(email, password)
          .then(async res => {
            console.error('res:', res);

            const idTokenResult = await auth().currentUser.getIdTokenResult();
            const user = await auth().currentUser;
            console.error('idTokenResult: ', idTokenResult);

            await AsyncStorage.setItem('@storage_Key', idTokenResult.token);

            getUserData(user)

            navigation.navigate('Home');
          })
          .catch(error => {
            console.error(error);
            if (error.code === 'auth/email-already-in-use') {
              console.log('The Email has already been taken!');
              Alert.alert(
                'Login Failed!',
                "We couldn't sign you in. Please try agin later.",
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }
            if (error.code === 'auth/invalid-email') {
              console.log('Invalid Email!');
              Alert.alert(
                'Email has already been taken!',
                "An email can only be use on one account at a time. Try again with different email address.",
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }
          });
      };


  return (
    
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome Back, you've been missed"
      titleContainerStyle={{
        marginTop: SIZES.padding * 0,
      }}>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 1,
        }}>
        {/* FormInput*/}
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            //validate email
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.darkGreen
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          CotainerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={value => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* save me & Forgot Password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />
          <TextButton
            label="Forgot Password ?"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        {/* Sign In */}
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentprimary,
          }}
          onPress={() => {
            if (email && password) {
              loginFunction(email, password);
            } else {
              // this.setState({error: 'Please enter email and password'});965
            }
            // navigation.navigate ("Home")
          }}
        />

        {/* Sign Up */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Don't have an account ?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{
              marginLeft: 4,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>

        {/* Touch ID */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <TextButton
            label="Touch ID"
            buttonContainerStyle={{
              marginLeft: 4,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={()=>
              handleBiometric()
            }
          />
        </View>
      </View>
    </AuthLayout>
   ); 

//Bottom Sheet Function

// const [show, setShow] = useState(true);

// return (
//   <Provider>
//     <View style= {styles.container}>
//       <Button onPress = {() => setShow(true) } title = "Shw Btm Sheet" />
//         <BottomSheet 
//           show = {show}
//           onDismiss={() => {
//             setShow(false);
//           }}>
//         </BottomSheet>
//         <StatusBar style = "auto"/>
//     </View>
//   </Provider>
// )

};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: data => dispatch(actions.getUserData(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);