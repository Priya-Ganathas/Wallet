
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 60, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: 'red' }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {
    // Dummy Data
    const specialPromoData = [
    
        {
            id: 2,
            name: "Power Cut",
            img: images.PowerCut,
        },
        {
            id: 2,
            name: "Power Cut",
            img: images.PowerCut,
        },
        {
            id: 2,
            name: "Power Cut",
            img: images.PowerCut,
        },
        {
            id: 3,
            name: "Power Cut",
            img: images.PowerCut,
        },
        {
            id: 4,
            name: "Power Cut",
            img: images.PowerCut,
        },
       ];
    

    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)     

    function renderspecialPromoData(item, index) {
        var specialPromoDataStyle = {};

        if (index == 0) {
            specialPromoDataStyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...specialPromoDataStyle }}
                onPress={() => { navigation.navigate("specialPromoDataDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

   return (
        <View style={styles.container}>
            {/* Banner */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                   <Image
                    source={images.GoPremium}
                    resizeMode="cover"
                    style={{
                        top:25,
                        width: "100%",
                        height: "80%",
                        borderRadius: 15,
                    }}
                />
            </View>

            {/* Options */}

            <View style={{ flex: 1, justifyContent: 'center' }}>     
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Features</Text>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.reload}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Reload"
                        onPress={() => { console.log("Reload") }}
                    />
                    <OptionItem
                        icon={icons.send}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Send Money"
                        onPress={() => { console.log("Send Money") }}
                    />
                    <OptionItem
                        icon={icons.movie_tickets}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Movie"
                        onPress={() => { console.log("Movie Tickets") }}
                    />
                    <OptionItem
                        icon={icons.wallet}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label="Wallet"
                        onPress={() => { console.log("Wallet") }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.bill}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label="Bill"
                        onPress={() => { console.log("Bill") }}
                    />
                    <OptionItem
                        icon={icons.game}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="Game"
                        onPress={() => { console.log("Game") }}
                    />
                    <OptionItem
                        icon={icons.flight_tickets}
                        bgColor={['#7be993', '#46caaf']}
                        label="Flight"
                        onPress={() => { console.log("Tickets") }}
                    />
                    <OptionItem
                        icon={icons.more}
                        bgColor={['#fca397', '#fc7b6c']}
                        label="More"
                        onPress={() => { console.log("More") }}
                    />
                </View>
            </View>

            {/* specialPromoData */}
            <View style={{ 
                flex: 1, }}>
                <Text style={{ marginTop: 30, marginHorizontal: SIZES.padding, ...FONTS.h2, marginBottom:15 }}>Special Promos</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={specialPromoData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderspecialPromoData(item, index)}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Home;
