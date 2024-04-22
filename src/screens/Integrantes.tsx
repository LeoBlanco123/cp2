import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

export default function IntegrantesPage({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Integrantes</Text>

            <View style={styles.memberContainer}>
                <Text style={styles.name}>Leonardo Blanco</Text>
                <Text style={styles.id}>RM99119</Text>
                <Image style={styles.image} source={require('../../assets/Leonardo.png')} />
            </View>

            <View style={styles.memberContainer}>
                <Text style={styles.name}>Paulo Henrique</Text>
                <Text style={styles.id}>RM98082</Text>
                <Image style={styles.image} source={require('../../assets/Paulo.jpg')} />
            </View>

            <View style={styles.memberContainer}>
                <Text style={styles.name}>Gustavo Moreira</Text>
                <Text style={styles.id}>RM97999</Text>
                <Image style={styles.image} source={require('../../assets/Gustavo.jpg')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    memberContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    id: {
        fontSize: 16,
        color: '#666',
    },
});
