import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

import styles from "./friendBox-styles";

class FriendBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { name, message, status, type } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate("friendProfile", { name })
        }
      >
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

        {type === "friends" && (
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
        )}

        {type === "messages" && (
          <View style={styles.statusContainer}>
            <View>
              <Icon
                name="message-circle"
                type="Feather"
                style={styles.messageIcon}
              />
            </View>

            <Text style={styles.messageText}>Message</Text>
          </View>
        )}

        {type === "request" && (
          <View style={styles.requestContainer}>
            <TouchableOpacity>
              <Icon
                name="ios-checkmark-circle-outline"
                type="Ionicons"
                style={styles.yesIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ios-close-circle-outline"
                type="Ionicons"
                style={styles.noIcon}
              />
            </TouchableOpacity>
          </View>
        )}

        {type === "follower" && (
          <View style={styles.statusContainer}>
            <TouchableOpacity style={styles.followerButton}>
              <Text style={styles.followerText}>Profile</Text>
            </TouchableOpacity>
          </View>
        )}

        {type === "following" && (
          <View style={styles.statusContainer}>
            <TouchableOpacity style={styles.followerButton}>
              <Text style={styles.followerText}>Unfollow</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

export default withNavigation(FriendBox);
