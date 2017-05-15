import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import api from './../utilities/api';
class Read extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:[],
      body: []
    }
  }
  componentWillMount(){
    api.getRovers().then((res) => {
      this.setState({
        title : res.title,
        body: res.body
      })
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            {this.state.title}
        </Text>
        <Text style={styles.instructions}>
            {this.state.body}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  }
});
module.exports = Read
