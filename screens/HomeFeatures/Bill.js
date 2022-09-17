import React, { useRef } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    FlatList
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';

const Bill = ({ navigation }) => {

let BillItemsData = [
    {
        id1: 1,
        name: "Mobile",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 2,
        name: "TV",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 3,
        name: "Insurance",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 4,
        name: "Credit Card Payments",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 5,
        name: "Finance Leasing",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 6,
        name: "Utility",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 7,
        name: "Telephone & Internet",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 8,
        name: "Donations",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 9,
        name: "Clubs",
        icon: icons.education,
        color: COLORS.blue,   
    },
    {
        id1: 10,
        name: "Govt.Payments",
        icon: icons.education,
        color: COLORS.blue,   
    },
]

// const [categories, setCategories] = React.useState(categoriesData)

function renderNavBar () {
    return (
        <View
            style={{
                marginTop :15,
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
            <TouchableOpacity
                 style={{ justifyContent: 'center', alignItems: 'flex-end', width: 20 }}
                 onPress={() => navigation.navigate('Home')}
            >
                <Image 
                    source = {icons.back}
                    style = {{
                        width :30,
                        height :30,
                        tintColor : COLORS.black
                    }}
                />
            </TouchableOpacity>
               
            <Text style={{ color: COLORS.blue, fontWeight: 'bold', ...FONTS.h2, marginLeft: SIZES.padding * 1.3 }}>Bill Payments</Text>
                
            <TouchableOpacity
                 style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                 onPress={() => console.log('More')}
            >
                <Image 
                    source = {icons.more_icon}
                    style = {{
                        width :30,
                        height :30,
                        tintColor : COLORS.black
                    }}
                />
            </TouchableOpacity>

        </View>
    )

}

function renderHeader() {
    return (
        <View
            style={{
                marginTop :15,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'flex-end',
                paddingHorizontal: SIZES.padding,
             }}
    >
        <TouchableOpacity
                style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, flexDirection: 'row', alignItems: 'center' }}    
                onPress={() => console.log('All')}
        >                         
            <Text style={{ color: COLORS.blue, ...FONTS.h3}}>   All   </Text>                                              
       </TouchableOpacity>
    

        <TouchableOpacity
                style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, flexDirection: 'row',  alignItems: 'center'  }}
                onPress={() => console.log('Favourite')}
        > 
            <Text style={{ color: COLORS.blue, ...FONTS.h3}}>    Favourite   </Text>    
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
                    margin: 6,
                    height :60,
                    alignItems :'center',
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }} 
                onPress={() => { console.log("More") }}            
            >

                <Image 
                    source={item.icon}
                    style = {{
                        width :20,
                        height :20,
                        tintColor : item.color,
                        alignItems : 'flex-end'
                    }}
                />
            
                <Text style={{ marginLeft: SIZES.base * 2.5, color: COLORS.gray, ...FONTS.h5 }} >{item.name}</Text>
                

              
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
                numColumns={2}
                />
            </View>
        </View>
    )

}


return (
    <View 
         style = {{
             flex:1, 
             backgroundColor: COLORS.white
             }}     
     >
         {/* Nav Bar section  */}
         {renderNavBar()}
         {renderHeader ()}
         {renderBillItemList()}
    </View>
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