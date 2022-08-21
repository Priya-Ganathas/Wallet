import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Support = ({ navigation }) => {
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
                onPress={() => navigation.navigate("Support")}
            >
                <Text>Navigate to Recipe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Support;