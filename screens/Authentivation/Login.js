import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {AuthLayout} from "../";

import {FONTS, SIZES, COLORS, icons } from "../../constants/Index";

import {
    FormInput,
    CustomSwitch,
    TextButton
} from '../../Components';

import {utils} from "../../utils"

const Login = ({ navigation }) => {

    const [email, setEmail] = React.useState ("")
    const [password , setPassword] = React.useState ("")
    const [emailError, setEmailError] = React.useState ("")

    const [showPass, setShowPass] = React.useState ("")
    const [saveMe, setSaveMe] = React.useState (false)


    function isEnableSignIn () {
        return email != "" && password != "" && emailError ==""
    }
   
    return (

        <AuthLayout

            title= "Let's Sign You In"
            subtitle= "Welcome Back, you've been missed"
            titleContainerStyle = {{
                marginTop :SIZES.padding * 0
            }}
            
        >

            <View
                style = {{
                    flex :1,
                    marginTop : SIZES.padding * 1
                }}
            >

                
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
                                tintColor : email == "" ? COLORS.gray : (email != "" && emailError =="") ? COLORS.darkGreen : COLORS.red
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
            onChange = {(value) => setPassword (value)}
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


          {/* save me & Forgot Password */}
          <View 
            style = {{
                flexDirection : 'row',
                marginTop : SIZES.radius,
                justifyContent : 'space-between'
            }}
          >
                <CustomSwitch 
                    value = {saveMe}
                    onChange = {(value) => setSaveMe(value)}
                />

                <TextButton 
                    label= "Forgot Password ?"
                    buttonContainerStyle= {{
                        backgroundColor : null
                    }}
                    labelStyle = {{
                        color : COLORS.gray,
                        ...FONTS.body4
                    }}
                    onPress = {() => navigation.navigate ("ForgotPassword")  }
                />  
          </View>
          {/* Sign In */}
          <TextButton 
            label= "Sign In"
            disabled = {isEnableSignIn() ? false : true}
            buttonContainerStyle ={{
                height : 55,
                alignItems : 'center',
                marginTop : SIZES.padding,
                borderRadius :  SIZES.radius,
                backgroundColor : isEnableSignIn() ? COLORS.primary : COLORS.transparentprimary
            }}
            onPress = {() => navigation.navigate ("Home")  }
          />

          {/* Sign Up */}
        <View 
            style = {{
                flexDirection : 'row',
                marginTop : SIZES.radius,
                justifyContent : 'center'
            }}
        >
            <Text
                style = {{
                    color : COLORS.gray,
                    ...FONTS.body3
                }}
            >
                Don't have an account ?   
            </Text>

            <TextButton 
                label= "Sign Up"
                buttonContainerStyle= {{
                    marginLeft :  4,
                    backgroundColor : null
                }}
                labelStyle ={{
                    color : COLORS.primary,
                    ...FONTS.h3
                }}
                onPress = {() => navigation.navigate ("SignUp")}
            />
        </View>

            </View>

        </AuthLayout>

    )
}

export default Login;