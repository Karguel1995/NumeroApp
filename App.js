import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert, Button } from 'react-native';
import Home from './screens/Home'
import Game from './screens/Game'
import Rules from './screens/Rules'
import Credits from './screens/Credits'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} options={{ title: '' }}/>
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Credits" component={Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  frame: {
    width: '80%',
    height: '80%',
    display: 'flex',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10
  },
  screen: {
    width: '100%',
    height: '25%',
  },
  counter : {
    fontSize: 12,
    alignSelf: 'flex-end'
  },
  numbers: {
    display: 'flex',
    height: '75%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    // backgroundColor: 'black'
  },
  keyboardNumber: {
    fontSize: 28,
    color: 'white'
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'gray',
    borderRadius: 40,
    color: 'white'
  },
  check: {
    flexDirection: 'row',
    fontSize: 28,
    marginBottom: 10,
    padding: 10,
    borderBottomColor : '#F2F2F2',
    borderBottomWidth: 4,

  },
  checkNumber: {
    fontSize: 28,
  }

});