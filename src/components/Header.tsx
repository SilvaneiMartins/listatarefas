import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import logoImg from "../assets/images/logo/logo.png";

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  const tasksCounterText = tasksCounter === 1 ? "tarefa" : "tarefas";

  return (
    <View style={styles.container}>
      {/* <Image source={logoImg} /> */}
      <Text
        style={{
          color: "#000",
          fontSize: 25,
          fontWeight: "700",
          marginTop: 5,
        }}
      >Tarefas</Text>

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: "#ecddc9",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tasks: {
    alignItems: "center",
    flexDirection: "row",
  },
  tasksCounter: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  tasksCounterBold: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Inter-Bold",
  },
});
