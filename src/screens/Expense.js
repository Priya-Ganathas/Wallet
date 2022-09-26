import React, { useRef, useEffect } from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, ImageBackground, TouchableOpacity, FlatList, Animated, Platform} from 'react-native';
import {Svg} from 'react-native-svg';
import { VictoryPie } from 'victory-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants/Index';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { categoriesData } from "./DummyData/Expense_Categories_Data";

const Expense = ({ navigation }) => {

    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)
   
         useEffect(() => {
           getAccountDetails()
          },[]);

          const getAccountDetails = async() =>{
            // console.log("userxxxxxxxxxxxxxxxxxxxxxxxxs: ",auth().currentUser.uid);
            // const users1 = await auth().currentUser.uid.toString()
            // const users = await firestore().collection('Balance').doc(user1).get();
            //     console.log("amount: ", users);

            //     const usersbalance = await firestore().collection('Balance').where('kRiXzbe95LmtSgPse3jq',"==", users1).get().then(res=> console.log("res: ",res));
            //     console.log("usersbalance: ", usersbalance);

            const users3 = await firestore().collection('Balance').get();
            console.log("amount: ", users3);
            const user1 = await firestore().collection('Balance').doc('XUbRVVSN1fWuZNXAB1QaJp3EYOg1').get();
            console.log("amount: ", users1);

          }

 
    function renderHeader() {
        return (
            <ImageBackground source = {images.screensbg1}>
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding}}>
            
                <View>
                    <Text style={{ color: COLORS.darkgreen2, ...FONTS.h2 }}>My Expenses</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.lightGray2 }}> Rs.70,000</Text>

                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <View style={{
                        backgroundColor: COLORS.lightGray,
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>

                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.darkgreen2, ...FONTS.h3 }}>30 Aug, 2022</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray2 }}>45% more than last month</Text>
                    </View>
                </View>
               
            </View>
            </ImageBackground>
        )
    }

    function renderCategoryHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Title */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}> {categories.length} Total</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "chart" ? COLORS.primary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.gray,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list" ? COLORS.primary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderCategoryList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity              
                     style={{
                        flex: 1,
                        flexDirection: 'row',
                        margin: 5,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 5,
                        backgroundColor: COLORS.white,
                        ...styles.shadow
                    }} 
                    onPress={() => setSelectedCategory(item)}              
                >
                    <Image
                        source={item.icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: item.color
                        }}
                />
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>              
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={{
                            flexDirection: 'row',
                            marginVertical: SIZES.base,
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            if (showMoreToggle) {
                                Animated.timing(categoryListHeightAnimationValue, {
                                    toValue: 115,
                                    duration: 500,
                                    useNativeDriver: false
                                }).start()
                            } else {
                                Animated.timing(categoryListHeightAnimationValue, {
                                    toValue: 172.5,
                                    duration: 500,
                                    useNativeDriver: false
                                }).start()
                            }
                                setShowMoreToggle(!showMoreToggle)
                        }}
                    >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down}
                        style={{ 
                            marginLeft: 5,
                            width: 15, 
                            height: 15, 
                            alignSelf: 'center' 
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle() {
        return (
            <View style={{ height: 80, padding: SIZES.padding }}>
                {/* Title */}
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
            </View>
        )
    }

    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        //Filter pending expenses
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ({ item, index }) => (
        <View style= {{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}>
            {/* Title */}
            <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                <View
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.lightGray,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.base
                    }}               
                
                >
                    <Image 
                        source={selectedCategory.icon}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedCategory.color
                        }}
                    />
                </View>
                    <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>        
            </View>

            {/* Expense Description */}
            <View style={{ paddingHorizontal: SIZES.padding }} >

                {/* Title and description */}
                <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.white }}> {item.description}</Text>
            
            {/* Location  */}
            <Text style={{ marginTop: SIZES.padding, ...FONTS.h4, }}>Location</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image 
                        source={icons.pin}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.darkgray,
                            marginRight: 5
                        }}
                    />
                    <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
                </View>          
            </View>

            {/* Price */}
            <View
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomStartRadius: SIZES.radius,
                    borderBottomEndRadius: SIZES.radius,
                    backgroundColor: selectedCategory.color,
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>CONFIRM {item.total.toFixed(2)} LKR </Text>
                </View>
        </View>

        )
        return (
            <View>
                {renderIncomingExpensesTitle()}

                {
                    incomingExpenses.length > 0 &&    
                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }

                {
                    incomingExpenses.length == 0 &&    
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.h3 }}>No Record</Text>
                    </View>
                }

            </View>
        )
    }

    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
            let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

            // filter out categories with no data/expenses
            let filterChartData = chartData.filter(a => a.y > 0)

            // Calculate the total expenses
            let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)
        
            // Calculate percentage and repopulate chart data
            let finalChartData = filterChartData.map((item) => {
                let percentage = (item.y / totalExpense * 100).toFixed(0)
                return {
                    label: `${percentage}%`,
                    y: Number(item.y),
                    expenseCount: item.expenseCount,
                    color: item.color,
                    name: item.name,
                    id: item.id
                }
            })     
            return finalChartData;
        }
    
        function setSelectCategoryByName(name) {
            let category = categories.filter(a => a.name == name)
            setSelectedCategory(category[0])
        }   
        
        function setSelectCategoryByName(name) {
            let category = categories.filter(a => a.name == name)
            setSelectedCategory(category[0])
        }           

        function renderChart() {

        //Filter expenses with "Confirmed" status     
        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

        return (


            <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
                <VictoryPie
                    data={chartData}
                    colorScale={colorScales}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                    style={{
                        labels: { fill: "white", ...FONTS.body3 },
                        parent: {
                            ...styles.shadow
                        },
                    }}
                    width={SIZES.width * 0.8}
                    height={SIZES.width * 0.8}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPress: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        let categoryName = chartData[props.index].name
                                        setSelectCategoryByName(categoryName)
                                    }
                                }]
                            }
                        }
                    }]}
                />

                <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                    <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                    <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
                </View>

                </View>


        )
    }

    function renderExpenseSummary() {
        let data = processCategoryDataToDisplay()

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 40,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
                }}
                onPress={() => {
                    let categoryName = item.name
                    setSelectCategoryByName(categoryName)
                }}
            >
                {/* Name/Category */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                            borderRadius: 5
                        }}
                    />

                    <Text style={{ marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
                </View>

                {/* Expenses */}
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.y} Rs. - {item.label}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: SIZES.padding }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                />
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
            {/* Header section */}
            {renderHeader()}

            {/* Category Header Section */}
            {renderCategoryHeaderSection()}
      
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>                  
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {renderExpenseSummary()}
                    </View>
                }               
            </ScrollView>
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

export default Expense;