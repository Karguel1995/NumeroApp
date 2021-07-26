import React from "react"
import { StyleSheet, Text, View, Pressable, Alert, Button } from 'react-native';

export default function Credits () {
    return (
        <View style={styles.container}>
            <Text>Written and performed by</Text>
            <Text style={styles.credits}>Filip Pawelec</Text>
            <Text>Karguel1995@gmail.com</Text>
            <Text>https://github.com/Karguel1995</Text>
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
    credits: {
        fontSize: 32
    }
  
  });
  