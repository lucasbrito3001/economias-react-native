import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions, ToastAndroid } from "react-native";
import { StatusBar } from "expo-status-bar"

var width = Dimensions.get('window').width;

import { getId } from "../services/util.service"
import { getUser } from "../services/user.service"

// Componentes
import BalanceCard from "../components/shared/BalanceCard";

export default function Home({ navigation }) {
    const [userInfos, setUserInfos] = useState({})
    
    useEffect(() => {
        const getUserInfos = async () => {
            const result = await getUser(await getId())

            if(!result.status) ToastAndroid.showWithGravityAndOffset(
                result.error || 'Erro ao obter informações do usuário',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            )

            setUserInfos(result.content)
        }

        getUserInfos().catch('error')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header.texts}>Olá, {userInfos.name}</Text>
                <Text style={[styles.header.texts, styles.header.texts.balance]}> 
                    Saldo atual {"\n"}
                    <Text style={{fontWeight: "bold"}}>R$ 1000.05</Text>
                </Text>
            </View>
            <View style={styles.body}>
                <BalanceCard cardText="Entradas" cardValue={1250.10}></BalanceCard>
                <BalanceCard cardText="Saídas" cardValue={250.05}></BalanceCard>
            </View>
            <StatusBar backgroundColor={styles.mainGreen} translucent={false}></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    mainGreen: '#13B855',
    container: {
        flex: 1,
        justifyContent: "space-between",
        justifyItems: "center"
    },
    header: {
        justifyContent: "center",
        justifyItems: "center",
        width,
        height: '20%',
        backgroundColor: '#13B855',
        padding: 32,
        texts: {
            color: '#fff',
            fontSize: 20,
            balance: {
                marginTop: 12
            }
        }
    },
    body: {
        width,
        height: '80%',
        backgroundColor: '#fff',
        texts: {
            color: '#000',
            fontSize: 20,
            balance: {
                marginTop: 12
            }
        }
    },
});
