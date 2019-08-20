import React from 'react';

// Navigators
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Easing, Animated } from 'react-native';

// StackNavigator screens

// Looking For
import LookingForScreen from '../screens/looking-for/looking-for';

// Profile
import ProfileScreen from '../screens/profile/profile';



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
        profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: "lookingFor",
        headerMode: "none",
        transitionConfig
    }
);


export const NavContainer = createAppContainer(NavApp)