import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import RNPickerSelect from 'react-native-picker-select'

import styles from "./form-styles";

export default class PickerInput extends Component {

    constructor ( props ) {

        super( props );

        this.state = {
            value: props.defaultValue
        };

        this.defaults = {};

        this.defaults.useNativeAndroidPickerStyle = false;

        this.defaults.placeholderTextColor = window.theme.textAlt;

        this.defaults.textInputProps = {
            underlineColorAndroid: "transparent"
        }

        this.defaults.Icon = () => {
            return <Icon name="chevron-down" type={"EvilIcons"} fontSize={12} style={{ color: window.theme.light2 }} />;
        };

    }

    onChange = ( value ) => {

        this.setState( { value: value } );

        if ( typeof this.props.onValueChange == "function" ) this.props.onValueChange( value );

    }

    blur () {


    }

    focus () {


    }

    render () {

        let { style, ...props } = this.props;

        style = [ styles.textInput, styles.pickerInput, style || {} ];

        let options = Object.assign( {}, this.defaults, props ) || {};

        options.ref = ( ref ) => { this.input = ref; };

        options.onValueChange = this.onChange;

        style = { inputIOS: style, inputAndroid: style, iconContainer: { height: "100%", alignItems: "center", justifyContent: "center" } };

        return (

            <View style={styles.pickerInputContainer}>

                <TouchableOpacity onPress={() => { /*this.input.focus()*/ }} style={styles.label}>

                    <Text style={styles.labelText}>{props.label.toUpperCase()}</Text>

                </TouchableOpacity>

                <View style={styles.field}>

                    <RNPickerSelect {...options} value={this.state.value} style={style} />

                </View>

            </View>

        )

    }

}
