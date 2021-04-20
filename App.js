import * as React from 'react';
import {Button, View, Text, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


function WelcomeScreen({navigation}) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Weather')}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>WeatherApp</Text>
            </View>
        </TouchableWithoutFeedback>

    );
}

function WeatherScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>WeatherScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsWeatherScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', background: 'white'}}>
            <Text>Details Weather Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();




function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ title: 'My home' }}/>
                <Stack.Screen name="Weather" component={WeatherScreen}  options={{
                    title: 'WeatherApp',
                    headerStyle: {
                        backgroundColor: '#00804A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
                <Stack.Screen name="Details" component={DetailsWeatherScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

