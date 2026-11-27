/** @format */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootStackParamList } from "../navigation/types";
import { useLanguage } from "../hooks/useLanguage";
import { TEMPLATES } from "../../assets/svgs/Templates";

export function HomeScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { language, updateLanguage, t } = useLanguage();
  const contentWidth = Math.min(360, width - 30);

  const startRandom = () => {
    const random = Math.floor(Math.random() * TEMPLATES.length);
    navigation.navigate("Drawing", { templateId: TEMPLATES[random].id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cloudStrip}>
        <View style={[styles.cloudBall, styles.cloudBallA]} />
        <View style={[styles.cloudBall, styles.cloudBallB]} />
        <View style={[styles.cloudBall, styles.cloudBallC]} />
        <View style={[styles.cloudBall, styles.cloudBallD]} />
        <View style={[styles.cloudBall, styles.cloudBallE]} />
      </View>

      <View style={styles.doodleLayer} pointerEvents="none">
        <Text style={[styles.doodle, styles.doodleA]}>☆</Text>
        <Text style={[styles.doodle, styles.doodleB]}>◌</Text>
        <Text style={[styles.doodle, styles.doodleC]}>✧</Text>
        <Text style={[styles.doodle, styles.doodleD]}>◎</Text>
        <Text style={[styles.doodle, styles.doodleE]}>☆</Text>
      </View>

      <View style={[styles.mainCard, { width: contentWidth }]}>
        <View style={styles.brandRow}>
          <Text style={styles.titleIcon}>🎨</Text>
          <Text style={styles.title}>Kids Art</Text>
        </View>

        <View style={styles.langPill}>
          <LangBtn
            label="EN"
            active={language === "en"}
            flag="🇺🇸"
            onPress={() => updateLanguage("en")}
          />
          <LangBtn
            label="FR"
            active={language === "fr"}
            flag="🇫🇷"
            onPress={() => updateLanguage("fr")}
          />
          <LangBtn
            label="DE"
            active={language === "de"}
            flag="🇩🇪"
            onPress={() => updateLanguage("de")}
          />
        </View>

        <Btn
          width={contentWidth - 22}
          label={t("start")}
          icon="palette"
          color="#57B85F"
          onPress={() => navigation.navigate("Library")}
        />
        <Btn
          width={contentWidth - 22}
          label={t("freeDraw")}
          icon="pencil"
          color="#2BAAC5"
          onPress={() => navigation.navigate("FreeDraw")}
        />
        <Btn
          width={contentWidth - 22}
          label={t("games")}
          icon="gamepad-variant"
          color="#9D33B9"
          onPress={() => navigation.navigate("GameSelection")}
        />
        <Btn
          width={contentWidth - 22}
          label={t("surprise")}
          icon="shuffle-variant"
          color="#F39A06"
          onPress={startRandom}
        />
        <Btn
          width={contentWidth - 22}
          label={t("gallery")}
          icon="image"
          color="#F8BE0A"
          onPress={() => navigation.navigate("Favorites")}
        />
      </View>

      <View style={styles.bottomDock}>
        <TouchableOpacity style={styles.dockItem}>
          <MaterialCommunityIcons name="cog" size={28} color="#5C7A8C" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dockItem}
          onPress={() => navigation.navigate("Favorites")}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={30}
            color="#5C7A8C"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dockItem}
          onPress={() => navigation.navigate("GameSelection")}
        >
          <MaterialCommunityIcons
            name="star-four-points"
            size={24}
            color="#E8F2FA"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LangBtn({
  label,
  active,
  flag,
  onPress,
}: {
  label: string;
  active: boolean;
  flag: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.lBtn, active && styles.activeL]}
    >
      <Text style={styles.flagText}>{flag}</Text>
      <Text style={[styles.langText, active ? styles.tActive : styles.tNormal]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function Btn({
  label,
  icon,
  color,
  onPress,
  width,
}: {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  onPress: () => void;
  width: number;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color="#F6FFFB"
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCEAF4",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 36,
    paddingBottom: 22,
  },
  cloudStrip: {
    position: "absolute",
    top: -10,
    left: 0,
    right: 0,
    height: 96,
    backgroundColor: "#BFD4E4",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  cloudBall: {
    position: "absolute",
    backgroundColor: "#C7DBEA",
    borderColor: "#AFC6D8",
    borderWidth: 1,
  },
  cloudBallA: { width: 110, height: 70, borderRadius: 35, left: -10, top: 28 },
  cloudBallB: { width: 95, height: 58, borderRadius: 29, left: 76, top: 40 },
  cloudBallC: { width: 120, height: 72, borderRadius: 36, left: 156, top: 26 },
  cloudBallD: { width: 110, height: 68, borderRadius: 34, left: 252, top: 30 },
  cloudBallE: { width: 90, height: 56, borderRadius: 28, right: -12, top: 42 },
  doodleLayer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.16,
  },
  doodle: {
    position: "absolute",
    fontSize: 28,
    color: "#81A2B9",
    fontWeight: "700",
  },
  doodleA: { top: 160, left: 20 },
  doodleB: { top: 110, right: 24 },
  doodleC: { top: 312, left: 32 },
  doodleD: { top: 442, right: 22 },
  doodleE: { bottom: 118, left: 40 },
  mainCard: {
    marginTop: 58,
    alignItems: "center",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  titleIcon: {
    fontSize: 46,
    marginRight: 10,
  },
  title: {
    fontSize: 52,
    color: "#2D8AA0",
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  langPill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    borderRadius: 42,
    backgroundColor: "#C9DEEC",
    borderColor: "#ACC3D3",
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginBottom: 18,
    shadowColor: "#6B8AA0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  lBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  activeL: {
    backgroundColor: "#B6D2E5",
  },
  flagText: {
    fontSize: 18,
    marginRight: 8,
  },
  langText: {
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  tNormal: {
    color: "#4A6070",
  },
  tActive: {
    color: "#3A5E74",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    marginBottom: 12,
    minHeight: 58,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.45)",
  },
  buttonText: {
    color: "#F6FFFB",
    fontSize: 18,
    fontWeight: "900",
    textShadowColor: "rgba(0,0,0,0.28)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  buttonIcon: {
    marginLeft: 9,
    marginTop: 1,
    opacity: 0.95,
  },
  bottomDock: {
    width: "96%",
    borderRadius: 24,
    backgroundColor: "#C2D8E8",
    borderColor: "#A7BECE",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: "#4C6779",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  dockItem: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
});
