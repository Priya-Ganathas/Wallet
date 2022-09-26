import React from "react";
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import { FONTS, COLORS } from "../../src/constants/theme";

const TextButton = ({label, labelStyle, onPress, buttonContainerStyle, disabled}) => {

    return (

    <TouchableOpacity
        style = {{
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : COLORS.primary,
            ...buttonContainerStyle,
        }}
        disabled = {disabled}
        onPress = {onPress}
    >
 
        <Text
            style = {{
                color :COLORS.white,
                ...FONTS.h3,
                ...labelStyle
            }}
        >

            {label}
        </Text>

    </TouchableOpacity>

    )
}

export default TextButton;