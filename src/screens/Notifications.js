import React from 'react';
// import PushNotifications from '../utils/PushNotifications';
import { View,Text , ImageBackground} from 'react-native';
import { Checkbox } from 'react-native-paper';
import CheckConnection from '../Components/CheckConnection';
import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';

const Notifications = ({ navigation }) => {



  return (

    <ImageBackground 
         style = {{flex : 1}}
         source = {images.screensbg1} > 
    <View>
    
          <View style={{marginTop: 30 , alignItems:'center'}}>
            
              <Text style={{...FONTS.body1,   color: COLORS.peach1, fontWeight:'bold' }} > Notifications </Text> 
          </View>
          <CheckConnection/>
</View>
</ImageBackground> 

)

}

export default Notifications;