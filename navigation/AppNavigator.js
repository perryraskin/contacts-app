import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Details from '../screens/Details';
import Contacts from '../screens/Contacts';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Details: Details,
    Contacts: Contacts,
    Profile: Me,
    NewContact: NewContact,
  })
);
