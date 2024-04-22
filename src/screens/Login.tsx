import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, Button, TextInput, StyleSheet } from 'react-native';

export default ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [botaoHabilitado, setBotaoHabilitado] = useState(false);

    useEffect(() => {
        if (nome.trim() !== '' && email.trim() !== '' && numero !== '') {
            setBotaoHabilitado(true);
        } else {
            setBotaoHabilitado(false);
        }
    }, [nome, email]);

    function irParaHome() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>SUAS INFORMAÇÕES</Text>
                    </View>

                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome'
                        value={nome}
                        onChangeText={text => setNome(text)}
                    />
                    <Text style={styles.label}>Numero:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu numero'
                        value={numero}
                        onChangeText={text => setNumero(text)}
                    />
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title='ENTRAR'
                            color={'#993399'}
                            onPress={irParaHome}
                            disabled={!botaoHabilitado}
                        />
                    </View>
                    
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    innerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
    },
});
