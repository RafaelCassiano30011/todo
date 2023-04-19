/** @format */
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

interface FormProps {
  addTask: (task: string) => boolean;
}

export default function Form({ addTask }: FormProps) {
  const [taskName, setTaskName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTaskName}
        style={isFocus ? { ...styles.input, borderWidth: 1, borderColor: "#5E60CE" } : styles.input}
        value={taskName}
        placeholderTextColor={"#808080"}
        placeholder="Adicione uma nova tarefa"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        focusable={isFocus}
      />
      <TouchableHighlight
        underlayColor="#4EA8DE"
        activeOpacity={1}
        disabled={!taskName}
        onPress={() => {
          const sucess = addTask(taskName);
          if (sucess) {
            setTaskName("");
            setIsFocus(false);
          }
        }}
        style={styles.button}
      >
        <Icon name="pluscircleo" size={16} color="white"></Icon>
      </TouchableHighlight>
    </View>
  );
}
