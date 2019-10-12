import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class Developer extends Component {
  static navigationOptions = {
    tabBarIcon : ({tintcolot}) => (
      <Image
        source={require("../assets/imgs/desenvolvedor.png")}
        style={styles.tabNavigatorIcon}
      />
    )
  };
  
  render() {
    return <View>
            <Text>Developer</Text>
        </View>;
  }
}

const styles = StyleSheet.create({
  tabNavigatorIcon : {
    height: 30,
    width: 30
  }
});