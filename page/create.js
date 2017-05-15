import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput
} from 'react-native';
class Create extends Component {
  state = {
    tTitle: '<No Event>',
    tBody: '<No Event>',
  };

  upTTitle = (text) => {
    this.setState((state) => {
      return {
        tTitle: text,
      };
    });
  };
  upTBody = (text) => {
    this.setState((state) => {
      return {
        tBody: text,
      };
    });
  };
  onButtonPress = () => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({
        title: this.state.tTitle,
        body: this.state.tBody,
        userId: 1
      }),
      })
      alert("Success Create Post","Title: "+this.state.tTitle);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Create New Post
        </Text>
          <View style={styles.ver}>
              <Text style={styles.te}> Title :</Text>
              <TextInput style={styles.ip} placeholder="Put a title here"
              onChange={(event) => this.upTTitle( event.nativeEvent.text )}
              onEndEditing={(event) => this.upTTitle( event.nativeEvent.text )}
              onSubmitEditing={(event) => this.upTTitle( + event.nativeEvent.text )}
               />
          </View>
          <View style={{height:40}}></View>
          <Text style={styles.te2}> Body :</Text>
          <TextInput style={styles.ip2} placeholder="Put Body Here"
          onChange={(event) => this.upTBody( event.nativeEvent.text )}
          onEndEditing={(event) => this.upTBody( event.nativeEvent.text )}
          onSubmitEditing={(event) => this.upTBody( + event.nativeEvent.text )}
            />
          <Button
             onPress={this.onButtonPress}
             title="Submit"
           />
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
  te: {
    textAlign: 'left',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginRight: 20
  },
  te2: {
    textAlign: 'left',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  ip: {
    width: 200
  },
  ip2: {
    width: 300,
    margin:0,
  }
});
module.exports = Create
