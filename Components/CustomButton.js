import React from "react";
import {
        TouchableOpacity,
        Text
 } from "react-native";

 import LinearGradient from 'react-native-linear-gradient';
import { color } from "react-native-reanimated";

 import {  COLORS, FONTS } from "../constants/Index";

 const CustomButton = ({buttonText, buttonContainerStyle, colors, onPress}) => {

    if (colors.length > 0 ){
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <LinearGradient  
                    start ={{  x : 0, y : 0   }}
                    end = {{   x : 1 , y : 0 }}
                    colors = {colors}
                    style =  {{
                        ...buttonContainerStyle
                    }}  
                >
                    
                
                <Text
                    style = {{
                        textAlign: 'center',
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
                >
                    {buttonText}
                </Text>
                </LinearGradient>
            </TouchableOpacity>

        )

    }else {
        return(
            <TouchableOpacity
            style = {{
                ...buttonContainerStyle
            }}
            onPress={onPress}
        >

            <Text
                style = {{
                    textAlign: 'center',
                    color: COLORS.darkLime ,
                    ...FONTS.h2
                }}
            >
                {buttonText}
            </Text>
        </TouchableOpacity>

        )

    }

 }

 export default CustomButton;
