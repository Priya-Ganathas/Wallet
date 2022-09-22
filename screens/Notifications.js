import React from 'react';
// import PushNotifications from '../utils/PushNotifications';
import { View,Text } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';

const Notifications = ({ navigation }) => {

  return (
    <View>
      {/* <Text style={{marginTop: SIZES.padding * 1 ,   marginHorizontal: SIZES.padding*4.4,  ...FONTS.body1,   color: COLORS.peach1, fontWeight:'bold' }} > Notifications </Text> */}
      <Text style={{marginTop: SIZES.padding * 1 ,   alignItems:'center',  ...FONTS.body1,   color: COLORS.peach1, fontWeight:'bold' }} > Notifications </Text>

   </View>
    )

}

export default Notifications;