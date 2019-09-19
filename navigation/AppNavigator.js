import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Details from '../screens/Details';
import Contacts from '../screens/Contacts';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';


const MainStack = createStackNavigator(
  {
    Contacts: Contacts,
    Details: Details,
  },
  {
    initialRouteName: 'Contacts',
  }
);
const RootStack = createStackNavigator(
  {
    Main: MainStack,
    NewContact: NewContact,
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
//const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html

    Main: RootStack
  },
  {
    initialRouteName: 'Main',
  })
);
