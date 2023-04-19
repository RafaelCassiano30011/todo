/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    backgroundColor: "#262626",
    marginBottom: 8,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
  },

  text: {
    color: "#F2F2F2",
    fontSize: 14,
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 18,
    height: 18,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#4EA8DE",
    marginRight: 11,
  },

  buttonRemove: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    backgroundColor: "transparent",
    borderRadius: 4,
  },

  checkboxActive: {
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
  },
});
