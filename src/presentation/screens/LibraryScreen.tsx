/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEMPLATES, CATEGORIES } from "../../assets/svgs/Templates";
import { RootStackParamList } from "../navigation/types";
import { useLanguage } from "../hooks/useLanguage";
import { MiniSvg } from "../components/MiniSvg";
import { ShapeMap } from "../../domain/entities/Shape";
import { SvgXml } from "react-native-svg";

import { SVG_EXAMPLES } from "../../assets/svgs/SvgExamples";

const EXPANDED_KEY = "@expanded_categories";
const ICONS: any = {
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

export function LibraryScreen() {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(EXPANDED_KEY).then(
      (d) => d && setExpanded(JSON.parse(d)),
    );
  }, []);

  const toggle = (c: string) => {
    const n = expanded.includes(c)
      ? expanded.filter((x) => x !== c)
      : [...expanded, c];
    setExpanded(n);
    AsyncStorage.setItem(EXPANDED_KEY, JSON.stringify(n));
  };

  const renderSection = (cat: string) => (
    <View key={cat}>
      <TouchableOpacity style={styles.header} onPress={() => toggle(cat)}>
        <View style={styles.row}>
          <MaterialCommunityIcons name={ICONS[cat]} size={26} color="#fff" />
          <Text style={styles.hText}>{t(cat.toLowerCase())}</Text>
        </View>
        <MaterialCommunityIcons
          name={expanded.includes(cat) ? "chevron-up" : "chevron-down"}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      {expanded.includes(cat) &&
        TEMPLATES.filter((x) => x.category === cat).map((x) => {
          const previewShapes: ShapeMap = {};
          x.paths.forEach((p) => {
            previewShapes[p.id] = { id: p.id, path: p.path, color: "#f0f0f0" };
          });

          const hasExample = SVG_EXAMPLES[x.id];

          return (
            <TouchableOpacity
              key={x.id}
              style={styles.card}
              onPress={() => nav.navigate("Drawing", { templateId: x.id })}
            >
              <View style={styles.cardRow}>
                <View style={styles.previewContainer}>
                  {hasExample ? (
                    <SvgXml xml={hasExample} width={60} height={60} />
                  ) : (
                    <MiniSvg shapes={previewShapes} size={60} />
                  )}
                </View>
                <Text style={styles.name}>
                  {x.names[language] || x.names["en"]}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(i) => i}
        renderItem={({ item }) => renderSection(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdfdfd" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#4CAF50",
    borderBottomWidth: 1,
    borderColor: "#3E8E41",
  },
  row: { flexDirection: "row", alignItems: "center" },
  hText: { fontSize: 18, color: "#fff", fontWeight: "bold", marginLeft: 10 },
  card: {
    padding: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  cardRow: { flexDirection: "row", alignItems: "center" },
  previewContainer: {
    width: 70,
    height: 70,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  name: { fontSize: 18, color: "#333", fontWeight: "600" },
});
