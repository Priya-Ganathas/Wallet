import React, {useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';
import Carousel from 'react-native-snap-carousel'; 
import { freeGames, paidGames, sliderData } from '../../screens/DummyData/gamedata';
import BannerSlider from '../../Components/Game/BannerSlider';
import {windowWidth} from '../../utils/Dimension';
import CustomSwitch from '../../Components/Game/GameSwitch';
import ListItem from '../../Components/Game/GameListItems';

const Game = ({ navigation }) => {

const [gamesTab, setGamesTab] = useState(1);    

const renderBanner = ({item, index}) => {
    return <BannerSlider data = {item}/>
};

const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
 
    return (

    <SafeAreaView>

       <ScrollView style = {{ padding : 8}}>
        
       <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
            >
                <Image 
                    source = {icons.back}
                    style = {{
                        width :20,
                        height :20,
                        tintColor : COLORS.black,
                    }}
                />
            </TouchableOpacity>

        <Text style={{ color: COLORS.purple2, fontWeight: 'bold', ...FONTS.h2, marginLeft: SIZES.padding * 6.3, marginTop: SIZES.padding * -0.5, marginBottom: SIZES.padding*1}}> Games </Text>

            <View 
                style={{ 
                        flexDirection: 'row', 
                        borderColor : COLORS.gray, 
                        borderWidth:1,
                        borderRadius: 20, 
                        marginLeft: 7 ,
                        marginRight : 7,
                        paddingHorizontal : 1,
                        paddingVertical : 8,

                }}>
                <Image 
                    source = {icons.search}
                    style = {{
                        tintColor : COLORS.gray,
                        alignSelf :'center',
                        height : '70%',
                        width :20,
                        marginLeft: SIZES.padding * 1
                    }}
                />  



                <TextInput 
                    style = {{
                        flex: 1,
                        marginLeft : 10,
                        paddingHorizontal : 5,
                        paddingVertical : -5,
                    }}
                    placeholder = "Search" />
            </View>





            <View
                style = {{
                    marginVertical : 20,
                    flexDirection : 'row',
                    justifyContent : 'space-between'
                }}
            >
                <Text style={{color: COLORS.black, ...FONTS.pop2}} >   Upcoming Games </Text>

                <TouchableOpacity onPress={() => {}} >
                    <Text style={{color: COLORS.peacockblue, ...FONTS.body3 }} > See all </Text>
                </TouchableOpacity>
            </View>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40}
              itemWidth={300}
              loop = {true}          
              />

              <View style={{marginVertical: 20}}>
                <CustomSwitch 
                        selectionMode={1} 
                        option1 ="Free to play"
                        option2= "Paid games"    
                        onSelectSwitch={onSelectSwitch}                   
                        />
              </View>

              {gamesTab == 1 &&
                freeGames.map(item => (
                    <ListItem
                        key={item.id}
                        photo={item.poster}
                        title={item.title}
                        subTitle={item.subtitle}
                        isFree={item.isFree}
                        onPress={() =>
                            navigation.navigate('GameDetails', {
                            title: item.title,
                            id: item.id,
                            })
                        }
                        />
                ))}
                {gamesTab == 2 &&
                paidGames.map(item => (
                    <ListItem
                    key={item.id}
                    photo={item.poster}
                    title={item.title}
                    subTitle={item.subtitle}
                    isFree={item.isFree}
                    price={item.price}
                    onPress={() =>
                        navigation.navigate('GameDetails', {
                        title: item.title,
                        id: item.id,
                        })
                    }
                    />
                ))}

        </ScrollView>

    </SafeAreaView>
    )
}

export default Game;
