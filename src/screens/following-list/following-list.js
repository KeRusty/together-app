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

import styles from "./following-list-styles";

class FollowingList extends Component {
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
          title={"Following"}
          list={true}
          animated={true}
        />

        <SearchBox />

        <ScrollView>
          <FriendBox
            name={"Ruwi Abeysekara"}
            message={"Hi, Thank you for adding"}
            status={"online"}
            type={"following"}
          />

          <FriendBox
            name={"Dihara Fernando"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"following"}
          />

          <FriendBox
            name={"Nishi Senerathne"}
            message={"Hi, Thank you for adding"}
            status={"online"}
            type={"following"}
          />

          <FriendBox
            name={"Dilani Wijesinghe"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"following"}
          />

          <FriendBox
            name={"Janani Dimithri"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"following"}
          />

          <FriendBox
            name={"Lihini K Alwis"}
            message={"Hi, Thank you for adding"}
            status={"offline"}
            type={"following"}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(FollowingList);
