/** @format */

import React, { useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActionButtons } from "../components/ActionButtons";
import { ColorPickerModal } from "../components/ColorPickerModal";
import { RewardedUndoButton } from "../components/RewardedUndoButton";
import { useArtworkActions } from "../hooks/useArtworkActions";
import { useFreeDraw } from "../hooks/useFreeDraw";

export function FreeDrawScreen() {
  const [color, setColor] = useState("#000000");
  const [modal, setModal] = useState(false);
  const artRef = useRef<View | null>(null);
  const { paths, current, undo, clear, panHandlers, undoBalance, addUndos } =
    useFreeDraw(color);
  const { saveArtwork, shareArtwork } = useArtworkActions(artRef);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.balBox}>
          <MaterialCommunityIcons name="undo-variant" size={20} color="#666" />
          <Text style={styles.balText}>{undoBalance} Left</Text>
        </View>
        <RewardedUndoButton onReward={() => addUndos(5)} />
      </View>

      <View
        ref={artRef}
        style={styles.canvas}
        {...panHandlers}
        collapsable={false}
      >
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          <Svg height="100%" width="100%">
            {paths.map((p, i) => (
              <Path
                key={i}
                d={p.d}
                stroke={p.color}
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            {current ? (
              <Path
                d={current}
                stroke={color}
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : null}
          </Svg>
        </View>
      </View>
      <View
        style={[styles.ui, { paddingBottom: useSafeAreaInsets().bottom || 20 }]}
      >
        <ActionButtons
          onOpenPicker={() => setModal(true)}
          onSave={saveArtwork}
          onShare={shareArtwork}
          onClear={clear}
          onUndo={undo}
          currentColor={color}
        />
      </View>
      <ColorPickerModal
        isVisible={modal}
        onClose={() => setModal(false)}
        onSelect={setColor}
        selectedColor={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FAFAFA",
    borderBottomWidth: 1,
    borderColor: "#EEE",
  },
  balBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  balText: { fontSize: 16, fontWeight: "bold", color: "#333", marginLeft: 6 },
  canvas: { flex: 1, backgroundColor: "#fff" },
  ui: {
    flex: 0.1,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
