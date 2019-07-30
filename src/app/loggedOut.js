import React from 'react';

// Navigators
import { createStackNavigator, createAppContainer } from 'react-navigation'

// StackNavigator screens
import WelcomeScreen from '../screens/welcome/welcome'
import RegisterScreen from '../screens/login/register'
import LoginScreen from '../screens/login/login'

export const NavAppLoggedOut = createStackNavigator({
    welcome: {
        screen: WelcomeScreen
    },
    register: {
        screen: RegisterScreen
    },
    login: {
        screen: LoginScreen
    },
}, {
        initialRouteName: 'welcome',
        headerMode: 'none'
    });

export const NavLoggedOutCoutainer = createAppContainer(NavAppLoggedOut)
