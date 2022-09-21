import React from 'react';
// import PushNotifications from '../utils/PushNotifications';
import { View,Text,TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground} from 'react-native';
import { color } from 'react-native-reanimated';

import { images, icons, COLORS, FONTS, SIZES } from '../../constants/Index';

import BottomSheet from 'reanimated-bottom-sheet';

import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

import auth from '@react-native-firebase/auth';

const EditProfile = ({ navigation }) => {

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          compressImageQuality: 0.7
        }).then(image => {
          console.log(image);
          setImage(image.path);
          this.bs.current.snapTo(1);
        });
      }
    

    renderInner = () => (
        <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
          <Text style={styles.panelButtonTitle}>Take Photo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => this.bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )  ;
     

      renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
      );
    

    bs = React.createRef();
    fall = new Animated.Value(1);

  return (
    
    <View style={styles.container}>
    <BottomSheet
      ref={this.bs}
      snapPoints={[330, 0]}
      renderContent={this.renderInner}
      renderHeader={this.renderHeader}
      initialSnap={1}
      callbackNode={this.fall}
      enabledGestureInteraction={true}
    />

    <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
                style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                }}>

            <ImageBackground
                source = {icons.profile}
                style = {{
                    height: 100, 
                    width: 100}}
                imageStyle={{borderRadius: 15}}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
            <Image
                source = {icons.camera}
                style = {{
                    height: 30,
                    width: 30,
                    color: COLORS.white,
                    opacity: 0.8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: COLORS.white,
                    borderRadius: 10,
                    }}/>
            </View>
            </ImageBackground>
            </View>
            </TouchableOpacity>
                <Text style={{marginTop: 20, fontSize: 18, fontWeight: 'bold' , marginBottom:15}}>    {auth().currentUser.displayName}    </Text>
            </View>

            <View style={styles.action}>
            <Image
                source = {icons.user}
                style = {{
                    height: 15,
                    width: 15,
                     }}/>
                <TextInput
                    placeholder="First Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: COLORS.gray,
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
            <Image
                source = {icons.user}
                style = {{
                    height: 15,
                    width: 15,
                     }}/>
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: COLORS.gray,
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
            <Image
                source = {icons.phone1}
                style = {{
                    height: 15,
                    width: 15,
                     }}/>
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#666666"
                    keyboardType='number-pad'
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: COLORS.gray,
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
            <Image
                source = {icons.email}
                style = {{
                    height: 15,
                    width: 15,
                     }}/>
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#666666"
                    keyboardType='email-address'
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: COLORS.gray,
                    },
                    ]}
                />
            </View>

            
            <View style={styles.action}>
            <Image
                source = {icons.globe}
                style = {{
                    height: 15,
                    width: 15,
                     }}/>
                <TextInput
                    placeholder="Country"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: COLORS.gray,
                    },
                    ]}
                />
            </View>

            <View style={styles.action}>
            <Image
                source = {icons.pin}
                style = {{
                    height: 15,
                    width: 15,
                     }}/>
                <TextInput
                    placeholder="City"
                    placeholderTextColor="#666666"
                    autoCorrect={false}
                    style={[
                    styles.textInput,
                    {
                        color: COLORS.gray,
                    },
                    ]}
                />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>

            </Animated.View>
            </View>
          
          
          
          
          
          
          );



  }



















export default EditProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
        },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#C6C4C4',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.red,
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });