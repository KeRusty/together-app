import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Container, Icon } from "native-base";
import { withNavigation } from "react-navigation";

import AppHeader from "../../components/appHeader/appHeader";

import styles from "./friend-profile-styles";

class FriendProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.navigation.state.params.name
    };
  }

  componentDidMount() {}

  render() {
    const { name } = this.state;

    return (
      <Container>
        <AppHeader
          left="back"
          smallTitle={"Welcome Back"}
          title={name}
          profile={true}
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

            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="ios-contact" type="Ionicons" style={styles.icon} />
                <Text style={styles.actionsText}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer}>
                <Icon
                  name="ios-remove-circle-outline"
                  type="Ionicons"
                  style={styles.iconAlt}
                />
                <Text style={styles.actionsText}>Ignore</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="ios-hand" type="Ionicons" style={styles.icon} />
                <Text style={styles.actionsText}>Block</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.iconContainer}>
                <Icon
                  name="ios-information-circle-outline"
                  type="Ionicons"
                  style={styles.iconAlt}
                />
                <Text style={styles.actionsText} r>
                  Report
                </Text>
              </TouchableOpacity>
            </View>
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

          <View style={styles.aboutMeContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>About Me</Text>
              <Text style={styles.contentText}>
                I'm open minded, 163cm, 54Kg, Slim Body, brown hair, black eyes,
                have children, i hate smoking, i don't drink, i speak english
              </Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(FriendProfile);
