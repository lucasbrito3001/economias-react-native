import { Button, StyleSheet, Text, View } from "react-native";

export default function BalanceCard({ navigation, cardText, cardValue }) {
    return (
        <View style={ styles.card }>
            <View style={ styles.card.content }>
                <View style={ styles.card.content.values }>
                    <Text style={ styles.card.content.texts }>{ cardText }</Text>
                    <Text style={ styles.card.content.texts }>R$ { cardValue.toFixed(2) }</Text>
                </View>
                <View>
                    <Text> &gt; </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 8,
        width: '100%',
        content: {
            // elevation: 4,
            // shadowColor: '#dfdfdf',
            // borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 24,
            width: '100%',
            borderBottomWidth: 0.5,
            borderBottomColor: '#ddd',
            values: {
                width: '90%'
            },
            seeMore: {
                width: '10%'
            },  
            texts: {
                fontSize: 20
            }
        }
    }
})