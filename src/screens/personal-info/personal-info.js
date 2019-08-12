import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Form } from 'native-base'
import { withNavigation } from 'react-navigation'
import KeyboardSpacer from 'react-native-keyboard-spacer';

import AppHeader from '../../components/appHeader/appHeader'
import Input from '../../components/form/input'

import styles from './personal-info-styles'

class RegisterScreen extends Component {

    constructor(props) {

        super(props);

        this.state = {
            key: Date.now(),
            loading: false,
            values: {},
            register: this.props.navigation.state.params
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
        const {register} = this.state;

        console.log(register)

        return (
            <Container>

                <AppHeader
                    left="back"
                    title="Personal Info"
                    transparent={true}
                />

                <View style={styles.container}>

                    <ScrollView contentContainerStyle={styles.scrollView}> 

                        <Form style={styles.form}>

                            <View style={styles.keyboard}>

                                <Input
                                    name="firstName"
                                    placeholder="First Name"
                                    keyboardType="default"
                                    textContentType="givenName"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('firstName', value); }}
                                    ref={"firstNameInput "}
                                    onSubmitEditing={() => { this.refs.lastNameInput.focus() }}
                                />

                                <Input
                                    name="lastName"
                                    placeholder="Last Name"
                                    keyboardType="default"
                                    textContentType="familyName"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('lastName', value); }}
                                    ref={"lastNameInput"}
                                    onSubmitEditing={() => { this.refs.ageInput.focus() }}
                                />

                                <Input
                                    name="age"
                                    placeholder="Age"
                                    keyboardType="numeric"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('age', value); }}
                                    ref={"ageInput"}
                                    onSubmitEditing={() => { this.refs.uploadInput.focus() }}
                                />


                                <Input
                                    name="upload"
                                    placeholder="Upload Photos"
                                    keyboardType="default"
                                    returnKeyType="next"
                                    onChangeText={(value) => { this.onChange('photos', value); }}
                                    ref={"uploadInput"}
                                />

                            </View>

                            <View style={styles.buttonInnerContainer}>
                                <TouchableOpacity style={styles.createButton} onPress={() => this.props.navigation.navigate('register')}>
                                    <Text style={styles.buttonText}>NEXT</Text>
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
