import React from "react"
import { StyleSheet, Text, View, Pressable, Alert, Button } from 'react-native';

export default function Rules () {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.rules}>Rules</Text> */}
            <Text style={styles.rule}>The goal of the game is to guess 3 numbers in the correct order.</Text>
            <Text style={styles.rule}>Each time you try to guess a code, the game will give you a hint on how many digits you have guessed correctly and if there are numbers among them that are in the correct position.</Text>
            <Text style={styles.rule}>Contact us for your suggestions and opinions on mail Karguel1995@gmail.com!</Text>
            <Text style={styles.rule}>Good Luck & Have Fun!</Text>
        </View>
    )
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
    button: {
        width: '50%',
        height: 50,
        backgroundColor: '#595959',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    },
    rules: {
        fontSize: 24,
        marginBottom: 30,
    },
    rule: {
        fontSize: 16,
        margin: 20,
        textAlign: 'center'
    }
  
  });
  