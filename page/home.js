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
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is My First App React Native.
        </Text>
        <Text style={styles.instructions}>
          Name :  Rizal Sidik Permana.
        </Text>
        <Image source={require('./../me.jpg')} style={{width: 200, height:200}}/>
        <Text style={styles.instructions}>
          batch : Gagliano.
        </Text>
        <Text style={styles.welcome}>
          jsonplaceholder Menu
        </Text>
        <View style={styles.ver}>
          <View style={styles.b_read}>
            <Button
               onPress={this.props.onReadButtonPress}
               title="Read Post"
             />
          </View>
          <View style={styles.b_create}>
             <Button
                onPress={this.props.onCreateButtonPress}
                title="Create Post"
              />
          </View>
        </View>
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
  ver: {
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  b_read: {
    marginRight: 10
  },
  b_create: {
    marginLeft: 10
  }
});
module.exports = Home
