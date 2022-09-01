import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
    RecyclerViewBackedScrollViewComponent
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, images } from '../constants/Index';

//Tab Icons
import home from '../assets/icons/home.png';
import search from '../assets/icons/search.png';
import notifications from '../assets/icons//bell.png';
import settings from '../assets/icons/settings.png';
import logout from '../assets/icons/wallet.png';



const CustomMenu = ({ navigation }) => {

    const [currentTab, setCurrentTab] = useState("Home");


    return (
        <SafeAreaView
            style={{ backgroundColor : COLORS.white, flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5}} >
                <View style = {{justifyContent: 'flex-end' , padding : 20}}>
                    <Image
                        source={images.GoPremium}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius : 10    ,
                            marginTop : 5 
                         }}   
                    />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: COLORS.primary,
                        marginTop: 15,
                        marginLeft : -10
                        }}>  Priya Ganathas  </Text>

                    <TouchableOpacity>
                        <Text style={{
                            marginTop: 6,
                            color: COLORS.primary,
                            marginLeft : -7
                            }}>  View Profile  </Text>
                    </TouchableOpacity>

                
                    <View style = {{flexGrow : 1}}>
                        {
                            //Tab Bar Buttons
                        }
                     {TabButton(currentTab, setCurrentTab, "Finance PRO", home)}
                     {TabButton(currentTab, setCurrentTab, "Account", search)}
                     {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
                     {TabButton(currentTab, setCurrentTab, "Privacy Policy", settings)}
                     {TabButton(currentTab, setCurrentTab, "Support", settings)}
                     {TabButton(currentTab, setCurrentTab, "Settings", settings)}
                     {TabButton(currentTab, setCurrentTab, "Use Face ID to Unlock", settings)}
                     {TabButton(currentTab, setCurrentTab, "Use Fingerprint to Unlock", settings)}
                     </View>
                     

                    <View>
                    {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
                    </View>


                </View>

         </SafeAreaView>
    )
}

// For multi Buttons........
const TabButton = (currentTab, setCurrentTab, title, image) => {
    return (



        <TouchableOpacity onPress={() => { 
                 if (title == "LogOut") {
                    // Do your Stuff...
                    } else {
                        setCurrentTab(title)
                    }
        }}>
        <View style = {{
            flexDirection : 'row',
            alignItems : 'center',
            paddingVertical : 8,
            backgroundColor : currentTab == title ? COLORS.white :COLORS.transparent,
            paddingLeft : 10,
            paddingRight : 30,
            borderRadius : 8,
            marginTop : 15,

        }}>
            <Image source={image} style = {{width : 20, height : 20,tintColor: currentTab == title ? COLORS.primary : "black"}} />
            <Text style={{...FONTS.h3,fontWeight: 'bold' , paddingLeft : 15, color: currentTab == title ? COLORS.primary  : "black"}}> {title} </Text>
        </View>
    </TouchableOpacity>

    )


}



export default CustomMenu;
