{/* This code follows the tutorial provided by Expo at
    https://docs.expo.dev/tutorial/create-your-first-app/ and
    https://docs.expo.dev/tutorial/add-navigation/ with some slight modifications. */}

import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: 'Page not found' }} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Return to the home screen
            </Link>
        </View>
        </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});