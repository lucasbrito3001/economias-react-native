import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

// Images
import HelpingStonks from '../assets/images/helping-stonks.svg'

// Components
import GeneralButton from '../components/shared/Button'

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
                    <GeneralButton press={openLoginScreen} text="ENTRAR" bgColor={loginColor}/>
                </View>
                <View style={{ marginTop: 10 }}>
                    <GeneralButton press={openRegisterScreen} text="CRIAR CONTA" bgColor={registerColor}/>
                </View>
            </View>
        </View>
    );
}

const registerColor = "#222"
const loginColor = "#13B855"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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
        fontSize: 24,
        fontWeight: "bold",
    },
    sempreVerdeText: {
        color: '#13B855'
    },
    stonksImage: {
        margin: 'auto'
    },
    registerButton: {
        backgroundColor: registerColor,
        text: {
            color: "#fff"
        }
    }
});
