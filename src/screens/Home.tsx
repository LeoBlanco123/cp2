import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { ListItem, Avatar, Button, Icon} from "@rneui/base";
import MotoristaContext from "../context/MotoristaContext";

export default function TelaLista({ navigation }) {
    const { DadosMotorista } = useContext(MotoristaContext);

    function getMotorista({ item }) {
        return (
            <ListItem
                onPress={() => navigation.navigate("Motorista", item)}
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
                        onPress={() => navigation.navigate("Motorista", item)} />
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                data={DadosMotorista}
                renderItem={getMotorista}
            />
        </View>
    );
}
