import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    ImageStore,
    BackHandler
} from 'react-native';

import LinearGradient from "react-native-linear-gradient";

import { COLORS , SIZES, FONTS, images} from "../../constants/Index";

import {CustomButton} from "../../Components"

const Onboarding2 = ({ navigation }) => {

    function renderHeader () {
        return (
            <View 
                style = {{
                    height : SIZES.height > 700 ? "65%" : "60%"               
                }}
            >
                    <ImageBackground
                    source = {images.loginBackground}
                    style = {{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                    resizeMode = "cover"
                    >
                        <LinearGradient
                            start={{x: 0 , y: 0 }}
                            end = {{x: 0 ,  y: 1}}
                            colors = {[
                                COLORS.transparent,
                                COLORS.black
                            ]}
                            style = {{
                                height: 200,
                                justifyContent: 'flex-end',
                                paddingHorizontal: SIZES.padding
                            }}
                        >
                            <Text
                                style = {{
                                    width:"100%",
                                    color: COLORS.white,
                                    ...FONTS.largeTitle,
                                    lineHeight:40
                                }}                            
                            > 
                            Secure payments with maximum privacy...
                            </Text>

                        </LinearGradient>
                    </ImageBackground>
                </View>
        )
    }

 //renderdetail
    function renderDetail (){
return(
    <View   
        style = {{
            flex: 1,
            paddingHorizontal:SIZES.padding
        }}
    >
        {/*Description*/}
            <Text
                style ={{
                    marginTop:SIZES.radius,
                    width: "70%",
                    color: COLORS.gray,
                    ...FONTS.body3
                }}
            >
                With just one click to sign up , you can access all its benefits!
            </Text>
        
        {/* Buttons*/}
            <View
                style = {{
                    flex: 1,
                    justifyContent: 'center'
                }}        
            >

        {/* Onboarding2*/}
            <CustomButton
                  buttonText= "Login"
                  buttonContainerStyle={{
                        height :55,
                        justifyContent : 'center',
                        borderRadius:SIZES.radius,
                  }}
                  colors = {[COLORS.darkGreen,  COLORS.lime]}       
                  onPress = { () => navigation.navigate ("Login") }   
            />   

        {/* SignUp*/}
            <CustomButton
                  buttonText= "Create an account"                 
                  buttonContainerStyle={{
                    height :55,
                    marginTop: SIZES.radius,
                    justifyContent : 'center',
                    borderRadius:SIZES.radius,
                    borderColor :COLORS.darkLime,
                    borderWidth:1
                    }}
                  colors = {[]}       
                  onPress = {() => navigation.navigate ("SignUp") }   
            />                  

       </View>

    </View>
)

    }

    return (
        <View
            style = {{
                flex:1,
                backgroundColor: COLORS.black
            }}
        >
            <StatusBar barstyle = "light-content"/>

                {/*Header*/}
                {renderHeader()}

                {/*Detail*/}
                {renderDetail()}

        </View>
    )
}

export default Onboarding2;