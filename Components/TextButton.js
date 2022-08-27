import React from "react";
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import { FONTS, COLORS } from "../constants/theme";

const TextButton = ({label}) => {
    <TouchableOpacity
        style = {{
            alignItems : 'center',
            justifyContent : 'center'
            backgroundColor : COLORS.primary
        }}
    >
 
        <Text
            style = {{
                color :COLORS.white,
                ...FONTS.h3
            }}
        >

            {label}
        </Text>

    </TouchableOpacity>

}

export default TextButton;
