/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
const onButtonPress = () => {
  alert('Button has been pressed!');
};
import api from './utilities/api';
import Home from './page/home';
import Read from './page/read';
import Create from './page/create';
import {
  StackNavigator,
} from 'react-navigation';
class MainScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to my Apps',
  };
  render() {
    const { navigate } = this.props.navigation;
    const onReadButton = () => {
      navigate('Read')
    };
    const onCreateButton = () => {
      navigate('Create')
    }
    return <Home onReadButtonPress={onReadButton} onCreateButtonPress={onCreateButton} />;
  }
}
class ReadPost extends React.Component {
  static navigationOptions = {
    title: 'Read Post',
  };
  render() {
    return <Read />
  }
}
class CreatePost extends React.Component {
  static navigationOptions = {
    title: 'Create Post',
  };
  render() {
    return <Create />
  }
}
const AwesomeProject = StackNavigator({
  Main: {screen: MainScreen},
  Read: {screen: ReadPost},
  Create: {screen: CreatePost}
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
