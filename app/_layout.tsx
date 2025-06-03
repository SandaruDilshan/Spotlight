import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView, } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "black",
      }}>
        <Stack screenOptions={{headerShown: false}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

{/* <SafeAreaProvider>
  <SafeAreaView style={{ flex: 1 }}>
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: true, title: "Home" }} />
      <Stack.Screen name="notifications" options={{ headerShown: false, title: "Notifications" }} />
    </Stack>
  </SafeAreaView>
</SafeAreaProvider> */}