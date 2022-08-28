import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Onboarding, Onboarding2 ,Login, SignUp, Home, Scan, Settings} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

import { icons, COLORS, SIZES } from './constants/Index';

console.disableYellowBox = true;

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions= {{
                   headerShown : false
                }}
                initialRouteName={'login'}
            >

            {/* Screens */}

            <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                {/* <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }} */}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />

                <Stack.Screen
                    name="Onboarding2"
                    component={Onboarding2}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
               />


                <Stack.Screen
                    name="Home"
                    component={Tabs}
               />

                <Stack.Screen
                    name="Settings"
                    component={ "Settings"  }
               />

                {/* <Stack.Screen
                    name="Settings"
                    component={Tabs}
               />  */}

                <Stack.Screen
                    name="Scan"
                    component={Scan}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
// export default () => {
//     return <App />;
// };

export default App;
