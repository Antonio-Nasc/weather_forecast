import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { Header } from '../../components/header';
import { Info } from '../../components/info';

export function Home() {
    return (
        <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]} style={styles.container}>
            <View style={styles.content}>
                <Header />
                <Info />
            </View>
            
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 35,
        paddingTop: 40,
        alignItems: 'center'
    },
});
