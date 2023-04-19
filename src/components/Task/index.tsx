/** @format */

import { View, Text, TouchableHighlight, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

interface TaskProps {
  text: string;
  done: boolean;
  updateTaskDone: () => void;
  removeTask: () => void;
}

export default function Task({ text, done, updateTaskDone, removeTask }: TaskProps) {
  const [checked, setChecked] = useState(done);
  const [pressed, setPressed] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    updateTaskDone();
  };

  const handleDelete = () => {
    removeTask();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleChecked}
      style={{ ...styles.container, ...(checked ? { borderColor: "#262626" } : {}) }}
    >
      <View style={{ ...styles.checkbox, ...(checked ? styles.checkboxActive : {}) }}>
        <>{checked && <Image source={require("../../../assets/checked.png")} />}</>
      </View>
      <Text style={{ ...styles.text, ...(checked ? { color: "#808080", textDecorationLine: "line-through" } : {}) }}>{text}</Text>

      <TouchableHighlight
        style={[styles.buttonRemove]}
        underlayColor={"#333333"}
        onPressIn={(e) => setPressed(true)}
        onPressOut={(e) => setPressed(false)}
        onPress={handleDelete}
      >
        {pressed ? (
          <Image source={require("../../../assets/trash-red.png")} />
        ) : (
          <Image source={require("../../../assets/trash.png")} />
        )}
      </TouchableHighlight>
    </TouchableOpacity>
  );
}
