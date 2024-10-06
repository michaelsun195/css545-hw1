{/* This code follows the tutorial provided by Expo at
    https://docs.expo.dev/tutorial/create-your-first-app/ and
    https://docs.expo.dev/tutorial/add-navigation/ with some slight modifications. */}

import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the second page!</Text>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});