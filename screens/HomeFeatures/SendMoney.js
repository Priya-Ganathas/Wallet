import React from 'react';
import { View,Text,Image, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';

import { CustomButton } from '../../Components';
import { Button } from 'bootstrap';

const SendMoney = ({ navigation }) => {

return (
    <SafeAreaView>
    <ScrollView style = {{ padding : 8}}>

        <Text style={{marginTop: SIZES.padding * 1 ,   marginHorizontal: SIZES.padding*3.5,  ...FONTS.body1,   color: COLORS.darkblue, fontWeight:'bold'}} > Fund Transfer </Text>
       
        <View style={{ 
            flexDirection : 'row',
            justifyContent : 'space-between'}}>
            <Image 
                source={images.WIC}
                style = {{ 
                    marginTop : 25,
                    marginLeft : 20,
                    marginBottom : 10,
                    borderRadius: 20, 
                    width :100,
                    height :100,
                    alignItems : 'center'
                }}
            />               
            <TouchableOpacity
                style={{
                    backgroundColor:COLORS.darkblue,
                    marginTop:55,
                    marginRight:20,
                    padding:10,
                    width: 150,
                    height : 40,
                    borderRadius:5,
                    }}
                    onPress={() => navigation.navigate("CardPayment")}>

                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    ...FONTS.body5
                    }}> Send Money  </Text>
            </TouchableOpacity>
        </View>

        <View style={{ 
            flexDirection : 'row',
            justifyContent : 'space-between'}}>
            <Image 
                source={images.rotaract}
                style = {{ 
                    marginTop : 25,
                    marginLeft : 20,
                    marginBottom : 10,
                    borderRadius: 20, 
                    width :100,
                    height :100,
                    alignItems : 'center'
                }}
            /> 
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.darkblue,
                        marginTop:55,
                        marginRight:20,
                        padding:10,
                        width: 150,
                        height : 40,
                        borderRadius:5,
                        }}
                        onPress={() => navigation.navigate("CardPayment")}>

                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        ...FONTS.body5
                        }}> Send Money  </Text>
                </TouchableOpacity>
        </View>

        <View style={{ 
            flexDirection : 'row',
            justifyContent : 'space-between'}}>
            <Image 
                source={images.charity}
                style = {{ 
                    marginTop : 25,
                    marginLeft : 20,
                    marginBottom : 10,
                    borderRadius: 20, 
                    width :100,
                    height :100,
                    alignItems : 'center'
                }}
            /> 
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.darkblue,
                        marginTop:55,
                        marginRight:20,
                        padding:10,
                        width: 150,
                        height : 40,
                        borderRadius:5,
                        }}
                        onPress={() => navigation.navigate("CardPayment")}>

                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        ...FONTS.body5
                        }}> Send Money  </Text>
                </TouchableOpacity>
        </View>

        <View style={{ 
            flexDirection : 'row',
            justifyContent : 'space-between'}}>
            <Image 
                source={images.leo}
                style = {{ 
                    marginTop : 25,
                    marginLeft : 20,
                    marginBottom : 10,
                    borderRadius: 20, 
                    width :100,
                    height :100,
                    alignItems : 'center'
                }}
            /> 
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.darkblue,
                        marginTop:55,
                        marginRight:20,
                        padding:10,
                        width: 150,
                        height : 40,
                        borderRadius:5,
                        }}
                        onPress={() => navigation.navigate("CardPayment")}>

                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        ...FONTS.body5
                        }}> Send Money  </Text>
                </TouchableOpacity>
        </View>

    </ScrollView>

    </SafeAreaView>
    )
}

export default SendMoney;