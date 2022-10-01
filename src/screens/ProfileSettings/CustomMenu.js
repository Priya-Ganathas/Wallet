import React, { useState } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    BackHandler,
    Alert,
    ImageBackground
} from 'react-native';

import auth from '@react-native-firebase/auth';

import { COLORS, SIZES, FONTS, icons, images } from '../../constants/Index';

import { onPartialLoad } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

//Tab Icons
import FinancePRO from '../../assets/icons/account.png';
import Account from '../../assets/icons/financepro.png';
import notifications from '../../assets/icons/bellfilled.png';
import Privacy from '../../assets/icons/privacy-policy.png';
import Support from '../../assets/icons/support.png';
import Settings from '../../assets/icons/settingsfilled.png';
import FaceID from '../../assets/icons//faceid.png';
import Fingerprint from '../../assets/icons/fingerprint.png';
import logout from '../../assets/icons/logout1.png';
import Linked from '../../assets/icons/link.png';
import Two from '../../assets/icons/verify.png';
import Purchases from '../../assets/icons/wallet.png';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { disableFullscreenUI } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import { NetworkConsumer, NetworkProvider } from 'react-native-offline';

const CustomMenu = ({ navigation }) => {

    const [currentTab, setCurrentTab] = useState("Home");
    return (
        <ImageBackground style = {{flex : 1}}
                         source = {images.background}
        >
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{width:'100%' , backgroundColor: COLORS.black, height:100}}></View>
                
                <NetworkConsumer>
                {({isConnected}) => 
                !isConnected && (
                    <View style = {{backgroundColor : COLORS.gray}}>
                        <Text style = {{textAlign : 'center', color : COLORS.white}}>
                            No Internet
                        </Text>
                    </View>
                )
                }
             </NetworkConsumer>

                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5}} >
                    <View style = {{ marginTop:-90, alignItems:'center',padding : 20}}>
                        <Image
                            source={icons.profile}
                            style={{
                                marginRight:150,
                                // alignItems:'center',
                                // marginLeft: 10,
                                width: 120,
                                height: 120,
                                borderRadius : 100    ,
                            }}   
                        />
                        <Text style={{
                            marginLeft: 100,
                            fontWeight: 'bold',
                            color: COLORS.white,
                            ...FONTS.body1,
                            marginTop: -50,
                            }}> {auth().currentUser.displayName} </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('ViewProfile')}
                        >
                            <Text style={{
                                ...FONTS.body3,
                                marginLeft: 100,
                                marginTop: 2,
                                marginBottom:30 ,
                                color: COLORS.white,
                                }}>  View Profile  </Text>
                                
                        </TouchableOpacity>

                    
                        <View style = {{flexGrow : 1}}>
                            {
                                //Tab Bar Buttons
                            }
                            {TabButton(currentTab, setCurrentTab, "Finance PRO", FinancePRO)}
                            {TabButton(currentTab, setCurrentTab, "Account", Account)}
                            {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
                            {TabButton(currentTab, setCurrentTab, "Privacy Policy", Privacy)}
                            {TabButton(currentTab, setCurrentTab, "Support", Support)}
                            {TabButton(currentTab, setCurrentTab, "Settings", Settings)}
                            {TabButton(currentTab, setCurrentTab, "Linked Devices", Linked)}
                            {TabButton(currentTab, setCurrentTab, "Two-Step-Verification", Two)}
                            {TabButton(currentTab, setCurrentTab, "Purchases and Memberships", Purchases)}
                            {TabButton(currentTab, setCurrentTab, "Use Face ID to Unlock", FaceID)}
                            {TabButton(currentTab, setCurrentTab, "Use Fingerprint to Unlock", Fingerprint)}
                        </View>

                        <View > 
                        {TabButton(currentTab, setCurrentTab, "LogOut", logout,navigation)}                      
                        </View>
                    </View>               
                </View>
            </ScrollView>
        </View>
       </ImageBackground>  
    )
}

// For multi Buttons........

const TabButton = (currentTab, setCurrentTab, title, image,navigation) => {
    return (        
    <TouchableOpacity 
            onPress={() => { 
                 if (title == "LogOut") {
                    AsyncStorage.removeItem('@storage_Key', navigation.navigate('Onboarding2'))
                    } else {
                        setCurrentTab(title)
                    }                         
            }}
            >
        <View style = {{
            flexDirection : 'row',
            alignItems : 'center',
            paddingVertical : 12.2,
            backgroundColor : currentTab == title ? COLORS.white :COLORS.transparent,
            paddingLeft : 15,
            paddingRight : 30,
            borderRadius : 8,
        }}>

            <Image source={image} style = {{width : 20, height : 20,tintColor: currentTab == title ? COLORS.primary : "black"}} />
            {/* <Text style={{...FONTS.h3,fontWeight: 'bold' , paddingLeft : 15, color: currentTab == title ? COLORS.primary  : "lightgray3"}}> {title} </Text> */}
            <Text style={{...FONTS.h3,fontWeight: 'bold' , paddingLeft : 15}}> {title} </Text>

        </View>
    </TouchableOpacity>




    )
}

export default CustomMenu;
