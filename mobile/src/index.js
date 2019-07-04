import React from 'react';
import { YellowBox, StatusBar } from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Routes />
  </>
);

export default App;
