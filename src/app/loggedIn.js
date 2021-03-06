import React from "react";

// Navigators
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Easing, Animated } from "react-native";

// StackNavigator screens

// Looking For
import LookingForScreen from "../screens/looking-for/looking-for";

// Profile
import ProfileScreen from "../screens/profile/profile";
import FriendProfileScreen from "../screens/friend-profile/friend-profile";

//FriendList
import FriendListScreen from "../screens/friendList/friendList";

//Messages
import MessageListScreen from "../screens/messageList/messageList";

//Requests
import RequestsListScreen from "../screens/newRequestsList/newRequestsList";

//Follers & Following
import FollowersScreen from "../screens/followers-list/followers-list";
import FollowingScreen from "../screens/following-list/following-list";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    }
  };
};

export const NavApp = createStackNavigator(
  {
    lookingFor: {
      screen: LookingForScreen
    },
    profile: {
      screen: ProfileScreen
    },
    friendProfile: {
      screen: FriendProfileScreen
    },
    friendList: {
      screen: FriendListScreen
    },
    messageList: {
      screen: MessageListScreen
    },
    requestList: {
      screen: RequestsListScreen
    },
    followers: {
      screen: FollowersScreen
    },
    following: {
      screen: FollowingScreen
    }
  },
  {
    initialRouteName: "lookingFor",
    headerMode: "none",
    transitionConfig
  }
);

export const NavContainer = createAppContainer(NavApp);
