import { View, Text, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';

type Props = {}

const Profile = (props: Props) => {
    const [name, setName] = useState("Lionel Messi");
    const [modalVisible, setModalVisible] = useState(false);
    const [newName, setNewName] = useState("");

    const changeName = () => {
        setName(newName); // Cambiar el nombre con el valor del input
        setModalVisible(false); // Cerrar el modal
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textNameStyles}>Nombre y apellido: {name}</Text>
            
            <Pressable style={styles.changeNameStyle} onPress={() => setModalVisible(true)}>
                <Text style={styles.textPressableStyle}>Cambiar nombre</Text>
            </Pressable>

            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Ingrese nuevo nombre:</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Ingrese nuevo nombre'
                        value={newName}
                        onChangeText={setNewName}
                    />
                    <Pressable style={styles.saveButton} onPress={changeName}>
                        <Text style={styles.textPressableStyle}>Guardar</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
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
        fontSize: 18,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: 'darkblue',
        padding: 10,
        borderRadius: 5,
        width: 100,
        marginBottom: 10,
        alignItems: 'center',
    },
});

export default Profile;
