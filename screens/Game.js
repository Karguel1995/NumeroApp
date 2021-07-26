import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Alert, Button } from 'react-native';
import { useState } from 'react';

const numbers = [
  {
    id: 1,
    number: 1,
  },
  {
    id: 2,
    number: 2,
  },
  {
    id: 3,
    number: 3,
  },
  {
    id: 4,
    number: 4,
  },
  {
    id: 5,
    number: 5,
  },
  {
    id: 6,
    number: 6,
  },
  {
    id: 7,
    number: 7,
  },
  {
    id: 8,
    number: 8,
  },
  {
    id: 9,
    number: 9,
  },
];


export default function Game({navigation}) {
  const [firstNumber , setFirstNumber] = useState('')
  const [secondNumber , setSecondNumber] = useState('')
  const [thirdNumber , setThirdNumber] = useState('')
  const [previousCheck, setPreviousCheck] = useState('')

  const draw = () => (Math.floor(Math.random() * 9 + 1))
  
  const [x, setX] = useState(draw())
  const [y, setY] = useState(draw())
  y === x ? setY(draw()) : null
  const [z, setZ] = useState(draw())
  z === y ? setZ(draw()) : null
  z === x ? setZ(draw()) : null

  const [counter, setCounter] = useState(0)
  const [correctPosition, setCorrectPosition] = useState(0)
  const [correctNumber, setCorrectNumber] = useState(0)

  useEffect(() => {
    correctPosition === 3 ? showWinAlert() : null
  }, [correctPosition])

  useEffect(() => {
    thirdNumber ? checkResult() : null
  }, [thirdNumber])

  const checkResult = () => {
    setCorrectPosition(0)
    setCorrectNumber(0)
    setCounter(prevCounter => prevCounter + 1)

    x == firstNumber
    ? setCorrectPosition(prevPosition => prevPosition +1)
      : x === secondNumber ? setCorrectNumber(prevState => prevState +1)
        : x === thirdNumber ? setCorrectNumber(prevState => prevState +1)
          : null
    y == secondNumber
      ? setCorrectPosition(prevPosition => prevPosition +1)
        : y === firstNumber ? setCorrectNumber(prevState => prevState +1)
          : y === thirdNumber ? setCorrectNumber(prevState => prevState +1)
            : null
    z == thirdNumber
      ? setCorrectPosition(prevPosition => prevPosition +1)
        : z === firstNumber ? setCorrectNumber(prevState => prevState +1)
          : z === secondNumber ? setCorrectNumber(prevState => prevState +1)
            : null
    
    setPreviousCheck(firstNumber.toString() + secondNumber.toString() + thirdNumber.toString())

    setFirstNumber('')
    setSecondNumber('')
    setThirdNumber('')
  }

  const showWinAlert = () => {
    console.log(counter)
    Alert.alert(
      `You won!
Your attempts: ${counter}`,
      "Do you want to play again?",
      [
        {
          text: "Quit",
          onPress: () => navigation.navigate("Home"),
          style: "cancel",
        },
        {
          text: "Play again",
          onPress: () => {
            setX(draw());
            setY(draw());
            setZ(draw());
            setPreviousCheck('');
            setCorrectNumber('');
            setCorrectPosition('');
            setCounter(0);
          }
         },
      ],
    )
  }

  const displayNumbers = () => {
    return numbers.map( (nr) => {
      return( 
        <Pressable 
        key={nr.id}
        style={styles.number}
        onPress={() => {firstNumber ? secondNumber ? setThirdNumber(nr.number) : setSecondNumber(nr.number) : setFirstNumber(nr.number)}}
        >
          <Text style={styles.keyboardNumber}>{nr.number}</Text>
        </Pressable>
      )
    })
  } 

  // const randomNumberRoll = () => {
  //   y === x ? setY(draw()) : null 
  //   z === y ? setZ(draw()) : null 
  //   z === x ? setZ(draw()) : null 
  //   return x.toString() + y.toString() + z.toString()
  // }

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.screen}>
          <View style={styles.check}>
            <Text style={styles.checkNumber}>{firstNumber}</Text>
            <Text style={styles.checkNumber}>{secondNumber}</Text>
            <Text style={styles.checkNumber}>{thirdNumber}</Text>
          </View>
          <Text style={styles.counter}>Attempts: {counter}</Text>
          <Text>Previous check: {previousCheck}</Text>
          <Text>Correct number and correct position: {correctPosition}</Text>
          <Text>Correct number, but wrong position: {correctNumber}</Text>
        </View>
        <View style={styles.numbers}>
          {displayNumbers()}
          </View>
      </View>
      {/* <Text>Open up App.js to start working on your app!</Text>*/}
      {/* <StatusBar style="auto" /> */}
    </View>
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
    height: '90%',
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
    width: 74,
    height: 74,
    margin: 4,
    backgroundColor: '#595959',
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
