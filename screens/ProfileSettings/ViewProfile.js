import React from 'react';
import { View, StyleSheet,SafeAreaView,TouchableOpacity, Image} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';
import auth from '@react-native-firebase/auth';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { color } from 'react-native-reanimated';

const ViewProfile = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 25, marginLeft:15}}>
          <Avatar.Image 
            source={icons.profile}
            size={120}/>
         

        <View style={{marginLeft: 2}}>
        <Title style={[styles.title, {
              marginTop:40,
              marginBottom: 10,
            }]}>  {auth().currentUser.displayName} </Title>
            <Caption>Accountant</Caption>
        </View>

               
        <TouchableOpacity
                 style={{ justifyContent: 'center', width: 50 }}
                 onPress={() => navigation.navigate('EditProfile')}
            >
                <Image 
                    source = {icons.editprofile}
                    style = {{
                        width :20,
                        height :20,
                        marginLeft:-30,
                        marginTop: -70,
                        tintColor : COLORS.black
                    }}
                />
            </TouchableOpacity>

            </View>
        </View>

       

        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Image source={icons.mapmarker} style = {{ height:20, width:20 ,  color: COLORS.gray}}/>
                <Text style={{color:COLORS.gray, marginLeft: 20}}>Ragama , Sri Lanka </Text>
            </View>
       
        <View style={styles.row}>
        <Image source={icons.phone1} style = {{ height:20, width:20 , color: COLORS.gray}}/>
          <Text style={{color:COLORS.gray, marginLeft: 20}}>+94 077110000 </Text>
        </View>

        <View style={styles.row}>
        <Image source={icons.email} style = {{ height:20, width:20 ,  color: COLORS.gray}}/>
          <Text style={{color:COLORS.gray, marginLeft: 20}}>{auth().currentUser.email} </Text>
        </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Rs.250,000</Title>
            <Caption>Wallet Balance</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>Rs.50.000</Title>
            <Caption>Current Balance</Caption>
         </View>
      </View>


      </SafeAreaView>

  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});