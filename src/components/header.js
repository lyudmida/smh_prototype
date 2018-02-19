// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Hallo hallo</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#BEABEA'
  },

  textStyle: {
    fontSize: 40
  }
};

// Make the component available to other parts of the app
export default Header;
