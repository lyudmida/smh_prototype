import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Header from './components/Header';

class Front extends Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./icons/heartnote.png')}
            style={{width: 44, height: 44}} />,
  };

  render() {
    return (
      <View>
        <Header headerText={'User Health Stats'} />
      </View>
    );
  }
}

export default Front;
