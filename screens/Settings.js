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
            <Text>Settings</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
            >
                <Text>Navigate to Recipe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings;