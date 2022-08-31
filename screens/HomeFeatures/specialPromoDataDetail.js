
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity

import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';

const specialPromoDataDetail = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Support</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("SettinspecialPromoDataDetail")}
            >
                <Text>priya</Text>
            </TouchableOpacity>
        </View>
    )
}

export default specialPromoDataDetail;
