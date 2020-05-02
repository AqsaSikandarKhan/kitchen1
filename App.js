import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,Entypo } from '@expo/vector-icons';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDZosUWP8mViVsofhupFxXxAm0a7HOI1y4",
    authDomain: "smart-kitchen-b130d.firebaseapp.com",
    databaseURL: "https://smart-kitchen-b130d.firebaseio.com",
    projectId: "smart-kitchen-b130d",
    storageBucket: "smart-kitchen-b130d.appspot.com",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

import home from './screens/home';
import location from './screens/location';
import notify from './screens/notify';
import ingredient from './screens/ingredient';
import gass from './screens/Gass';
import smoke from './screens/smoke';
import about from './screens/about';
import Sugar from './screens/Sugar';


const Stack = createStackNavigator();
const MaterialBottomTabs  = createBottomTabNavigator();
export default class App extends Component {
    createHomeStack = () =>
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                headerTintColor:'white',
            }}
        >
            <Stack.Screen
                name="home"
                children={this.createBottomTabs}
                options={{
                    title: "home",
                    headerStyle: { backgroundColor: "black" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="notify"
                component={notify}
                options={{
                    title: "Notify",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="location"
                component={location}
                options={{
                    title: "Location",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="ingredient"
                component={ingredient}
                options={{
                    title: "ingredient",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />

            <Stack.Screen
                name="gass"
                component={gass}
                options={{
                    title: "gass",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="smoke"
                component={smoke}
                options={{
                    title: "Smoke",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="about"
                component={about}
                options={{
                    title: "about",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />
            <Stack.Screen
                name="Sugar"
                component={Sugar}
                options={{
                    title: "Sugar",
                    headerStyle: { backgroundColor: "blue" },
                    headerTintColor: "white"
                }}
            />
        </Stack.Navigator>
            createBottomTabs = () => {
            return <MaterialBottomTabs.Navigator>
            <MaterialBottomTabs.Screen
            name="home"
            style={{ marginBottom: 16,height:10 }}
            component={home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Ionicons name="ios-home" size={25} color="black" />
                ),
            }}
            />
            <MaterialBottomTabs.Screen name="notify" component={notify}
            options={{
                tabBarLabel: 'Notify',
                tabBarIcon: () => (
                    <Ionicons style={[{ color: 'black' }]} size={25} name="ios-notifications" />
                )
            }}
            />
            <MaterialBottomTabs.Screen name="location" component={location}
            options={{
                tabBarLabel: 'Location',
                tabBarIcon: () => (
                    <Entypo style={[{ color: 'black' }]} size={25} name="location-pin" />
                ),
            }}
            />
            </MaterialBottomTabs.Navigator>
            }



    render() {
        return (
            <NavigationContainer>
                {this.createHomeStack()}
            </NavigationContainer>
        );
    }

}
