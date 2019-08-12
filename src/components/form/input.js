import React, { Component } from "react";
import { KeyboardAvoidingView, TextInput } from 'react-native'
//import { Input as NativeInput, Item } from "native-base";

import styles from "./form-styles";

export default class Input extends Component {

  constructor(props) {

    super(props);

    this.state = {

    };

    this.defaults = {};

    this.defaults.underlineColorAndroid = 'transparent';

    this.defaults.blurOnSubmit = false    

  }

  blur(){
    
    this.input.blur();

  }

  focus(){
    
    this.input.focus();
    
  }

  render() {

    let { style, ...props } = this.props;
    
    style = [styles.input, style || {}];

    let options = Object.assign({}, this.defaults, props) || {};

    options.ref = (ref) => { this.input = ref; };

    return (

      <TextInput {...options} style={style} />

    )

  }

}
