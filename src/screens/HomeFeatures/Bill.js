import React, { useRef } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native';
import { BillItemsData } from "../DummyData/billdata";

import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';

const Bill = ({ navigation }) => {


// const [categories, setCategories] = React.useState(categoriesData)

// function renderNavBar () {

//     return (
//         <View
//             style={{
//                 marginTop :15,
//                 flexDirection: 'row',
//                 height: 40,
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-end',
//                 paddingHorizontal: SIZES.padding,
//                 backgroundColor: COLORS.white,
//             }}
//         >
//             <TouchableOpacity
//                  style={{ justifyContent: 'center', alignItems: 'flex-end', width: 20 }}
//                  onPress={() => navigation.navigate('Home')}
//             >
//                 <Image 
//                     source = {icons.back}
//                     style = {{
//                         width :30,
//                         height :30,
//                         tintColor : COLORS.black
//                     }}
//                 />
//             </TouchableOpacity>
               
//             <Text style={{ color: COLORS.blue, fontWeight: 'bold', ...FONTS.h2, marginLeft: SIZES.padding * 1.3 }}>Bill Payments</Text>
                
//             <TouchableOpacity
//                  style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
//                  onPress={() => console.log('More')}
//             >
//                 <Image 
//                     source = {icons.more_icon}
//                     style = {{
//                         width :30,
//                         height :30,
//                         tintColor : COLORS.black
//                     }}
//                 />
//             </TouchableOpacity>

//         </View>
//     )

// }

function renderHeader() {
    return (
        <View
            style={{
                marginTop :10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
             }}
    >
        <TouchableOpacity
                style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, flexDirection: 'row', alignItems: 'center' }}    
                onPress={() => console.log('All')}
        >                         
            <Text style={{ color: COLORS.white, ...FONTS.h2}}>   All   </Text>                                              
       </TouchableOpacity>
    

        <TouchableOpacity
                style={{ alignItems: 'center'}}
                onPress={() => console.log('Favourite')}
        > 
            <Text style={{ color: COLORS.white, ...FONTS.h2, marginBottom:1}}>    Favourite   </Text>    
       </TouchableOpacity>

       </View>
    )
}

function renderBillItemList (){
    
    const renderBillItemList = ({ item }) => {
        return (    
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 15,
                    height :60,
                    alignItems :'center',
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 15,
                    backgroundColor: COLORS.transparentGray,
                    ...styles.shadow
                }} 
                onPress={() => { console.log("More") }}            
            >

                <Image 
                    source={item.icon}
                    style = {{
                        width :25,
                        height :25,
                        tintColor : COLORS.primary,
                        alignItems : 'flex-end'
                    }}
                />
            
                <Text style={{ marginLeft: SIZES.base * 2.5, color: COLORS.white, ...FONTS.h3 }} >{item.name}</Text>
                

              
            </TouchableOpacity>
        )

    }

    return (
        <View>
            <View>
                <FlatList 
                data = {BillItemsData}
                renderItem = {renderBillItemList}
                keyExtractor = {item => '${item.id}'}
                numColumns={1}
                />
            </View>
        </View>
    )

}


return (
    <ImageBackground   
    style = {{flex : 1}}
    source = {images.Screensbg}
 >
  
    <View 
        //  style = {{
        //      flex:1, 
        //      backgroundColor: COLORS.white
        //      }}     
     >
         {/* Nav Bar section  */}
         {/* {renderNavBar()} */}
         {renderHeader ()}
         {renderBillItemList()}
    </View>
    </ImageBackground>
 )



}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})


export default Bill;