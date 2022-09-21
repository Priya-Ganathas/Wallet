// import React from "react";
// import { Animated, Dimensions, StyleSheet,View } from "react-native";
// import { Portal } from "react-native-paper"
// import { COLORS } from "../constants/theme";

// const BottomSheet = () => {

//     const bottomSheetHeight = Dimensions.get("window").height * 0.5;
//     const deviceWidth = Dimensions.get("window").width;
//     // const bottom = useRef(new Animated.value(0)).current;

// return (
//     <Portal>
//     <Animated.View
//         style={[styles.root, { height: bottomSheetHeight, bottom: 0, shadowOffset:{
//             height: -3
//         } }, styles.common]}
//         >

//     <View styles = {[
//         styles.header,
//         styles.common,
//         {
//             shadowOffset:{
//                 height: 3
//             }
//         }
//     ]}
//     >

//     </View>

//     </Animated.View>
// </Portal>
// );
// }

// const styles = StyleSheet.create({
//     root: {
//         position: "absolute",
//         left: 0, 
//         right: 0,
//         zIndex: 100, 
//         backgroundColor: COLORS.blue, 
//         borderTopLeftRadius: 16, 
//         borderTopRightRadius: 16,
//         overflow : "hidden"
//     },
//     header :{
//         height : 33,
//         backgroundColor : COLORS.darkblue,
//     },
//     common: {
//         shadowColor: COLORS.gray,
//         shadowOffset: {
//            width:0,
//         },
//         shadowOpacity : 0.24,
//         shadowRadius : 4,
//         elevation: 3
//     }
// })

// export default BottomSheet;