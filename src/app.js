import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
state = { loggeIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCKfhJ2bOYOJvHWKYUJFgsqGlhqkcPfAYo',
    authDomain: 'auth-e82ae.firebaseapp.com',
    databaseURL: 'https://auth-e82ae.firebaseio.com',
    projectId: 'auth-e82ae',
    storageBucket: 'auth-e82ae.appspot.com',
    messagingSenderId: '845437101498'
  });

firebase.auth().onAuthStateChanged((user) => {
if (user) {
  this.setState({ loggedIn: true });
} else {
  this.setState({ loggedIn: false });
}
});
}

renderContent() {
switch (this.state.loggedIn) {
  case true:
  return (
  <Card>
    <CardSection>
      <Button onPress={() => firebase.auth().signOut()}>
        Log Out
      </Button>
    </CardSection>
  </Card>
  );
  case false:
  return <LoginForm />;
  default:
return (
  <Card>
    <CardSection>
      <Spinner size="large" />
    </CardSection>
  </Card>
);
}
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
