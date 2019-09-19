import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Me from '../screens/Me';
import Details from '../screens/Details';
import Contacts from '../screens/Contacts';
import NewContact from '../screens/NewContact';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const MeStack = createStackNavigator(
  {
    Settings: Me,
  },
  config
);

MeStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

MeStack.path = '';

const DetailsStack = createStackNavigator(
  {
    Settings: Details,
  },
  config
);

DetailsStack.navigationOptions = {
  tabBarLabel: 'Details',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

DetailsStack.path = '';

const ContactsStack = createStackNavigator(
  {
    Settings: Contacts,
  },
  config
);

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
  ),
};

ContactsStack.path = '';

const NewContactStack = createStackNavigator(
  {
    Settings: NewContact,
  },
  config
);

NewContactStack.navigationOptions = {
  tabBarLabel: 'New Single',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'} />
  ),
};

NewContactStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ContactsStack,
  NewContactStack,
  MeStack,
});

tabNavigator.path = '';

export default tabNavigator;
