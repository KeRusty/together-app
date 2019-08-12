import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
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
                    animated={true}
                    transparent={true}
                />

                <View style={styles.container}>

                    <ScrollView contentContainerStyle={styles.scrollView}> 

                        <View>
                            <Text style={styles.headingText}>Filter Your Match</Text>
                        </View>

                        <View style={styles.buttonContainer}>

                            <View style={styles.buttonInnerContainer}>
                                <TouchableOpacity style={styles.facebookButton} onPress={() => this.props.navigation.navigate('login')}>
                                    <Text style={styles.buttonText}>Login with Facebook</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonInnerContainer}>
                                <TouchableOpacity style={styles.googleButton} onPress={() => this.props.navigation.navigate('register')}>
                                    <Text style={styles.buttonText}>Login with Google</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.orContainer}>
                                <Text style={styles.orText}>Or</Text>
                            </View>

                            <View style={styles.buttonInnerContainer}>
                                <TouchableOpacity style={styles.createButton} onPress={() => this.props.navigation.navigate('register')}>
                                    <Text style={styles.buttonText}>Create an Account</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>


                </View>

            </Container>
        )
    }
}

export default withNavigation(LoginScreen)
