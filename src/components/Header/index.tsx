/** @format */

import { View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/Logo.png")} />
    </View>
  );
}
