/** @format */

import Header from "./src/components/Header";
import Home from "./src/pages/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native/";

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" translucent />
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#1A1A1A",
    height: "100%",
    width:"100%"
  },
});
