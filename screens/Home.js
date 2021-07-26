import React from "react"
import { StyleSheet, Text, View, Pressable, Alert, Button } from 'react-native';

export default function Home ({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Game")}
            >
                <Text style={styles.buttonText}>Start Game</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Rules")}
            >
                <Text style={styles.buttonText}>Rules</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Credits")}
            >
                <Text style={styles.buttonText}>Credits</Text>
            </Pressable>
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
        margin: 20
    },
    buttonText: {
        color: 'white',
    }
  
  });
  