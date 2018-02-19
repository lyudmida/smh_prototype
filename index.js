// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import MusicList from './src/components/MusicList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'TayTay is BaeBae'} />
    <MusicList />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('smh', () => App);
