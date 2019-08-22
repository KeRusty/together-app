import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Share, Image, Animated, StatusBar } from "react-native";
import {
  Text,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Header,
  Thumbnail,
  View
} from "native-base";

import styles from "./appHeader-styles";

import { withApp } from "../../app/app";

class AppHeader extends Component {
  constructor(props) {
    super(props);

    if (
      this.props.animated &&
      this.props.animatedValue &&
      this.props.animatedHeight
    ) {
      this.animated = true;

      this.headerBg = this.props.animatedValue.interpolate({
        inputRange: [
          0,
          this.props.animatedHeight / 2,
          this.props.animatedHeight
        ],
        outputRange: ["transparent", "transparent", window.theme.headerBg],
        extrapolate: "clamp"
      });

      this.headerBorder = this.props.animatedValue.interpolate({
        inputRange: [
          0,
          this.props.animatedHeight,
          this.props.animatedHeight + 0.1
        ],
        outputRange: [0, 0, this.props.noHeaderBorder ? 0 : 1],
        extrapolate: "clamp"
      });

      this.headerColor = this.props.animatedValue.interpolate({
        inputRange: [
          0,
          this.props.animatedHeight - 16,
          this.props.animatedHeight
        ],
        outputRange: ["transparent", "transparent", window.theme.headerColor],
        extrapolate: "clamp"
      });

      this.headerColorAlt = this.props.animatedValue.interpolate({
        inputRange: [
          0,
          this.props.animatedHeight - 16,
          this.props.animatedHeight
        ],
        outputRange: [
          "transparent",
          "transparent",
          window.theme.headerColorAlt
        ],
        extrapolate: "clamp"
      });

      this.hideOnScroll = this.props.animatedValue.interpolate({
        inputRange: [
          0,
          this.props.animatedHeight,
          this.props.animatedHeight + 0.1
        ],
        outputRange: ["100%", "100%", "0%"],
        extrapolate: "clamp"
      });

      this.showOnScroll = this.props.animatedValue.interpolate({
        inputRange: [
          0,
          this.props.animatedHeight,
          this.props.animatedHeight + 0.1
        ],
        outputRange: ["0%", "0%", "100%"],
        extrapolate: "clamp"
      });
    } else {
      this.headerColor = window.theme.headerColor;
      this.headerColorAlt = window.theme.headerColorAlt;
      this.headerBg = window.theme.headerBg;
      //this.headerBorder = 1;
    }
  }

  render() {
    const { data } = this.props;

    const headerProps = this.props.headerProps || {};

    if (this.props.hasTabs) {
      headerProps.hasTabs = true;
    }

    if (this.props.transparent) {
      styles.header.backgroundColor = "transparent";
    }

    if (this.props.isWhite) {
      headerProps.isWhite = true;
    }

    let style = styles.headerNoTabs;
    if (this.props.transparent) style = styles.headerTransparent;
    if (this.props.hasTabs) style = styles.header;
    if (this.props.isWhite && this.props.transparent)
      style = styles.headerTitleWhite;

    return (
      <Animated.View
        style={[
          styles.headerWrap,
          this.animated ? styles.headerFloating : {},
          {
            backgroundColor: this.headerBg,
            borderBottomWidth: this.headerBorder
          },
          { paddingTop: StatusBar.currentHeight }
        ]}
      >
        <StatusBar
          backgroundColor={"transparent"}
          barStyle="light-content"
          animated
          translucent={true}
        />

        <Header
          noShadow
          style={style}
          androidStatusBarColor={"transparent"}
          iosBarStyle="dark-content"
          {...this.props.headerProps}
        >
          {typeof this.props.left === "function" && this.props.left()}

          {this.props.left == "back" && !this.props.list && (
            <Left style={styles.left}>
              <Button
                transparent
                title="Back"
                onPress={() => {
                  this.props.navigation.goBack(null);
                }}
              >
                {this.animated && this.props.list && (
                  <Animated.View style={{ width: this.hideOnScroll }}>
                    <Icon
                      style={{ color: window.theme.headerTransparentColor }}
                      type="MaterialIcons"
                      name="arrow-back"
                    />
                  </Animated.View>
                )}
                {this.animated && !this.props.list && (
                  <Animated.View style={{ width: this.showOnScroll }}>
                    <Icon
                      style={{ color: window.theme.headerColor }}
                      type="MaterialIcons"
                      name="arrow-back"
                    />
                  </Animated.View>
                )}
                {!this.animated && (
                  <Icon
                    style={styles.headerBackButtonIcon}
                    type="MaterialIcons"
                    name="arrow-back"
                  />
                )}
              </Button>
            </Left>
          )}

          {this.props.left === "back" && this.props.list && (
            <Left style={styles.left}>
              <Button
                transparent
                title="Back"
                onPress={() => {
                  this.props.navigation.goBack(null);
                }}
              >
                {!this.animated && (
                  <Icon
                    style={{ color: window.theme.headerTransparentColor }}
                    type="MaterialIcons"
                    name="arrow-back"
                  />
                )}
              </Button>
            </Left>
          )}

          {!this.props.left && <Left style={styles.left} />}

          {this.props.title && !this.props.smallTitle && !this.props.profile && (
            <Body style={styles.body}>
              {this.props.smallTitle && (
                <Title style={styles.headerTitleSmall}>
                  <Animated.Text style={{ color: this.headerColorAlt }}>
                    {this.props.smallTitle}
                  </Animated.Text>
                </Title>
              )}
              {this.props.title && (
                <Title style={styles.headerTitle}>
                  <Animated.Text style={{ color: window.theme.primary }}>
                    {this.props.title}
                  </Animated.Text>
                </Title>
              )}
            </Body>
          )}

          {this.props.title && this.props.smallTitle && this.props.profile && (
            <Body style={styles.body}>
              {this.props.smallTitle && (
                <Title style={styles.headerTitleSmallProfile}>
                  <Animated.Text style={{ color: this.headerColorAlt }}>
                    {this.props.smallTitle}
                  </Animated.Text>
                </Title>
              )}
              {this.props.title && (
                <Title style={styles.headerTitleProfile}>
                  <Animated.Text style={{ color: window.theme.tertiary }}>
                    {this.props.title}
                  </Animated.Text>
                </Title>
              )}
            </Body>
          )}

          {this.props.right == "profile" && (
            <Right style={styles.right}>
              <Button
                transparent
                title="Profile"
                onPress={() => {
                  this.props.navigation.navigate("profile");
                }}
                style={styles.headerMenuButton}
              >
                {this.animated && (
                  <Animated.View style={{ width: this.hideOnScroll }}>
                    <Icon
                      style={{ color: window.theme.headerTransparentColor }}
                      name="ios-contact"
                      type="Ionicons"
                    />
                  </Animated.View>
                )}
                {this.animated && (
                  <Animated.View style={{ width: this.showOnScroll }}>
                    <Icon
                      style={{ color: window.theme.headerColor }}
                      name="ios-contact"
                      type="Ionicons"
                    />
                  </Animated.View>
                )}
                {!this.animated && (
                  <Icon
                    style={{ color: window.theme.headerTransparentColor }}
                    name="ios-contact"
                    type="Ionicons"
                  />
                )}
              </Button>
            </Right>
          )}

          {!this.props.right && <Right style={styles.right} />}
        </Header>
      </Animated.View>
    );
  }
}

export default withApp(withNavigation(AppHeader));
