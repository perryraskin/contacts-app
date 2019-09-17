import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset } from "expo";
import * as Font from 'expo-font';
import * as Icon from '@expo/vector-icons';
import AppNavigator from "./navigation/AppNavigator";
import { Stitch, AnonymousCredential } from "mongodb-stitch-react-native-sdk";
import { MONGODB_APP_CLIENT } from 'react-native-dotenv'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: undefined,
      client: undefined,
      isLoadingComplete: false
    };
    this._loadClient = this._loadClient.bind(this);
  }

  componentDidMount() {
    this._loadClient();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font,
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _loadClient() {
    Stitch.initializeDefaultAppClient(MONGODB_APP_CLIENT)
    .then(client => {
      client.auth
        .loginWithCredential(new AnonymousCredential())
        .then(user => {
          console.log(`Successfully logged in as user ${user.id}`);
          this.setState({
            currentUserId: user.id,
            currentUserId: client.auth.user.id,
            client,
          });
        })
        .catch(err => {
          console.log(`Failed to log in anonymously: ${err}`);
          this.setState({
            currentUserId: undefined,
            client,
          });
        });
    })
    .catch(err => {
      console.error(err)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
