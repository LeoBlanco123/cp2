import React, { useContext } from "react";
import { FlatList, View, ScrollView } from "react-native";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import MotoristaContext from "../context/MotoristaContext";

export default function TelaLista({ navigation }) {
    const { DadosMotorista } = useContext(MotoristaContext);

    function irParaMotorista(item) {
        navigation.navigate("Motorista", item);
    }

    function irParaIntegrantes() {
        navigation.navigate("Integrantes");
    }

    function getMotorista({ item }) {
        return (
            <ListItem
                onPress={() => irParaMotorista(item)}
                bottomDivider
            >
                <Avatar source={{ uri: item.fotoPerfil }} rounded size={60} />
                <ListItem.Content>
                    <ListItem.Title>{item.nome}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right style={{ flexDirection: 'row' }}>
                    <Button
                        icon={<Icon name='add' color='blue' />}
                        type="clear"
                        onPress={() => irParaMotorista(item)} />
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DadosMotorista}
                renderItem={getMotorista}
                ListFooterComponent={
                    <View style={{ marginVertical: 20, alignItems: 'center' }}>
                        <Button onPress={irParaIntegrantes} title="Integrantes" buttonStyle={{ backgroundColor: 'purple', width: 200 }} />
                    </View>
                }
            />
        </View>
    );
}
