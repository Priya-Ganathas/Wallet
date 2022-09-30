
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { specialPromoData } from './DummyData/HomeScreen_Data';
import auth from '@react-native-firebase/auth';
import { images, icons, COLORS, FONTS, SIZES } from '../constants/Index';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';

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
            <Text style={{ marginTop: SIZES.base, color: COLORS.darkLime, ...FONTS.h5}}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {
      
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
                        width: 130,
                        height: '70%',
                        borderRadius: 15,
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h5, color:COLORS.white2, alignSelf:'center' }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

   return (    
    



        <View style={styles.container}>  
            
        <ImageBackground style = {{flex : 1}}
                        source = {images.screensbg1}>
        <View style={{
                    marginTop: SIZES.padding * 1,
                }}>
                <Text style={{ marginLeft: 20, color: COLORS.darkgreen2, fontWeight:'bold', ...FONTS.h1}}> {auth().currentUser.displayName}  </Text>
        </View>

        {/* <Animated.View>
            <TouchableOpacity
            
                // onPress={() => navigation.navigate("CustomMenu")}
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
    
            </TouchableOpacity>
        </Animated.View> */}

            {/* Banner */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                   <Image
                    source={images.GoPremium}
                    resizeMode="cover"
                    style={{
                        top:25,
                        width: "100%",
                        height: "50%",
                        borderRadius: 15,
                        marginTop : SIZES.padding * -0.7 
                    }}
                />
            </View>
   
   
            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>     
                <Text style={{ marginTop: -120 , marginHorizontal: SIZES.padding, ...FONTS.body3, color: COLORS.black }}> Features </Text>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base, marginBottom: 5 }}>
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
                <Text style={{  marginTop: -20, marginHorizontal: SIZES.padding, ...FONTS.body3, marginBottom:15, color: COLORS.black, marginBottom: 10}}>Special Promos </Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={specialPromoData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderspecialPromoData(item, index)}
            />
            </View>
            </ImageBackground>  
            </View>


      
        
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    }
});

export default Home;
