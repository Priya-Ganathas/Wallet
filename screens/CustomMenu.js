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

import { onPartialLoad } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

//Tab Icons
import FinancePRO from '../assets/icons/account.png';
import Account from '../assets/icons/financepro.png';
import notifications from '../assets/icons//bellfilled.png';
import Privacy from '../assets/icons/privacy-policy.png';
import Support from '../assets/icons/support.png';
import Settings from '../assets/icons/settingsfilled.png';
import FaceID from '../assets/icons/faceid.png';
import Fingerprint from '../assets/icons/fingerprint.png';
import logout from '../assets/icons/logout1.png';

const CustomMenu = ({ navigation }) => {

    const [currentTab, setCurrentTab] = useState("Home");


    return (
        <SafeAreaView
            style={{ backgroundColor : COLORS.lime1, flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding: 5}} >
                <View style = {{justifyContent: 'flex-end' , padding : 20}}>
                    <Image
                        source={icons.profile}
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
                        color: COLORS.peach1,
                        marginTop: 15,
                        marginLeft : -10
                        }}>  Priya Ganathas  </Text>

                    <TouchableOpacity>
                        <Text style={{
                            marginTop: 6,
                            color: COLORS.peach1,
                            marginLeft : -7
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
                     {TabButton(currentTab, setCurrentTab, "Use Face ID to Unlock", FaceID)}
                     {TabButton(currentTab, setCurrentTab, "Use Fingerprint to Unlock", Fingerprint)}
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
                    //............................................
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
