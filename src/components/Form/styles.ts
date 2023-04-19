/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    transform: [{ translateY: -27 }],
    marginBottom: 1,
  },
  input: {
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    flex: 1,
    marginRight: 4,
    height: 54,
    paddingLeft: 16,
    color: "#F2F2F2",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
});
