import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Counter = (props: Props) => {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(prev => prev + 1)
    }

    const decrease = () => {
        setCounter(prev => prev - 1)
    }

    return (
        <View>
            <Text style={styles.textCounterStyles}>Contador: {counter}</Text>
            <Pressable 
              onPress={increase}
              style={styles.increaseStyle}>
                <Text style={styles.textPressableStyle}>Incrementar</Text>
            </Pressable>
            <Pressable onPress={decrease}
              style={styles.decreaseStyle}>
                <Text style={styles.textPressableStyle}>Decrementar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    increaseStyle: {
      backgroundColor: 'green',
      height: 50,
      width: 150,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    decreaseStyle: {
        backgroundColor: 'red',
        height: 50,
        width: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
    textPressableStyle: {
      textAlign: 'center',
      color: 'white', 
    },
    textCounterStyles: {
      textAlign: 'center',
      margin: 20,
    },
  });

export default Counter