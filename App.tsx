import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createRestAPIClient } from "masto";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    try {
      const client = createRestAPIClient({
        url: `https://mastodon.social/api/v1`,
        accessToken: "",
      });

      client.v1.accounts.verifyCredentials().then(console.log).catch(console.log);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
