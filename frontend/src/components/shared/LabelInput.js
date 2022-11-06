import { StyleSheet, Text, TextInput, View } from "react-native";

import { Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export function LabelInput({ label, value, setValue, placeholder, isSecret }) {
    return (
        <View style={styles.inputView}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> { label } </Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={text => setValue(text)}
                placeholder={placeholder}
                secureTextEntry={isSecret}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        marginTop: 16
    },
    input: {
        width: width - 24,
        margin: 'auto',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        fontSize: 16
    }
})