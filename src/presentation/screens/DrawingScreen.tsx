/** @format */

import React, { useState, useRef, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute, RouteProp } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SvgCanvas } from "../components/SvgCanvas";
import { ColorPickerModal } from "../components/ColorPickerModal";
import { ActionButtons } from "../components/ActionButtons";
import { useDrawingState } from "../hooks/useDrawingState";
import { useLanguage } from "../hooks/useLanguage";
import { useAudio } from "../hooks/useAudio";
import { useFavorites } from "../hooks/useFavorites";
import { useArtworkActions } from "../hooks/useArtworkActions";
import { TEMPLATES } from "../../assets/svgs/Templates";
import { RootStackParamList } from "../navigation/types";

export function DrawingScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "Drawing">>();
  const tid = route.params.templateId;
  const tInfo = TEMPLATES.find((i) => i.id === tid) || TEMPLATES[0];
  const { language } = useLanguage();
  const { play } = useAudio();
  const { favs, toggleFav } = useFavorites();
  const initial = useMemo(
    () =>
      tInfo.paths.reduce(
        (acc, p) => ({ ...acc, [p.id]: { ...p, color: "#FFFFFF" } }),
        {},
      ),
    [tInfo],
  );
  const { shapes, selectedColor, setSelectedColor, colorShape, clearAll } =
    useDrawingState(tid, initial);
  const [modal, setModal] = useState(false);
  const artRef = useRef<View | null>(null);
  const { saveArtwork, shareArtwork } = useArtworkActions(artRef);

  const label = `${tInfo.articles[language]} ${tInfo.names[language]} / ${tInfo.pluralArticles[language]} ${tInfo.plurals[language]}`;

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>{label}</Text>
        <TouchableOpacity
          style={styles.mic}
          onPress={() => play(language, tid)}
        >
          <MaterialCommunityIcons
            name="volume-high"
            size={28}
            color="#4A90E2"
          />
        </TouchableOpacity>
      </View>
      <View ref={artRef} style={styles.area} collapsable={false}>
        <SvgCanvas shapes={shapes} onPathClick={colorShape} />
      </View>
      <View
        style={[
          styles.bottom,
          { paddingBottom: useSafeAreaInsets().bottom || 10 },
        ]}
      >
        <ActionButtons
          onOpenPicker={() => setModal(true)}
          onToggleFav={() => toggleFav(tid)}
          onSave={saveArtwork}
          onShare={shareArtwork}
          onClear={clearAll}
          isFav={favs.includes(tid)}
          currentColor={selectedColor}
        />
      </View>
      <ColorPickerModal
        isVisible={modal}
        onClose={() => setModal(false)}
        onSelect={setSelectedColor}
        selectedColor={selectedColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  head: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#111" },
  mic: { marginLeft: 8 },
  area: {
    flex: 0.88,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  bottom: {
    flex: 0.1,
    borderTopWidth: 1,
    borderColor: "#EEE",
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
});
