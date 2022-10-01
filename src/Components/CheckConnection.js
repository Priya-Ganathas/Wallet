import React, {PureComponent} from 'react';
// import { Detector } from "react-detect-offline";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons, images} from '../constants/Index';

import {useNetInfo} from '@react-native-community/netinfo';
import {NavigationEvents} from 'react-navigation';

const CheckConnection = ({navigation}) => {

  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View>
        <View>
          <Image
            source={icons.wifi_off}
            style={{
              height: 50,
              width: 50,
              marginTop: 20,
              alignSelf:'center'
            }}
          />

          <Text style={{...FONTS.h1, alignSelf: 'center', marginTop: 20}}> Whoops!</Text>
          <Text style={{...FONTS.h2, alignSelf: 'center'}}> You appear to be offline </Text>
          <Text style={{...FONTS.h4, alignSelf: 'center'}}> You can't Scan until you're connected to the Internet </Text>
        </View>

        {/* <TouchableOpacity
          style={{
            backgroundColor: COLORS.darkLime,
            alignSelf: 'center',
            marginTop: 55,
            padding: 10,
            width: 150,
            height: 50,
            borderRadius: 35,
          }}
              onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#fff', textAlign: 'center', ...FONTS.h3}}>
            Retry
          </Text>
        </TouchableOpacity> */}
      </View>
    );

  return null;
};

export default CheckConnection;

// const CheckConnection = props => {
//     return (
//         <Detector
//             render={({online}) => (
//                     online ? props.children:
//                         <View style = {{ paddingTop : '10px',  textAlign : 'center' }}>
//                         <Image  source={ icons.wifioff } />
//                         <Text style = {{...FONTS.h1,  marginBottom: '5px' }}>
//                                 No Connection
//                         </Text>
//                         <Text style = {{...FONTS.h2,  margin: 0 }}>
//                                 Please check your internet connection
//                         </Text>

//                         </View>
//             )}

//         />
//     )
// }
