import {Text, View} from "react-native";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

export const DetailsWeatherScreen = () => {
    const dispatch = useDispatch()

    /*useEffect(() => {
        dispatch(getDetailWeather())
    }, [])*/
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', background: 'white'}}>
            <Text>Details Weather Screen</Text>
        </View>
    );
}