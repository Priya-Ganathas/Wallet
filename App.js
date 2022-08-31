import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Onboarding, Onboarding2 ,Login,  SignUp, Home, Scan, Expense, ForgotPassword, Otp, CustomDrawer,Bill, Game ,Flight} from "./screens";

// import {Bill} from "./screens";

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
                initialRouteName={'Onboarding'}
            >

            {/* Screens */}

                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
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
                    // component={CustomDrawer}
               />

                <Stack.Screen
                    name="Scan"
                    component={Scan}
                />
                
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />

                <Stack.Screen
                    name="Expense"
                    component={Expense}
                />

                <Stack.Screen
                    name="CustomDrawer"
                    component={CustomDrawer}
                /> 

                <Stack.Screen
                    name="Bill"
                    component={Bill}
                /> 

                <Stack.Screen
                    name="Game"
                    component={Game}
                /> 
{/* 
                <Stack.Screen
                    name="Flight"
                    component={Flight}
                />  */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
