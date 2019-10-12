import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import api from "../services/api";

// import { Container } from './styles';

export default class Campeoes extends Component {
  constructor() {
    super();

    this.state = {
      listaCampeoes: []
    };
  }

  componentDidMount() {
    api
      .get()
      .then(res => {
        let _listaCampeoes = [];

        for (let key in res.data.data) {
          _listaCampeoes.push(res.data.data[key]);
        } // Utilizei este for para gerar uma lista com somente os objetos dos campeos. E não uma propriedade que contêm seus dados, pois assim não seria possível utilizar os dados posteriormente.

        this.setState({ listaCampeoes: _listaCampeoes });
        console.warn(this.state.listaCampeoes);
      })
      .catch(err => {
        console.warn(err);
      });
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/imgs/league-of-legends-white.jpg")}
        style={styles.tabNavigatorIconHome}
      />
    )
  };

  renderizaCampeao = ({ item, index }) => (
    <View style={styles.campeaoItem}>
      <Text style={styles.ChNome}>{item.name}</Text>
      <Text style={styles.ChTitle}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.main}>
        <SafeAreaView>
          <StatusBar backgroundColor="#171717" barStyle="white-content" />
          <Text style={styles.h1}>Campeões</Text>
          <Text style={styles.p}>
            Todos os campeões do jogo League Of Legends.
          </Text>

          <FlatList
            data={this.state.listaCampeoes}
            renderItem={this.renderizaCampeao}
            keyExtractor={item => item.key}
            style={styles.listaCampeoes}
            numColumns={2}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#171717",
    height: "100%",
    alignItems: "center"
  },
  tabNavigatorIconHome: {
    height: 30,
    width: 30
  },
  h1: {
    fontSize: 50,
    textAlign: "center",
    color: "#1ae0eb"
  },
  p: {
    textAlign: "center",
    fontSize: 20,
    color: "white"
  },
  ChNome: {
    fontSize: 30,
    color: "#1ae0eb",
    borderBottomColor: "#1ae0eb",
    borderBottomWidth: 2,
    textAlign: "center"
  },
  ChTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  listaCampeoes: {
    marginTop:10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  campeaoItem: {
    textAlign: "center",
    width: "50%",
    paddingLeft: 5,
    paddingRight: 5
  }
});
