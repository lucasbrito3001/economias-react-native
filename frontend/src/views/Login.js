import { useState } from "react";
import { StyleSheet, Text, View, ToastAndroid, ScrollView, TextInput, Button } from "react-native";

import { Dimensions } from "react-native";

import { login } from "../services/user.service"
import { storeToken, storeId } from "../services/util.service"
import GeneralButton from "../components/shared/Button";
import LabelInput from "../components/shared/LabelInput"

var width = Dimensions.get('window').width;

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function openRegisterScreen() {
        navigation.navigate('Register')
    }

    function openHomeScreen() {
        navigation.navigate('Dashboard')
    }

    async function loginUser() {
        const result = await login({ email, password })

        if (!result.status) return ToastAndroid.showWithGravityAndOffset(
            result.error || 'Erro ao logar',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        )

        await storeToken(result.token)
        await storeId(result.id)
        return openHomeScreen()
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    <LabelInput
                        label="Nome"
                        value={password}
                        setValue={setPassword}
                        placeholder="Insira seu nome (pode ser só o primeiro)"
                        isSecret={true}
                    />
                </View>
                <View style={{ marginTop: 24 }}>
                    <GeneralButton
                        press={loginUser}
                        text="ENTRAR"
                        buttonFooterText="Novo no app? Cadastre-se"
                        bgColor={loginColor}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const loginColor = "#13B855"

const styles = StyleSheet.create({
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
        fontSize: 16,
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
        fontSize: 24,
        textAlign: 'center',
    }
})
