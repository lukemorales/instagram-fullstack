import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New,
    },
    {
      defaultNavigationOptions: {
        headerTitle: <Image source={logo} />,
        headerBackTitle: null,
        headerTintColor: '#000',
      },
      headerLayoutPreset: 'center',
      mode: 'modal',
    }
  )
);
