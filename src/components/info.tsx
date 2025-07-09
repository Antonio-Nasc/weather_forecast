import { StyleSheet, Text, View } from "react-native"
import Sun from '../assets/01d.svg'

export const Info = () => {
    return (
        <View style={styles.info}>
            <Text style={styles.infoTextUser}>Bom dia, Antônio</Text>
            <Sun width={200} height={200} />
            <Text style={styles.infoTextClimate}>24 °C</Text>
            <Text style={styles.infoTextMaxMin}>Max.: 31° Min.: 25°</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        paddingVertical: 70,
        alignItems: 'center',
        gap: 10,
    },
    infoTextUser: {
        fontSize: 32,
        fontWeight: '300',
        color: "#fff"
    },
    infoTextClimate: {
        fontSize: 100,
        fontWeight: "300",
        color: "#fff"
    },
    infoTextMaxMin: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff"
    },
})