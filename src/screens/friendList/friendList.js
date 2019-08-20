import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { Container} from 'native-base'
import { withNavigation } from 'react-navigation'

import AppHeader from '../../components/appHeader/appHeader'

import styles from './friendList-styles'

class FriendListScreen extends Component {

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
                    right="menu"
                    title={"Friends"}
                    list={true}
                    animated={true}
                />


                
                


            </Container>
        )
    }
}

export default withNavigation(FriendListScreen)