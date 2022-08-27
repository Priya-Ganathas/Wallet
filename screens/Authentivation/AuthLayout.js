import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {images, FONTS, SIZES, COLORS} from "../../constants/Index"

const AuthLayout = ({ title, subtitle, titleContainerStyle, Children  }) => {
    return (
        <View
            style = {{
                flex:1,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >

        <KeyboardAwareScrollView
        
            keyboardDismissMode="on-drag"
            contentContainerStyle = {{
                flex:1,
                paddingHorizontal: SIZES.padding
            }}

        >
            {/*App Icon*/}

            <View 
                style = {{
                    alignItems: 'center'
                }}
            >

                <Image
                    source = {images.FinTechLogo}
                    resizeMode = "contain"
                    style = {{
                        height : 100,
                        width : 200
                    }}
                />

            </View>


            {/* Title & Subtitle*/}

            <View
                style = {{
                    marginTop: SIZES.padding,
                    ...titleContainerStyle
                }}
            >
                <Text
                    style = {{
                        textAlign: 'center',
                        ...FONTS.pop1
                    }}
                    
                >
                    {title}
                </Text>

                <Text
                     style = {{
                        textAlign: 'center',
                        Color: COLORS.blue,
                        marginTop: SIZES.base,
                        ...FONTS.body4
                    }}
                >
                    {subtitle}

                </Text>

            </View>

            {/*Content / Children*/}

              {Children}      






        </KeyboardAwareScrollView>

        </View>
    )
}

export default AuthLayout;