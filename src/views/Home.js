import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// Images
import HelpingStonks from '../assets/images/helping-stonks.svg'

export default function Home({ navigation }) {
    function openLoginScreen() {
        navigation.navigate('Login')
    }

    function openRegisterScreen() {
        navigation.navigate('Register')
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.viewText }>
                <HelpingStonks width={280} height={280} style={ styles.stonksImage }/>
                <Text style={styles.title}>
                    Bem-vindo ao <Text style={ styles.sempreVerdeText }>SempreVerde</Text>, o app que ajuda a controlar seu dinheiro!
                </Text>
            </View>

            <View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        onPress={openLoginScreen}
                        title="Entrar"
                        color={styles.loginColor}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        onPress={openRegisterScreen}
                        title="Criar conta"
                        color={styles.registerColor}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginColor: "#13B855",
    registerColor: "#222",
    container: {
        flex: 1,
        justifyContent: "space-between",
        justifyItems: "center"
    },
    viewText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    title: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
    },
    sempreVerdeText: {
        color: '#13B855'
    },
    stonksImage: {
        margin: 'auto'
    }
});
