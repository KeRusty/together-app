import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "native-base";
import { withNavigation } from "react-navigation";

import AppHeader from "../../components/appHeader/appHeader";
import SearchBox from "../../components/searchBox/searchBox";

import styles from "./friendBox-styles";

class FriendBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { name, message, status } = this.props;

    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/img/pictureOuter.png")}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.nameTextAlt} numberOfLines={1}>
            {message}
          </Text>
        </View>

        <View style={styles.statusContainer}>
          <View
            style={[
              status === "online" ? styles.statusLight : styles.statusLightAlt
            ]}
          />
          <Text
            style={[
              status === "online" ? styles.statusText : styles.statusTextAlt
            ]}
          >
            {status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(FriendBox);
