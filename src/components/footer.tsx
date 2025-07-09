import { ScrollView, StyleSheet, Text, View } from "react-native"
import Sun02d from '../assets/02d.svg';
export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
                <View style={styles.footerCard}>
                    <Text style={styles.footerCardTitle}>Seg</Text>
                    <Sun02d width={40} height={40} />
                    <Text style={styles.footerCardPreview}>19 °C</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        paddingLeft: 40,
        gap: 10
    },
    footerText: {
        fontSize: 20,
        fontWeight: "300",
        color: "#fff"
    },
    footerCard: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: 99,
        height: 129,
        backgroundColor: "rgba(255, 255, 255, 0.23)",
        borderRadius: 8,
        marginRight: 14
    },
    footerCardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff"
    },
    footerCardPreview: {
        fontSize: 24,
        fontWeight: "300",
        color: "#fff"
    },
})