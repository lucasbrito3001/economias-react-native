import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GeneralButton({ text, bgColor, buttonFooterText, press }) {
    return (
        <>
            <TouchableOpacity onPress={press} style={{ ...styles.button, backgroundColor: bgColor }}>
                <Text style={styles.button.text}>{text}</Text>
            </TouchableOpacity>
            { buttonFooterText &&
                <Text style={{ ...styles.button.footerText, color: bgColor }}>{buttonFooterText}</Text>
            }
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        borderRadius: 8,
        text: {
            textAlign: 'center',
            fontSize: 16,
            color: '#fff'
        },
        footerText: {
            width: '100%',
            textAlign: 'center',
            marginTop: 16,
            fontSize: 16
        }
    }
})