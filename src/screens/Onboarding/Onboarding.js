
import React from 'react';

import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { images, COLORS, FONTS, SIZES } from '../../constants/Index';
import { NetworkConsumer, NetworkProvider } from 'react-native-offline';

const Onboarding = ({ navigation }) => {
 
    // Render
    return (
        <SafeAreaView style={styles.container}>
            <NetworkConsumer>
                {({isConnected}) => 
                !isConnected && (
                    <View style = {{backgroundColor : COLORS.gray}}>
                        <Text style = {{textAlign : 'center', color : COLORS.white}}>
                            No Internet
                        </Text>
                    </View>
                )
                }
            </NetworkConsumer>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={images.onboardingImage}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h1, color: COLORS.primary}}>FinTech E-Wallet </Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}> Easy solutions for payment/billing, insurtech, money transfer/remittance, mortgage/real estate, and others (lending, capital market, wealth management) .</Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("Onboarding2")}
                    >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#151B20', '#0CE885']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}> Let's Start ! </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Onboarding;
