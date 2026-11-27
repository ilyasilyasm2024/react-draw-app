/** @format */

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLanguage } from "../hooks/useLanguage";

interface Props {
  onOpenPicker: () => void;
  onClear: () => void;
  onUndo?: () => void;
  onToggleFav?: () => void;
  onSave?: () => void;
  onShare?: () => void;
  isFav?: boolean;
  currentColor: string;
}

export function ActionButtons({
  onOpenPicker,
  onClear,
  onUndo,
  onToggleFav,
  onSave,
  onShare,
  isFav,
  currentColor,
}: Props) {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      {onToggleFav && (
        <TouchableOpacity onPress={onToggleFav} style={styles.btn}>
          <MaterialCommunityIcons
            name={isFav ? "star" : "star-outline"}
            size={22}
            color={isFav ? "#FFD700" : "#888"}
          />
        </TouchableOpacity>
      )}
      {onSave && (
        <TouchableOpacity onPress={onSave} style={styles.btn}>
          <MaterialCommunityIcons
            name="content-save-outline"
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      )}
      {onShare && (
        <TouchableOpacity onPress={onShare} style={styles.btn}>
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onOpenPicker} style={styles.btn}>
        <View style={[styles.dot, { backgroundColor: currentColor }]} />
      </TouchableOpacity>
      {onUndo && (
        <TouchableOpacity onPress={onUndo} style={styles.btn}>
          <MaterialCommunityIcons name="undo-variant" size={22} color="#666" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onClear} style={styles.btn}>
        <MaterialCommunityIcons name="eraser" size={22} color="#666" />
        <Text style={styles.txt}>{t("clear")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 6,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#eee",
  },
  txt: { fontSize: 12, fontWeight: "600", color: "#444", marginLeft: 4 },
});
