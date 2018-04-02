import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card, Header } from 'react-native-elements';

class Front extends Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./icons/heartnote.png')}
            style={{width: 44, height: 44}} />,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{backgroundColor: '#AEA5CD'}}
          centerComponent={
            { text: 'SMH', style:{ fontSize: 35, fontWeight: 'bold' } }
          }
        />
        <ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HealthScreen')}>
          <Card style={styles.cardStyle}>
            <View>
              <Image
                style={styles.imageStyle}
                source={require('./icons/heartFront.png')}
              >
              <Text style={styles.textStyle}>Health</Text>
              </Image>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('MusicScreen')}>
          <Card style={styles.cardStyle}>
            <View>
              <Image
                style={styles.imageStyle}
                source={require('./icons/musicFront.png')}
              >
                <View style={styles.contentStyle}>
                  <Text style={styles.textStyle}>Music</Text>
                </View>
              </Image>
            </View>
          </Card>
        </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    flex: 1
  },

  imageStyle: {
    height: 250,
    width: 250,
    alignSelf: 'center'
  },

  textStyle: {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    lineHeight: 250
  },

  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default Front;
