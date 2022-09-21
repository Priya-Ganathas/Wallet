
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    Animated
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
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 30, backgroundColor: 'red' }]}
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
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.h5}}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {
    // Dummy Data
    const specialPromoData = [
        
        {
            id: 1,
            name: "Airtel",
            img: images.Airtel,
        },

        {
            id: 2,
            name: "Mobitel",
            img: images.Mobitel,
        },
        {
            id: 3,
            name: "Hutch",
            img: images.Hutch,
        },
      
        {
            id: 4,
            name: "Etisalat",
            img: images.Etisalat,
        },

        {
            id: 5,
            name: "Dialog",
            img: images.PowerDialogCut,
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
                // onPress = {() => navigation.navigate ("specialPromoDataDetail") } 
                onPress={() => console.log("specialPromoData")}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: 110,
                        height: '60%',
                        borderRadius: 15,
                        borderColor:COLORS.black
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h5 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

   return (            

        <View style={styles.container}>  

        <Animated.View>
            <TouchableOpacity
            style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: SIZES.padding * 1,
                    paddingHorizontal: SIZES.padding * 1
                }}
                onPress={() => navigation.navigate("CustomMenu")}
            >
                <Image
                    source={icons.bar_menu_icon}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.black
                    }}   
                />
                <Text style={{ marginLeft: SIZES.padding * 0.5, color: COLORS.gray, ...FONTS.h3, fontWeight:'bold'}}> Menu </Text>
            </TouchableOpacity>
        </Animated.View>

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
                        marginTop : SIZES.padding * -0.7 
                    }}
                />
            </View>
   
   
            {/* Options */}

            <View style={{ flex: 1, justifyContent: 'center' }}>     
                <Text style={{ marginTop: SIZES.padding * -2 , marginHorizontal: SIZES.padding, ...FONTS.body3, color: COLORS.black }}> Features </Text>
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
                        onPress={() => navigation.navigate("SendMoney")}
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
                        onPress={() => navigation.navigate("Bill")}
                    />
                    <OptionItem
                        icon={icons.game}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="Game"
                        onPress={() => navigation.navigate("Game") }
                    />
                    <OptionItem
                        icon={icons.flight_tickets}
                        bgColor={['#7be993', '#46caaf']}
                        label="Flight"
                        onPress={() => {console.log("Flight") }}
                    />
                    <OptionItem
                        icon={icons.more}
                        bgColor={['#fca397', '#fc7b6c']}
                        label="More"
                        onPress={() => { console.log("More") }}
                    />
                </View>
            </View>

            {/* //specialPromoData */}
            <View style={{ 
                flex: 1, }}>
                <Text style={{  marginTop: SIZES.padding * 0, marginHorizontal: SIZES.padding, ...FONTS.body3, marginBottom:15, color: COLORS.black}}>Special Promos </Text>
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
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Home;
