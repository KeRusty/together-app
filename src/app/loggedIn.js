import React from 'react';

// Navigators
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Easing, Animated } from 'react-native';

// StackNavigator screens
import LookingForScreen from '../screens/looking-for/looking-for';
import RegisterScreen from '../screens/login/register'
import LoginScreen from '../screens/login/login'


const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
    }
}

export const NavApp = createStackNavigator(
    {

        lookingFor: {
            screen: LookingForScreen,
        },
    },
    {
        initialRouteName: "news",
        headerMode: "none",
        transitionConfig
    }
);


export const NavContainer = createAppContainer(NavApp)