import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Alert
} from "react-native"
import { RNCamera } from 'react-native-camera'
import { LogBox } from 'react-native';


import CheckConnection from "../../src/Components/CheckConnection";

import { COLORS, FONTS, SIZES, icons, images } from "../constants/Index";
import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";

const Scan = ({ navigation }) => {

    <CheckConnection/>

    function renderHeader() {

           return (
            <View style={{ flexDirection: 'row', marginTop: SIZES.padding * 2, paddingHorizontal: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        width: 45,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Image
                        source={icons.close}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}> Scan for Payment... </Text>
                </View>

                <TouchableOpacity
                    style={{
                        height: 30,
                        width: 30,
                        backgroundColor: COLORS.darkLime,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log("Info")}
                >
                    <Image
                        source={icons.info}
                        style={{
                            height: 18,
                            width: 18,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderScanFocus() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
            >
                <Image
                    source={images.focus}
                    resizeMode="stretch"
                    style={{
                        marginTop: "-50%",
                        width: 300,
                        height: 300,
                    }}
                />
            </View>
        )
    }

    function renderPaymentMethods() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    padding: SIZES.padding * 0.5,
                    // borderTopLeftRadius: SIZES.radius,
                    // borderTopRightRadius: SIZES.radius,
                    borderTopLeftRadius: 250,
                    borderTopRightRadius: 250,
                    backgroundColor: COLORS.darkLime
                }}
            >
                <Text style={{ ...FONTS.h4, color:COLORS.white, alignSelf:'center'}}> Another payment methods </Text>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding * 2
                    }}
                >
                    {/* <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={() => console.log("Phone Number")}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: COLORS.lightpurple,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Image
                                source={icons.phone}
                                resizeMode="cover"
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: COLORS.purple
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>Phone Number</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', 
                            alignItems: 'center',
                            marginLeft: SIZES.padding * 6.9  }}
                        onPress={() => console.log("Barcode")}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: -70,
                                backgroundColor: COLORS.white,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 20
                            }}
                        >
                            <Image
                                source={icons.barcode}
                                resizeMode="cover"
                                style={{
                                    marginTop: 0,
                                    height: 30,
                                    width: 30,
                                    tintColor: COLORS.black
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.padding * -3, ...FONTS.body4, marginTop:20, color: COLORS.white, }}>Barcode Scan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //For Show toast msg
         function onBarCodeRead(result) {
            console.log(result.data)
            ToastAndroid.showWithGravityAndOffset('Scanned Successfully', ToastAndroid.SHORT, ToastAndroid.TOP,0,1500);
        }
        
        // onBarCodeRead (result => {
        //     if (result.data){
        //        setToastMsg ('Scanned Successfully');
        //     } else if (result.errorCode == 'others'){
        //        Alert.alert(
        //            'Scan Again the Image'
        //        )
        //    }
        //     })
    
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
            <RNCamera
                ref={ref => {
                    this.camera = ref
                }}
                style={{ flex: 1 }}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={onBarCodeRead}
                androidCameraPermissionOptions={{
                    title: "Permission to use camera",
                    message: "Camera is required for barcode scanning",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }}
            
                >
       
                {renderHeader()}
                {renderScanFocus()}
                {renderPaymentMethods()}
            </RNCamera>
        </View>
        
    )
}

  

LogBox.ignoreAllLogs();

export default Scan;