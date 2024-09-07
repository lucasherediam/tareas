import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

type Props = {}

const Profile = (props: Props) => {

    const [name, setName] = useState("Lionel Messi")

    const changeName = () => {
        setName(prev => prev)
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textNameStyles}>Nombre y apellido: {name}</Text>
            <Link href={"/changeName"}>
                <Pressable 
                style={styles.changeNameStyle}>
                    <Text style={styles.textPressableStyle}>Cambiar nombre</Text>
                </Pressable>
            </Link>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
      justifyContent: 'center', 
      alignItems: 'center',
    },
    changeNameStyle: {
      backgroundColor: 'darkblue',
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
    textNameStyles: {
      textAlign: 'center',
      margin: 20,
    },
});

export default Profile
