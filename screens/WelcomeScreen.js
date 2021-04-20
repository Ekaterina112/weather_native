import {Text, TouchableWithoutFeedback, View} from "react-native";
import React from "react";


export const WelcomeScreen = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Weather')}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>WeatherApp</Text>
            </View>
        </TouchableWithoutFeedback>

    );
}