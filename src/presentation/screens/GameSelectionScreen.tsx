/** @format */

import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TEMPLATES, CATEGORIES } from "../../assets/svgs/Templates";

import { RootStackParamList } from "../navigation/types";
import { useLanguage } from "../hooks/useLanguage";

const CAT_ICONS: any = {
  All: "apps",
  Fruits: "apple",
  Vegetables: "carrot",
  Animals: "cat",
  Numbers: "numeric",
  Shapes: "shape",
  School: "school",
  House: "home",
  Plants: "flower",
  Kitchen: "silverware-fork-knife",
  Jobs: "briefcase",
};

export function GameSelectionScreen() {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState<string[]>([]);
  const [activeCat, setActiveCat] = useState<string>("All");

  const categories = ["All", ...CATEGORIES];

  const filteredTemplates = useMemo(() => {
    if (activeCat === "All") return TEMPLATES;
    return TEMPLATES.filter((t) => t.category === activeCat);
  }, [activeCat]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      if (prev.length >= 8) return prev;
      return [...prev, id];
    });
  };

  const start = () =>
    selected.length >= 2 &&
    nav.navigate("MemoryGame", { selectedIds: selected });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{t("choose")}</Text>
          <Text style={styles.subtitle}>Select 2 to 8 items</Text>
        </View>
        <Text
          style={[
            styles.counter,
            selected.length >= 2 && styles.ready,
            selected.length === 8 && styles.max,
          ]}
        >
          {selected.length} / 8
        </Text>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.catChip,
                activeCat === cat && styles.activeCatChip,
              ]}
              onPress={() => setActiveCat(cat)}
            >
              <MaterialCommunityIcons
                name={CAT_ICONS[cat] || "help-circle"}
                size={20}
                color={activeCat === cat ? "#fff" : "#666"}
              />
              <Text
                style={[
                  styles.catText,
                  activeCat === cat && styles.activeCatText,
                ]}
              >
                {cat === "All" ? "All" : cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredTemplates}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ paddingBottom: 120, paddingTop: 10 }}
        renderItem={({ item }) => {
          const isSelected = selected.includes(item.id);
          const isMax = selected.length >= 8;
          return (
            <TouchableOpacity
              style={[styles.item, isSelected && styles.sel]}
              onPress={() => toggle(item.id)}
              disabled={!isSelected && isMax}
            >
              <Text
                style={[
                  styles.itemText,
                  !isSelected && isMax && styles.disabledText,
                ]}
              >
                {item.names[language]}
              </Text>
              {isSelected && (
                <MaterialCommunityIcons
                  name="check-circle"
                  size={24}
                  color="#9C27B0"
                />
              )}
            </TouchableOpacity>
          );
        }}
      />

      <View
        style={[
          styles.bottomContainer,
          { paddingBottom: Math.max(insets.bottom, 15) },
        ]}
      >
        <TouchableOpacity
          style={[styles.btn, selected.length < 2 && styles.dis]}
          onPress={start}
          activeOpacity={0.8}
        >
          <Text style={styles.btnT}>
            {selected.length < 2
              ? `Select ${2 - selected.length} more...`
              : t("play")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fcfcfc" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#333" },
  subtitle: { fontSize: 13, color: "#999", marginTop: 2 },
  counter: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#888",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: "hidden",
  },
  ready: { color: "#4CAF50", backgroundColor: "#e8f5e9" },
  max: { color: "#fff", backgroundColor: "#9C27B0" },

  filterContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  filterScroll: { paddingHorizontal: 15, paddingVertical: 12 },
  catChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  activeCatChip: { backgroundColor: "#9C27B0", borderColor: "#9C27B0" },
  catText: { fontSize: 14, color: "#666", marginLeft: 6, fontWeight: "600" },
  activeCatText: { color: "#fff" },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  itemText: { fontSize: 17, color: "#333" },
  sel: { borderColor: "#9C27B0", borderWidth: 2, backgroundColor: "#fdf5ff" },
  disabledText: { color: "#ccc" },

  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255,255,255,0.98)",
    paddingHorizontal: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 10,
  },
  btn: {
    backgroundColor: "#9C27B0",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  dis: { backgroundColor: "#ddd" },
  btnT: { color: "#fff", fontWeight: "bold", fontSize: 18 },
});
