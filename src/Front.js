import React, { Component } from 'react';
import { Image, ListView, Text, TouchableOpacity, View } from 'react-native';
import { Card, Header } from 'react-native-elements';
// import Header from './components/Header';
// import Card from './components/Card';
// import CardSection from './components/CardSection';
/*
const styles = {
  cardStyle: {
    width: 365,
    height: 278,
    borderBottomWidth: 1,
    padding: 3,
    backgroundColor: '#000',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative',
    opacity: 0.99
  }
};
*/

class Front extends Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./icons/heartnote.png')}
            style={{width: 44, height: 44}} />,
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{backgroundColor: '#ada3c8'}}
          centerComponent={
            { text: 'SMH', style:{ fontSize: 35, fontWeight: 'bold' } }
          }
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HealthScreen')}>
          <Card style={styles.cardStyle}>
            <View>
              <Image
                style={styles.imageStyle}
                source={require('./icons/heartFront.png')}
              >
                <View style={styles.contentStyle}>
                  <Text style={styles.textStyle}>Health</Text>
                </View>
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
      </View>
    )
  }
}
/*      <View>
        <Header headerText={'SMH'} />
        <Card>
          <CardSection>
            <View style={styles.thumbnailContainerStyle}>
              <Image
                style={styles.thumbnailStyle}
                source={require('./icons/heartFront.png')}
              >
                <View style={styles.contentStyle}>
                  <Text style={styles.textStyle}>Health</Text>
                </View>
              </Image>
            </View>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <View style={styles.thumbnailContainerStyle}>
              <Image
                style={styles.thumbnailStyle}
                source={require('./icons/musicFront.png')}
              >
                <View style={styles.contentStyle}>
                  <Text style={styles.textStyle}>Music</Text>
                </View>
              </Image>
            </View>
          </CardSection>
        </Card>
      </View>
    );
  }
}
*/
const styles = {
  cardStyle: {
    backgroundColor: '#000',
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
  },
/*


thumbnailStyle: {
  height: 250,
  width: 250
},

thumbnailContainerStyle: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10,
  marginRight: 10
},
*/
};

export default Front;
