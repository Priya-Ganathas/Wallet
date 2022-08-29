import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Settings = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Support</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
            >
                <Text>priya</Text>
            </TouchableOpacity>
        </View>
    )
}


 export default Settings;