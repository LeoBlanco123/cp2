import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function MotoristaScreen(props) {
    const [motorista, setMotorista] = useState(props.route.params ? props.route.params : {});

    const voltarParaContrato = () => {
        props.navigation.navigate('Contrato');
    };

    useEffect(() => {
        if (props.route.params) {
            setMotorista(props.route.params);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>NOME</Text>
            <TextInput
                style={styles.input}
                value={motorista.nome}
            />

            <Text style={styles.label}>NUMERO</Text>
            <TextInput
                style={styles.input}
                value={motorista.numero}
            />

            <TouchableOpacity style={styles.button} onPress={voltarParaContrato}>
                <Text style={styles.buttonText}>Chamar Motorista</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 250,
        height: 40,
        marginBottom: 10,
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
