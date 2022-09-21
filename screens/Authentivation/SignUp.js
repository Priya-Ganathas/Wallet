
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {AuthLayout} from "../"

import {FONTS, SIZES, COLORS, icons} from "../../constants/Index"

import { FormInput, TextButton, } from "../../Components"

import {utils} from "../../utils"

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { set } from 'react-native-reanimated';

const SignUp = ({ navigation }) => {

    const [email, setEmail] = React.useState ("")
    const [username, setUsername] = React.useState ("")
    const [password, setPassword] = React.useState ("")
    const [showPass, setShowPass] = React.useState (false)

    const [emailError, setEmailError] = React.useState ("")
    const [usernameError, setUserNameError] = React.useState ("")
    const [passwordError , setPasswordError] = React.useState ("")

    function isEnableSignUp () {
        return email != "" &&  username != "" && password != "" && emailError == "" && passwordError == "" && usernameError == ""
    }

    return (
      <AuthLayout
        title = "Getting Started"
        subtitle = "Create an account to continue!"
        titleContainerStyle = {{
            marginTop :SIZES.padding * 0
        }}
        >

        {/* Form Input And SignUp  */}

        <View
        style = {{
            flex : 1,
            marginTop :SIZES.padding * 1
        }}>

        {/* FormInput*/}
        <FormInput
                label = "Email"
                keyboardType = "email-address"
                autoCompleteType = "email"
                onChange = {(value) => {
                    //validate email
                    utils.validateEmail(value, setEmailError)
                    setEmail(value)

                }}
                errorMsg = {emailError}
                appendComponent = {
                    <View
                        style = {{
                            justifyContent : 'center'
                        }}
                    >
                        <Image
                            source = {email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                            style = {{
                                height :20,
                                width : 20,
                                tintColor : email == "" ? COLORS.gray : (email != "" && emailError == "" ) ? COLORS.darkGreen : COLORS.red
                            }}
                        />
                    </View>
                }
          />

        <FormInput 
            label = "username"
            containerStyle={{
                marginTop : SIZES.radius
            }}
            onChange = {(value) => {
                setUsername(value)
            }}
            errorMsg = {(usernameError)}
            appendComponent = {
                <View
                    style = {{
                        justifyContent : 'center'

                    }}
                >
                    <Image
                        source= {username == "" || (username != "" && usernameError == "" ) ? icons.correct : icons.cancel}
                        style = {{
                            height :20,
                            width : 20,
                            tintColor : username == "" ? COLORS.gray : (username != "" && usernameError == "" ) ? COLORS.darkGreen : COLORS.red
                        }}
                    />
                </View>
            }
        />

        <FormInput 
            label = "Password"
            secureTextEntry={ !showPass}
            autoCompleteType = "password"
            CotainerStyle = {{
                marginTop: SIZES.radius
            }}
            onChange = {(value) => {
                utils.validatePassword(value, setPasswordError)
                setPassword (value)
            }}
                errorMsg = {passwordError}
            appendComponent = {
                <TouchableOpacity
                    style = {{
                        width: 40,
                        alignItems : 'flex-end',
                        justifyContent: 'center'
                    }}
                    onPress = {() => setShowPass (!showPass)}
                >
                    <Image
                        source= {showPass ? icons.eye_close : icons.eye}
                        style = {{
                            height : 20,
                            width : 20,
                            tintColor : COLORS.gray
                         }}
                    />
                </TouchableOpacity>
            }
        />

            {/* SignUp And Sign In  */}

            <TextButton 
                label = "Sign Up"
                disabled = {isEnableSignUp() ? false : true}
                buttonContainerStyle= {{
                    height :55,
                    alignItems : 'center',
                    marginTop : SIZES.padding,
                    borderRadius : SIZES.radius,
                    backgroundColor : COLORS.primary,
                    backgroundColor : isEnableSignUp() ? COLORS.primary : COLORS.transparentprimary
                }}
                onPress = {() => {
                    if(email && password){
                        console.log("email: ",email)
                        console.log("pass: ", password)
                    auth().createUserWithEmailAndPassword(email, password).then(async res => {
                        const update = {
                            displayName: username,
                            accountBalance: 10000
                          };
                          
                          await auth().currentUser.updateProfile(update);
                          console.error('profile:', auth().currentUser);
                    navigation.navigate ("Login")}) .catch(error => {
                        console.log("error: ", error)
                    })
                }}}
            />

            <View 
                style = {{
                    flexDirection : 'row',
                    marginTop : SIZES.radius,
                    justifyContent : 'center'
                }}
            >
                <Text style = {{color : COLORS.gray, ...FONTS.body3}}> Already have an account ?  </Text>

           
                <TextButton 
                label= "Sign In"
                buttonContainerStyle= {{
                    marginLeft :  4,
                    backgroundColor : null
                }}
                labelStyle ={{
                    color : COLORS.primary,
                    ...FONTS.h3
                }}
                    onPress = {() => navigation.goBack()}
                />

            </View>

        </View>


        {/* Footer */}

      </AuthLayout>
    )
}

export default SignUp;