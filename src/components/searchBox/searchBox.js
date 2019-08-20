import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { Container, Icon } from 'native-base'


import styles from './searchBox-styles'


class SearchBox extends Component {

    constructor(props) {

        super(props);

        this.state = {
            amount: this.props.amount,
            text: this.props.text,
            values: {}
        }

        this.onChange = this.onChange.bind(this)
    }



    componentDidMount() {


    }

    onChange(name, value) {

        const { values } = this.state;

        values[name] = value;

        this.setState({ values: values });

    }




    render() {

        const { amount, text, values } = this.state;
        const { update } = this.props

        const onChange = this.onChange;

        return (
            <View style={styles.searchBox}>

                <View style={styles.searchContainer}>

                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search"
                            keyboardType="default"
                            returnKeyType="search"
                            defaultValue={this.props.searchValue}
                            onSubmitEditing={(event) => update(event.nativeEvent.text)}
                        />
                    </View>

                </View>

            </View>
        )

    }
}

export default withNavigation(SearchBox)
