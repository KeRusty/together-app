import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import { Container} from 'native-base'
import { withNavigation } from 'react-navigation'

import AppHeader from '../../components/appHeader/appHeader'

import styles from './profile-styles'

class ProfileScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        }


    }

    componentDidMount() {


    }

    render() {

       

        return (
            <Container>

                <AppHeader
                    left="back"
                    animated={true}
                    transparent={true}
                />


            </Container>
        )
    }
}

export default withNavigation(ProfileScreen)
