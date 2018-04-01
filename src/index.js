import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Front from './Front';
import MusicScreen from './MusicScreen';
import HealthScreen from './HealthScreen';

const Navigation = StackNavigator(
  {
    Front: {screen: Front},
    MusicScreen: {screen: MusicScreen},
    HealthScreen: {screen: HealthScreen},
  },
  {
    initialRouteName: 'Front'
  }
)

export default class App extends React.Component{
  render() {
    return <Navigation />;
  }
}

AppRegistry.registerComponent('Navigation', () => Navigation);
