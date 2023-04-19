/** @format */

import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Clipboard.png")} />
      <View>
        <Text style={{ ...styles.text, fontWeight: "700" }}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
