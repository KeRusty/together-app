import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'
import { withNavigation } from 'react-navigation'

import AppHeader from '../../components/appHeader/appHeader'

import styles from './login-styles'

class LoginScreen extends Component {


    componentDidMount() {


    }

    render() {

        const props = this.props;

        return (
            <Container >

                <AppHeader
                    left="back"
                    title="LOGIN"
                />

                <View style={styles.container}>

                    <View>
                        <Text>Login Screen</Text>
                    </View>

                </View>

            </Container>
        )
    }
}

export default withNavigation(LoginScreen)
