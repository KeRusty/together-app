import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Form } from 'native-base'
import { withNavigation } from 'react-navigation'
import KeyboardSpacer from 'react-native-keyboard-spacer';

import AppHeader from '../../components/appHeader/appHeader'
import PickerInput from '../../components/form/pickerInput';

import styles from './your-interests-styles'

class YourInterests extends Component {

    constructor(props) {

        super(props);

        this.state = {
            key: Date.now(),
            loading: false,
            values: {},
            info: this.props.navigation.state.params,
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
        const {info, values} = this.state;

        console.log(info)

        return (
            <Container>

                <AppHeader
                    left="back"
                    title="Your Interests"
                    transparent={true}
                />

                <View style={styles.container}>

                    <ScrollView contentContainerStyle={styles.scrollView}> 

                        <Form style={styles.form}>

                            <View style={styles.keyboard}>

                            <PickerInput
                                name="relationship"
                                label="What are you looking for?"
                                onValueChange={(value) => { this.onChange("relationship", value) }}
                                ref={"relationshipInput"}
                                placeholder={{ "label": "Select Relationship Type" }}
                                items={[
                                    { "label": "Strong Relationship", "value": "strongRelationship" },
                                    { "label": "Just Checking", "value": "justChecking" },
                                    { "label": "Flirting", "value": "flirting" },
                                ]}
                            />

                            <PickerInput
                                name="height"
                                label="What is your Height?"
                                onValueChange={(value) => { this.onChange("height", value) }}
                                ref={"heightInput"}
                                placeholder={{ "label": "Select Height" }}
                                items={[
                                    { "label": "4 ft", "value": "4" },
                                    { "label": "4 ft 1 inch", "value": "4.1" },
                                    { "label": "4 ft 2 inches", "value": "4.2" },
                                    { "label": "4 ft 3 inches", "value": "4.3" },
                                    { "label": "4 ft 4 inches", "value": "4.4" },
                                    { "label": "4 ft 5 inches", "value": "4.5" },
                                    { "label": "4 ft 6 inches", "value": "4.6" },
                                    { "label": "4 ft 7 inches", "value": "4.7" },
                                    { "label": "4 ft 8 inches", "value": "4.8" },
                                    { "label": "4 ft 9 inches", "value": "4.9" },
                                    { "label": "4 ft 10 inches", "value": "4.10" },
                                    { "label": "4 ft 11 inches", "value": "4.11" },
                                    { "label": "4 ft 12 inches", "value": "4.12" },
                                    { "label": "5 ft", "value": "5" },
                                    { "label": "5 ft 1 inches", "value": "5.1" },
                                    { "label": "5 ft 2 inches", "value": "5.2" },
                                    { "label": "5 ft 3 inches", "value": "5.3" },
                                    { "label": "5 ft 4 inches", "value": "5.4" },
                                    { "label": "5 ft 5 inches", "value": "5.5" },
                                    { "label": "5 ft 6 inches", "value": "5.6" },
                                    { "label": "5 ft 7 inches", "value": "5.7" },
                                    { "label": "5 ft 8 inches", "value": "5.8" },
                                    { "label": "5 ft 9 inches", "value": "5.9" },
                                    { "label": "5 ft 10 inches", "value": "5.10" },
                                    { "label": "5 ft 11 inches", "value": "5.11" },
                                    { "label": "5 ft 12 inches", "value": "5.12" },
                                    { "label": "6 ft", "value": "6" },
                                    { "label": "6 ft 1 inches", "value": "6.1" },
                                    { "label": "6 ft 2 inches", "value": "6.2" },
                                    { "label": "6 ft 3 inches", "value": "6.3" },
                                    { "label": "6 ft 4 inches", "value": "6.4" },
                                    { "label": "6 ft 5 inches", "value": "6.5" },
                                    { "label": "6 ft 6 inches", "value": "6.6" },
                                    { "label": "6 ft 7 inches", "value": "6.7" },
                                    { "label": "6 ft 8 inches", "value": "6.8" },
                                    { "label": "6 ft 9 inches", "value": "6.9" },
                                    { "label": "6 ft 10 inches", "value": "6.10" },
                                    { "label": "6 ft 11 inches", "value": "6.11" },
                                    { "label": "6 ft 12 inches", "value": "6.12" },
                                ]}
                            />

                            <PickerInput
                                name="weight"
                                label="What is your weight?"
                                onValueChange={(value) => { this.onChange("weight", value) }}
                                ref={"weightInput"}
                                placeholder={{ "label": "Select your Weight" }}
                                items={[
                                    { "label": "30Kg - 40Kg", "value": "30-40" },
                                    { "label": "40Kg - 50Kg", "value": "40-50" },
                                    { "label": "50Kg - 60Kg", "value": "50-60" },
                                    { "label": "60Kg - 70Kg", "value": "60-70" },
                                    { "label": "70Kg - 80Kg", "value": "70-80" },
                                    { "label": "80Kg - 90Kg", "value": "80-90" },
                                    { "label": "90Kg - 100Kg", "value": "90-100" },
                                    { "label": "100Kg - 110Kg", "value": "100-110" },
                                    { "label": "110Kg - 120Kg", "value": "110-120" },
                                    { "label": "120Kg - 130Kg", "value": "120-130" },
                                    { "label": "130Kg - 140Kg", "value": "120-140" },
                                ]}
                            />

                            <PickerInput
                                name="drink"
                                label="Do you Drink?"
                                onValueChange={(value) => { this.onChange("drink", value) }}
                                ref={"drinkInput"}
                                placeholder={{ "label": "Select Drinking preferrence" }}
                                items={[
                                    { "label": "Yes", "value": "yes" },
                                    { "label": "Ocasionslly", "value": "ocasionally" },
                                    { "label": "No", "value": "no" },
                                ]}
                            />

                            <PickerInput
                                name="smoke"
                                label="Do you Smoke?"
                                onValueChange={(value) => { this.onChange("smoke", value) }}
                                ref={"smokeInput"}
                                placeholder={{ "label": "Select Smoking preferrence" }}
                                items={[
                                    { "label": "Yes", "value": "yes" },
                                    { "label": "Ocasionslly", "value": "ocasionally" },
                                    { "label": "No", "value": "no" },
                                ]}
                            />
                               
                            </View>

                            <View style={styles.buttonInnerContainer}>
                                <TouchableOpacity style={styles.createButton}>
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

export default withNavigation(YourInterests)
