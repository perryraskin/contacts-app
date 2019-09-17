import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header, Actions, Info } from '../components/UserDetails/';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import colors from '../config/colors';
import { PrimaryButton } from '../components/Buttons';

class Details extends Component {
  render() {

    const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
        <Actions {...contact} />
        <Info {...contact} />
        <PrimaryButton
          label="Go back"
          onPress={() => this.props.navigation.goBack(null)}
        />
      </ScrollView>
    );
  }
}

export default Details;
