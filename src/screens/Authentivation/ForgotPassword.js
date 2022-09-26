
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
    TextButton
} from '../../Components';

import {utils} from "../../utils"

const ForgotPassword = ({ navigation }) => {    
    
    const [email, setEmail] = React.useState ("")
    const [emailError, setEmailError] = React.useState ("")

    function isEnableSendEmail () {
        return email != "" && emailError == "" 
    }


    return (

        <AuthLayout 
            title= "Password Recovery"
            subtitle= "Please enter your email address to recovery your password"
            titleContainerStyle= {{
                marginTop :SIZES.padding * 0
            }}
        >


        {/* FormInput     */}

        <View 
            style = {{
                flex :1,
                marginTop : SIZES.padding *1
            }}
        >
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
        </View>


        {/* Button */}

        <TextButton 
                label= "Send Email"
                disabled={isEnableSendEmail () ? false : true}
                buttonContainerStyle= {{
                    height :55,
                    alighItems : 'center',
                    marginTop :  SIZES.padding,
                    borderRadius :SIZES.radius,
                    backgroundColor : isEnableSendEmail () ? COLORS.primary : COLORS.transparentprimary
                }}
                onPress = {() => navigation.goBack()}
                // onPress={() => navigation.navigate('Otp')}
        />

     </AuthLayout>
    )
}

export default ForgotPassword;