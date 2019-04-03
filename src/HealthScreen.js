import React, { Component }  from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Avatar, Card, Header } from 'react-native-elements';
import { SmoothLine } from 'react-native-pathjs-charts';

export default class HealthScreen extends Component {
  static navigationOptions = {
    title: <Image source={require('./icons/heartFront.png')}
            style={{width: 44, height: 44}} />,
  };

  render() {
    let data = [
      [{
        "x": -10,
        "y": -1000
      }, {
        "x": -9,
        "y": -729
      }, {
        "x": -8,
        "y": -512
      }, {
        "x": -7,
        "y": -343
      }, {
        "x": -6,
        "y": -216
      }, {
        "x": -5,
        "y": -125
      }, {
        "x": -4,
        "y": -64
      }, {
        "x": -3,
        "y": -27
      }, {
        "x": -2,
        "y": -8
      }, {
        "x": -1,
        "y": -1
      }, {
        "x": 0,
        "y": 0
      }, {
        "x": 1,
        "y": 1
      }, {
        "x": 2,
        "y": 8
      }, {
        "x": 3,
        "y": 27
      }, {
        "x": 4,
        "y": 64
      }, {
        "x": 5,
        "y": 125
      }, {
        "x": 6,
        "y": 216
      }, {
        "x": 7,
        "y": 343
      }, {
        "x": 8,
        "y": 512
      }, {
        "x": 9,
        "y": 729
      }, {
        "x": 10,
        "y": 1000
      }],
      [{
        "x": -10,
        "y": 100
      }, {
        "x": -9,
        "y": 81
      }, {
        "x": -8,
        "y": 64
      }, {
        "x": -7,
        "y": 49
      }, {
        "x": -6,
        "y": 36
      }, {
        "x": -5,
        "y": 25
      }, {
        "x": -4,
        "y": 16
      }, {
        "x": -3,
        "y": 9
      }, {
        "x": -2,
        "y": 4
      }, {
        "x": -1,
        "y": 1
      }, {
        "x": 0,
        "y": 0
      }, {
        "x": 1,
        "y": 1
      }, {
        "x": 2,
        "y": 4
      }, {
        "x": 3,
        "y": 9
      }, {
        "x": 4,
        "y": 16
      }, {
        "x": 5,
        "y": 25
      }, {
        "x": 6,
        "y": 36
      }, {
        "x": 7,
        "y": 49
      }, {
        "x": 8,
        "y": 64
      }, {
        "x": 9,
        "y": 81
      }, {
        "x": 10,
        "y": 100
      }]
    ]

    let options = {
      width: 280,
      height: 280,
      color: '#2980B9',
      margin: {
        top: 20,
        left: 45,
        bottom: 25,
        right: 20
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{backgroundColor: 'transparent'}}
          centerComponent={
            { text: 'Health Stats', style:{ fontSize: 35, fontWeight: 'bold' } }
          }
        />
        <ScrollView>
          <Card>
            <View style={styles.container}>
              <Image
                style={{width: 60, height: 60}}
                source={require('./icons/heartrate.png')}
              />
              <Text style={{fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>Heartrate: </Text>
              <Text style={
                {fontSize: 25, fontWeight: 'bold', justifyContent: 'center', color: 'red'}}>
                100 BPM
              </Text>
            </View>
            <SmoothLine data={data} options={options} xKey='x' yKey='y' />
          </Card>

          <Card>
            <View style={styles.container}>
              <Image
                style={{width: 70, height: 70}}
                source={require('./icons/sp02.png')}
              />
              <Text style={{fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>Sp02 Level: </Text>
              <Text style={
                {fontSize: 25, fontWeight: 'bold', lineHeight: 65, color: 'red'}}>
                99%
              </Text>
            </View>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
}
