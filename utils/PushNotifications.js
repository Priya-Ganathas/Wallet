import React from 'react';
import PushNotification from 'react-native-push-notification'

const PushNotifications = () => {
  // useEffect(() => {
  //   requestPermmision()
  // },[]);
  // const PushNotifications = PushNotifications.configure({
      PushNotifications.configure({
          onRegister:function(token){
            console.log('Token, token');
          },
            onNotification:function(notification){
              console.log('Remote Controller => ',notification)            
            },
            senderID:'1077330555200',
            popInitialNotification:true,
            requestPermmision : true,
      })
  // },[]);
    // return null;
 };

 export default PushNotifications;













































// // import React from 'react';
// import messaging from '@react-native-firebase/messaging';
// import { AsyncStorage } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// export async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     getFcmToken();
//   }
// }

// const getFcmToken = async () => {
//     let fcmToken = await AsyncStorage.getItem('fcmToken')
//     console.log('old Fcm Token:', fcmToken)
//     if(!fcmToken)   {
//         try {
//             let fcmToken = await messaging().getToken();
//             if(fcmToken){
//                 console.log('new Generated Fcm Token:', fcmToken)
//                 await AsyncStorage.setItem('fcmToken', fcmToken)
//             }
//         }catch (error) {
//         console.log(error);
//     }
// }
       
// };

