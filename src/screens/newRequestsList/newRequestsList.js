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
import SearchBox from "../../components/searchBox/searchBox";
import FriendBox from "../../components/friendBox/friendBox";

import styles from "./newRequestsList-styles";

class MessageListScreen extends Component {
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
          title={"New Requests"}
          list={true}
          animated={true}
        />

        <SearchBox />

        <ScrollView>
          <FriendBox
            name={"Ruwi Abeysekara"}
            message={"Hi, Thank you for adding"}
            status={"online"}
            type={"request"}
          />

          <FriendBox
            name={"Dihara Fernando"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"request"}
          />

          <FriendBox
            name={"Nishi Senerathne"}
            message={"Hi, Thank you for adding"}
            status={"online"}
            type={"request"}
          />

          <FriendBox
            name={"Dilani Wijesinghe"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"request"}
          />

          <FriendBox
            name={"Janani Dimithri"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"request"}
          />

          <FriendBox
            name={"Lihini K Alwis"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"request"}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(MessageListScreen);
