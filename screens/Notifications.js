import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Notifications = ({ navigation }) => {
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
                onPress={() => navigation.navigate("Notifications")}
            >
                <Text>priya</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Notifications;






