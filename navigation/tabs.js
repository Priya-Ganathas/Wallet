import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home , Scan , Expense, Notifications} from "../screens/"
import  {TabIcon} from "../Components"
import {isIphoneX} from 'react-native-platform-helper'
import {COLORS, icons} from "../constants/Index"

const Tab = createBottomTabNavigator()


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLable:false,
                style:{
                    position: 'absolute',
                    left: 0,
                    left: 0,
                    elevation: 0,
                    backgroundcolor: COLORS.black,
                    // borderTopColor: "transparent",
                }
            }}
            
            screenOptions= {{
                headerShown : false
             }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options ={{
                    tabBarIcon : ({focused}) => <TabIcon focused = 
                    {focused} icon = {icons.home}/>
                }}
            />


            <Tab.Screen
                name="Expense"
                component={Expense}
                options ={{
                    tabBarIcon : ({focused}) => <TabIcon focused = 
                    {focused} icon = {icons.expense}/>
                }}
            />


            <Tab.Screen
                name="Scan"
                component={Scan}
                options ={{
                    tabBarIcon : ({focused}) => <TabIcon focused = 
                    {focused} icon = {icons.scan}/>
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options ={{
                    tabBarIcon : ({focused}) => <TabIcon focused = 
                    {focused} icon = {icons.bellfilled}/>
                }}
            />

        

        </Tab.Navigator>
    )
}




export default Tabs;