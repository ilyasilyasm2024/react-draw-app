/** @format */

import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../navigation/types";
import { GameCard } from "../components/GameCard";
import { Confetti } from "../components/Confetti";
import { TEMPLATES } from "../../assets/svgs/Templates";
import { useLanguage } from "../hooks/useLanguage";
import { useAudio } from "../hooks/useAudio";

export function MemoryGameScreen() {
  const ids =
    useRoute<RouteProp<RootStackParamList, "MemoryGame">>().params.selectedIds;
  const nav = useNavigation();
  const { language } = useLanguage();
  const { play } = useAudio();
  const [data, setData] = useState<any[]>([]);
  const [flip, setFlip] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    loadGame();
  }, [ids]);
  const loadGame = async () => {
    const list = await Promise.all(
      ids.map(async (id) => {
        const t = TEMPLATES.find((x) => x.id === id)!;
        const sav = await AsyncStorage.getItem(`@colors_${id}`);
        const def = t.paths.reduce(
          (acc, p) => ({
            ...acc,
            [p.id]: { id: p.id, path: p.path, color: "#FFFFFF" },
          }),
          {},
        );
        return {
          id,
          name: t.names[language],
          shapes: sav ? JSON.parse(sav) : def,
        };
      }),
    );
    const shuf = [...list, ...list].sort(() => Math.random() - 0.5);
    setData(shuf.map((item, index) => ({ ...item, index })));
  };

  useEffect(() => {
    if (flip.length === 2 && data[flip[0]].id === data[flip[1]].id)
      setSolved((p) => [...p, ...flip]);
    if (flip.length === 2) setTimeout(() => setFlip([]), 800);
  }, [flip]);

  useEffect(() => {
    if (solved.length > 0 && solved.length === data.length) {
      setWin(true);
      play("extra", "win");
      setTimeout(() => nav.goBack(), 4500);
    }
  }, [solved]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.index.toString()}
        renderItem={({ item }) => (
          <GameCard
            name={item.name}
            shapes={item.shapes}
            isFlipped={flip.includes(item.index) || solved.includes(item.index)}
            onPress={() =>
              flip.length < 2 &&
              !flip.includes(item.index) &&
              !solved.includes(item.index) &&
              setFlip((p) => [...p, item.index])
            }
          />
        )}
      />
      {win && <Confetti />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fdfdfd" },
});
