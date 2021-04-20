import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {WelcomeScreen} from "../screens/WelcomeScreen";
import {WeatherScreen} from "../screens/WeatherScreen";
import {DetailsWeatherScreen} from "../screens/DetailWeatherScreen";



const Stack = createStackNavigator();
const headerOptions = {
    title: 'WeatherApp',
    headerStyle: {
        backgroundColor: '#00804A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}


export default () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={headerOptions}/>
            <Stack.Screen name="Weather" component={WeatherScreen} options={headerOptions}/>
            <Stack.Screen name="Details" component={DetailsWeatherScreen} options={headerOptions}/>
        </Stack.Navigator>
    )
}