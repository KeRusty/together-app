import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import { Left, Right } from 'native-base'
import { withNavigation } from 'react-navigation'

import styles from './looking-for-styles'

class LookingForScreen extends Component {


    componentDidMount() {


    }

    render() {

        const props = this.props;

        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.brideContainer}>
                    <Text style={styles.text}>Im looking for a bride</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.groomContainer}>
                    <Text style={styles.text}>Im looking for a groom</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

export default withNavigation(LookingForScreen)
