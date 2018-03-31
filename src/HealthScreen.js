import React, { Component }  from 'react';
import { Image, Text, View } from 'react-native';
import Header from './components/Header';

class HealthScreen extends Component {
  static navigationOptions = {
    title: <Image source={require('./icons/heartFront.png')}
            style={{width: 44, height: 44}} />,
  };

  render() {
    return (
        <View>
          <Header headerText={'User Health Stats'} />
        </View>
    )
  }
}

export default HealthScreen;
