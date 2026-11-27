/** @format */

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function RewardedUndoButton({ onReward }: { onReward: () => void }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onReward}>
      <MaterialCommunityIcons name="gift" size={20} color="#FFF" />
      <Text style={styles.txt}>+5 Tries</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF9800",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  txt: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 6,
  },
});
