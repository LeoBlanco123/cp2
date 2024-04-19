import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MotoristaProvider } from './src/context/MotoristaContext';
import Home from './src/screens/Home';
import Motorista from './src/screens/Motorista';
import Contrato from './src/screens/Contrato';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <MotoristaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'purple'
                        },
                        headerTintColor: 'white'
                    }}
                >
                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            title: 'TELA MOTORISTAS'
                        }}
                    />
                    <Stack.Screen
                        name='Motorista'
                        component={Motorista}
                        options={{
                            title: 'TELA MOTORISTA'
                        }}
                    />
                    <Stack.Screen
                        name='Contrato'
                        component={Contrato}
                        options={{
                            title: 'TELA CONTRATO'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </MotoristaProvider>
    );
}
