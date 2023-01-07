import { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput, Button } from "react-native";

import { Dimensions } from "react-native";

import { createUser } from "../services/user.service"

var width = Dimensions.get('window').width;

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function openRegisterScreen() {
        navigation.navigate('Register')
    }

    function loginUser() {

    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.sempreVerdeSubtitle}>É hora de deixar suas finanças</Text>
                <Text style={styles.sempreVerdeTitle}>SempreVerde</Text>
                <View style={styles.inputView}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder="Insira seu email"
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        placeholder="Insira sua senha"
                    />
                </View>
                <View style={{ marginTop: 24 }}>
                    <Button onPress={loginUser} title="Entrar" color={styles.loginColor} />
                </View>
                <View>
                    <Text onPress={openRegisterScreen} style={styles.registerLink}>Novo no app? Cadastre-se</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    loginColor: "#13B855",
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    inputView: {
        marginTop: 16
    },
    input: {
        width: width - 48,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        fontSize: 16
    },
    registerLink: {
        textAlign: 'center',
        marginTop: 16,
        color: '#13B855',
    },
    sempreVerdeTitle: {
        fontSize: 36,
        fontWeight: "bold",
        color: '#13B855',
        textAlign: 'center',
        marginBottom: 24
    },
    sempreVerdeSubtitle: {
        fontSize: 20,
        textAlign: 'center',
    }
})
