/** @format */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../hooks/useLanguage";
import { TEMPLATES } from "../../assets/svgs/Templates";

export function FavoritesScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { favs } = useFavorites();
  const { language, t } = useLanguage();
  const list = TEMPLATES.filter((t) => favs.includes(t.id));

  return (
    <View style={styles.container}>
      {list.length === 0 ? (
        <Text style={styles.empty}>{t("noFavs")}</Text>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Drawing", { templateId: item.id })
              }
            >
              <Text style={styles.name}>
                {item.names[language] || item.names["en"]}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fdfdfd" },
  empty: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 18,
    color: "#999",
    fontWeight: "bold",
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: { fontSize: 18, color: "#333", fontWeight: "600" },
});
