import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home , Scan , Settings , Support } from "../screens/"
import  {TabIcon} from "../Components"

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
                    backgroundcolor: COLORS.white,
                    borderTopColor: "transparent",
                }
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
                name="Support"
                component={Support}
                options ={{
                    tabBarIcon : ({focused}) => <TabIcon focused = 
                    {focused} icon = {icons.search}/>
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
                name="Settings"
                component={Settings}
                options ={{
                    tabBarIcon : ({focused}) => <TabIcon focused = 
                    {focused} icon = {icons.settings}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;