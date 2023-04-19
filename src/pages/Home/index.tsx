/** @format */

import { View, FlatList, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Form from "../../components/Form";
import uuid from "react-native-uuid";
import Task from "../../components/Task";
import TaskInfo from "../../components/TaskInfo";
import Empty from "../../components/Empty";

interface Task {
  text: string;
  done: boolean;
  id: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: string) => {
    setTasks((prev) => [
      ...prev,
      {
        done: false,
        text: task,
        id: String(uuid.v1()),
      },
    ]);

    return true;
  };

  const updateTaskDone = (id: string) => {
    const newTasks = tasks.map((item) => (item.id === id ? { ...item, done: !item.done } : item));

    setTasks(newTasks);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const tasksDone = tasks.filter((item) => item.done);

  return (
    <View style={styles.container}>
      <Form addTask={handleAddTask} />
      <View style={styles.countInfo}>
        <TaskInfo text="Criadas" color="#4EA8DE" count={tasks.length} />
        <TaskInfo text="Concluídas" color="#8284FA" count={tasksDone.length} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task removeTask={() => removeTask(item.id)} updateTaskDone={() => updateTaskDone(item.id)} {...item} />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}
// AiOutlinePlusCircle
