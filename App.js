import React from 'react';
import { Text, Platform, StatusBar, AsyncStorage, ActivityIndicator, Alert, DeviceEventEmitter } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Container, View, Drawer, Root } from "native-base";
import { useScreens } from 'react-native-screens';

import theme from "./src/app/theme";
import { NavContainer } from "./src/app/loggedIn";
import { NavLoggedOutCoutainer } from "./src/app/loggedOut";
import { AppProvider } from "./src/app/app";

import styles from './app-styles'

useScreens();

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      currentToken: null,
      currentUser: null,
    };

  }

  navigate(routeName, params) {

    const { nav } = this;

    if (nav) {

      this.hideSidebar();

      setTimeout(() => {

        nav.dispatch(
          NavigationActions.navigate({ routeName, params })
        )

      }, 300);

    }

  }

  resetNavigation(routes) {

    const { nav } = this;

    if (nav) {

      const resetAction = StackActions.reset({
        index: 0,
        actions: routes || [NavigationActions.navigate({ routeName: 'news' })],
      });

      nav.dispatch(resetAction);

    }

  }

  render() {

    const { mounted, sidebarOpen, currentToken, currentUser } = this.state;

    const persistenceKey = "NavigationStateDEV4" + currentToken;

    const persistNavigationState = !__DEV__ ? undefined : async (navState) => {
      try {
        await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState))
      } catch (err) {
        // handle the error according to your needs
      }
    };

    const loadNavigationState = !__DEV__ ? undefined : async () => {
      const jsonString = await AsyncStorage.getItem(persistenceKey)
      return JSON.parse(jsonString)
    }

    return (
      <Container styles={styles.wrap}>

        <StatusBar backgroundColor={window.theme.primary} barStyle="light-content" translucent animated />

        <Root>

          <AppProvider>

            <NavLoggedOutCoutainer
              persistNavigationState={persistNavigationState}
              loadNavigationState={loadNavigationState}
              ref={el => { this.nav = el }}
            />

          </AppProvider>

        </Root>

      </Container>
    );
  }
}

export default App;

