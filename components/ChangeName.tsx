import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';

const ChangeName = () => {

  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.textInputStyle}  

        placeholder="Escribe tu nombre"
      />
      <Pressable 
        style={styles.changeNameStyle}
      >
        <Text style={styles.textPressableStyle}>Guardar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1, 
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
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
});

export default ChangeName;
