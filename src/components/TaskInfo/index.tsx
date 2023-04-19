/** @format */

import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

interface TaskInfoProps {
  color: string;
  count: number;
  text: string;
}

export default function TaskInfo({ color, count, text }: TaskInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color }}>{text}</Text>
      <View style={styles.count}>
        <Text style={{ ...styles.text, color: "#fff" }}>{count}</Text>
      </View>
    </View>
  );
}
