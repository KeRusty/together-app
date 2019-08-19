import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Form } from 'native-base'
import { withNavigation } from 'react-navigation'
import KeyboardSpacer from 'react-native-keyboard-spacer';

import AppHeader from '../../components/appHeader/appHeader'
import Input from '../../components/form/input'

import styles from './login-styles'

class RegisterScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {
            key: Date.now(),
            loading: false,
            values: {},
        }

        this.onChange = this.onChange.bind(this);

    }

    componentDidMount() {


    }


    onChange = (name, value) => {

        const values = this.state.values;

        values[name] = value;

        this.setState({ values: values });

    }

    render() {

        const props = this.props;
        const {values} = this.state;

        return (
            <Container>

                <AppHeader
                    left="back"
                    title="Register with Together"
                    transparent={true}
                />

                <View style={styles.container}>

                    <ScrollView contentContainerStyle={styles.scrollView}> 

                        <Form style={styles.form}>

                            <View style={styles.keyboard}>

                                <Input
                                    name="username"
                                    placeholder="Username"
                                    keyboardType="email-address"
                                    textContentType="username"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('username', value); }}
                                    ref={"usernameInput "}
                                    onSubmitEditing={() => { this.refs.passwordInput.focus() }}
                                />

                                <Input
                                    name="password"
                                    placeholder="Password"
                                    keyboardType="default"
                                    textContentType="password"
                                    secureTextEntry={true}
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('password', value); }}
                                    ref={"passwordInput"}
                                    onSubmitEditing={() => { this.refs.confirmPasswordInput.focus() }}
                                />

                                <Input
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    keyboardType="default"
                                    secureTextEntry={true}
                                    textContentType="password"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('confirmPassword', value); }}
                                    ref={"confirmPasswordInput"}
                                    onSubmitEditing={() => { this.refs.emailInput.focus() }}
                                />


                                <Input
                                    name="email"
                                    placeholder="Email Address"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('email', value); }}
                                    ref={"emailInput"}
                                    onSubmitEditing={() => { this.refs.mobileInput.focus() }}
                                />

                                <Input
                                    name="number"
                                    placeholder="Mobile"
                                    keyboardType="phone-pad"
                                    textContentType="telephoneNumber"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('mobile', value); }}
                                    ref={"mobileInput"}
                                />

                            </View>

                            <View style={styles.buttonInnerContainer}>
                                <TouchableOpacity style={styles.createButton} onPress={() => this.props.navigation.navigate('personalInfo', values)}>
                                    <Text style={styles.buttonText}>JOIN NOW!</Text>
                                </TouchableOpacity>
                            </View>

                            <KeyboardSpacer />

                        </Form>

                    </ScrollView>

                </View>




            </Container>
        )
    }
}

export default withNavigation(RegisterScreen)
