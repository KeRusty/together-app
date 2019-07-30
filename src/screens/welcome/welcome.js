import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import { Left, Right } from 'native-base'
import { withNavigation } from 'react-navigation'

import styles from './welcome-styles'

class WelcomeScreen extends Component {


    componentDidMount() {


    }

    render() {

        const props = this.props;

        return (
            <View style={styles.container}>

                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={window.theme.body}
                />

                <View>
                    <Text>TOGETHER APP</Text>
                </View>

                <View style={styles.buttonContainer}>

                    <View style={styles.loginButtonContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('login')}>
                            <Text style={styles.buttonText}>Login & Continue</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.noAccountContainer}>
                        <Text style={styles.noAccountText}>Don't Have an account?</Text>
                    </View>

                    <View style={styles.registerButtonContainer}>
                        <TouchableOpacity style={styles.registerButton} onPress={() => this.props.navigation.navigate('register')}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </View>
        )
    }
}

export default withNavigation(WelcomeScreen)
