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

import styles from "./profile-styles";

class ProfileScreen extends Component {
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
          smallTitle={"Welcome Back"}
          title={"User"}
          profile={true}
          animated={true}
          transparent={true}
        />

        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.pictureContainer}>
              <ImageBackground
                style={styles.pictureCover}
                source={require("../../assets/img/pictureOuter.png")}
              />
            </View>

            <TouchableOpacity style={styles.findButton}>
              <Text style={styles.findText}>Find Matches!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoBoxContainer}>
            <View style={styles.infoBoxContent}>
              <Text style={styles.infoBoxHeadingText}>Followers</Text>
              <Text style={styles.infoBoxText}>203</Text>
            </View>

            <View style={styles.infoBoxContent}>
              <Text style={styles.infoBoxHeadingText}>Following</Text>
              <Text style={styles.infoBoxText}>364</Text>
            </View>

            <View style={styles.infoBoxContent}>
              <Text style={styles.infoBoxHeadingText}>Friends</Text>
              <Text style={styles.infoBoxText}>173</Text>
            </View>
          </View>

          <View style={styles.buttonContainerOuter}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.messageButton}
                onPress={() => this.props.navigation.navigate("messageList")}
              >
                <Text>Messages</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.likeButton}>
                <Text>Likes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.messageButton}
                onPress={() => this.props.navigation.navigate("friendList")}
              >
                <Text>Friends</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(ProfileScreen);
