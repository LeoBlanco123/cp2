import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ContratarMotorista(props) {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [destino, setDestino] = useState('');

    const contratarMotorista = () => {
        if (!nome || !endereco || !destino) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Motorista contratado! Aguarde no endereço de partida.');
        props.navigation.navigate('Home');
    };

    useEffect(() => {
        alert('Bem-vindo! Por favor, preencha os campos para contratar um motorista.');
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setNome(text)}
                value={nome}
            />
            <Text style={styles.label}>Endereço de partida:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setEndereco(text)}
                value={endereco}
            />
            <Text style={styles.label}>Destino:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setDestino(text)}
                value={destino}
            />
            <TouchableOpacity style={styles.button} onPress={contratarMotorista}>
                <Text style={styles.buttonText}>Contratar Motorista</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 8,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
