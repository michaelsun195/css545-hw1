import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world</Text>
            <Link href='/pagetwo' style={styles.button}>
                Go to the second page
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});