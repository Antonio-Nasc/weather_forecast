import { BellRingingIcon, CaretDownIcon, MapPinIcon } from "phosphor-react-native"
import { Text, View, StyleSheet } from "react-native"

export const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <MapPinIcon color='#fff' size={25} />
                <Text style={styles.headerLeftText}>Aracaju</Text>
                <CaretDownIcon color='#fff' size={25} />
            </View>
            <BellRingingIcon color='#fff' size={25} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 10
    },
    headerLeftText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 600
    },
})