import React from "react";
// import { Detector } from "react-detect-offline";
import {Text, View, Image} from "react-native"
import { COLORS, FONTS, SIZES, icons, images } from "../constants/Index";

import {useNetInfo} from '@react-native-community/netinfo';

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


const CheckConnection = () => {
    const netInfo = useNetInfo();
  
    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
      return (
        <View style={{
          marginTop : 150,
          alignItems : 'center',
          height: '100%',
          width: '100%',
          zIndex: 1
        }}>
          
          <Image  
            source={icons.wifioff}
            style={{ height: 50, width: 50 }}
          />
          
          <Text style={{...FONTS.h2}}>   No Internet Connection       </Text>
          <Text style={{...FONTS.h4 }}>   Please check your internet connection and try again     </Text>
          <Text style={{...FONTS.h4}}>   and try again     </Text>
          

        </View>
      );
  
    return null;
  }


  // function MiniOfflineSign() {
  //   return (
  //     <View style={{
  //       backgroundColor: COLORS.red,
  //       height: 30,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       flexDirection: 'row',
  //       width,
  //       position: 'absolute',
  //       top: 30
  //       }}>
  //       <Text style={{ color:COLORS.gray }}>No Internet Connection</Text>
  //     </View>
  //   );
  // }
  
  // const OfflineNotice = () => {
  //   state = {
  //     isConnected: true
  //   };
  
  //   componentDidMount = () => {
  //     NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  //   }
  
  //   componentWillUnmount =() => {
  //     NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  //   }
  
  //   handleConnectivityChange = isConnected => {
  //       this.setState({ isConnected });
  //   };
  
  //   render = () => {
  //     if (!this.state.isConnected) {
  //       return <MiniOfflineSign />;
  //     }
  //     return null;
  //   }
  // }
  
export default CheckConnection;
  
