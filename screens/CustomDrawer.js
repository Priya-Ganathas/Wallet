import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';
import Home from './Home';

const CustomDrawer = ({ navigation }) => {
    
    return (
        <View
            style = {{
                flex : 1,
                backgroundColor : COLORS.primary,
               
           
            }}
        >
            <Home.Navigator
                drawerType = ""
                overlayColor = "transparent"
                drawerStyle = {{
                    flex :0,
                    width : '20%'  ,
                    paddingRight : 100,
                    backgroundColor : 'transparent'
                }}
                sceneContainerStyle = {{
                    backgroundColor : 'transparent'
                }}
                initialRouteName = "Home"
            >             
            <Home.Screen name = ".." >

                    { props => < Home {...props} />}

            </Home.Screen>

            </Home.Navigator>
        </View>
    )
}


export default CustomDrawer;