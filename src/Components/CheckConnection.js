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
  // const CheckConnection = () => {

  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View>
        <View>
          <Image
            source={icons.wifioff}
            style={{
              height: 100,
              width: 100,
              marginTop: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />

          <Text style={{...FONTS.h2, alignSelf: 'center'}}>Whoops!</Text>
          <Text style={{...FONTS.h4, alignSelf: 'center'}}> No Internet connection found, Check your </Text>
          <Text style={{...FONTS.h4, alignSelf: 'center'}}>  connection or try again. </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.darkLime,
            alignSelf: 'center',
            marginTop: 55,
            padding: 10,
            width: 150,
            height: 50,
            borderRadius: 35,
          }}
          onPress={() => Navigation.goBack()}>
          <Text style={{color: '#fff', textAlign: 'center', ...FONTS.h3}}>
            {' '}
            Refresh{' '}
          </Text>
        </TouchableOpacity>
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
