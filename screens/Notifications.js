import React from 'react';
// import PushNotifications from '../utils/PushNotifications';
import { View,Text } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';
import CheckConnection from "../Components/CheckConnection";

const Notifications = ({ navigation }) => {

  return (
  
    <View style={{marginTop: 30 , alignItems:'center'}}>
        < CheckConnection/>
      <Text style={{...FONTS.body1,   color: COLORS.peach1, fontWeight:'bold' }} > Notifications </Text>
      {/* <Text style={{marginTop: SIZES.padding * 1 ,   alignItems:'center',  ...FONTS.body1,   color: COLORS.peach1, fontWeight:'bold' }} > Notifications </Text>    */}

   </View>

)

}

export default Notifications;