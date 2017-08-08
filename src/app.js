import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCKfhJ2bOYOJvHWKYUJFgsqGlhqkcPfAYo',
    authDomain: 'auth-e82ae.firebaseapp.com',
    databaseURL: 'https://auth-e82ae.firebaseio.com',
    projectId: 'auth-e82ae',
    storageBucket: 'auth-e82ae.appspot.com',
    messagingSenderId: '845437101498'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
