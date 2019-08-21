import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Container } from "native-base";
import { withNavigation } from "react-navigation";

import AppHeader from "../../components/appHeader/appHeader";
import FriendBox from "../../components/friendBox/friendBox";

import styles from "./messageList-styles";

class FriendListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        <AppHeader
          left="back"
          right="profile"
          title={"Messages"}
          list={true}
          animated={true}
        />

        <ScrollView>
          <FriendBox
            name={"Ruwi Abeysekara"}
            message={"Hi, Thank you for adding"}
            status={"online"}
            type={"messages"}
          />

          <FriendBox
            name={"Dihara Fernando"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"messages"}
          />

          <FriendBox
            name={"Nishi Senerathne"}
            message={"Hi, Thank you for adding"}
            status={"online"}
            type={"messages"}
          />

          <FriendBox
            name={"Dilani Wijesinghe"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"messages"}
          />

          <FriendBox
            name={"Janani Dimithri"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"messages"}
          />

          <FriendBox
            name={"Lihini K Alwis"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"messages"}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(FriendListScreen);
