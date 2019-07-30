import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import { Left, Right } from 'native-base'
import { withNavigation } from 'react-navigation'

import styles from './login-styles'

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


            </View>
        )
    }
}

export default withNavigation(WelcomeScreen)
