import { useState, useEffect } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Button } from "react-native";

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;

// Components
import { LabelInput } from "../components/shared/index"

export default function Register({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isFormContentOk, setIsFormContentOk] = useState(true)

    function openLoginScreen() {
        navigation.navigate('Login')
    }

    useEffect(() => {
        setIsFormContentOk(checkFormContent())
    }, [name, email, password, confirmPassword])

    function checkFormContent() {
        const isNameOK = typeof name === 'string' && name.length > 0
        const isEmailOk = typeof email === 'string' && email.length > 0 && email.includes('@') && email.includes('.')
        const isPasswordOk = typeof password === 'string' && password.length > 0
        const isConfirmPasswordOk = typeof confirmPassword === 'string' && confirmPassword.length > 0
        const isEqualsPasswords = password === confirmPassword

        return !(isNameOK && isEmailOk && isPasswordOk && isConfirmPasswordOk && isEqualsPasswords)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.sempreVerdeSubtitle}>
                        Olá
                        <Text style={styles.nameSubtitle}>{name ? ' ' + name : ''}</Text>
                        , será um prazer ajudá-lo a deixar suas finanças
                    </Text>
                    <Text style={styles.sempreVerdeTitle}>SempreVerde</Text>
                </View>
                <View style={styles.form}>
                    <LabelInput
                        label="Nome"
                        value={name}
                        setValue={setName}
                        placeholder="Insira seu nome (pode ser só o primeiro)"
                        isSecret={false}
                    />
                    <LabelInput
                        label="Email"
                        value={email}
                        setValue={setEmail}
                        placeholder="Insira seu email"
                        isSecret={false}
                    />
                    <LabelInput
                        label="Senha"
                        value={password}
                        setValue={setPassword}
                        placeholder="Insira sua senha"
                        isSecret={true}
                    />
                    <LabelInput
                        label="Confirmar senha"
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                        placeholder="Insira a mesma senha digitada acima"
                        isSecret={true}
                    />
                    <View style={{ marginTop: 24, alignSelf: 'stretch' }}>
                        <Button disabled={isFormContentOk} title="Cadastrar" color={styles.loginColor} />
                    </View>
                    <View>
                        <Text onPress={openLoginScreen} style={styles.registerLink}>Já tem uma conta? Faça login</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    loginColor: "#13B855",
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    sempreVerdeSubtitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    nameSubtitle: {
        color: '#13B855'
    }
})
