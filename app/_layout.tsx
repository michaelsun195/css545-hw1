{/* This code follows the tutorial provided by Expo at
    https://docs.expo.dev/tutorial/create-your-first-app/ and
    https://docs.expo.dev/tutorial/add-navigation/ with some slight modifications. */}

import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }}/>
            <Stack.Screen name="pagetwo" options={{ title: 'Page 2' }}/>
        </Stack>
    );
}
