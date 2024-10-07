{/* This code follows the tutorial provided by Expo at
    https://docs.expo.dev/tutorial/create-your-first-app/ and
    https://docs.expo.dev/tutorial/add-navigation/ with some slight modifications. */}

import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello world</Text>
            <Text style={styles.text}></Text>
            <Link href='/pagetwo' style={styles.button} asChild>
                <Pressable>
                    <Text style={styles.realbutton}>  Go to the second page  </Text>
                </Pressable>
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
        margin: 20,
    },
    realbutton: {
        backgroundColor: '#04aa6d',
        color: '#fff',
    },
});