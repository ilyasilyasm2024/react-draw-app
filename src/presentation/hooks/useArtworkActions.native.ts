/** @format */

import { useCallback, type RefObject } from "react";
import { Alert, Share, View, Linking } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

type CaptureTarget = RefObject<View | null>;

function isExpoGoMediaLibraryLimitation(message: string) {
  return (
    message.includes("Expo Go can no longer provide full access") ||
    message.includes("create a development build")
  );
}

async function captureArtwork(targetRef: CaptureTarget) {
  if (!targetRef.current) {
    throw new Error("Artwork area is not ready yet.");
  }

  return captureRef(targetRef.current, {
    format: "png",
    quality: 1,
    result: "tmpfile",
  });
}

export function useArtworkActions(targetRef: CaptureTarget) {
  const saveArtwork = useCallback(async () => {
    try {
      const current = await MediaLibrary.getPermissionsAsync(true, ["photo"]);
      if (!current.granted) {
        const requested = await MediaLibrary.requestPermissionsAsync(true, [
          "photo",
        ]);
        if (!requested.granted) {
          if (requested.canAskAgain === false) {
            Alert.alert(
              "Permission needed",
              "Please enable photo permissions in Settings to save artwork.",
              [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Open Settings",
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
          } else {
            Alert.alert(
              "Permission needed",
              "Allow photo access to save your art.",
            );
          }
          return;
        }
      }
      const uri = await captureArtwork(targetRef);
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("Saved", "Your art was saved to your phone gallery.");
    } catch (error) {
      const message = error?.message || String(error);

      if (isExpoGoMediaLibraryLimitation(message)) {
        console.warn("Save artwork blocked in Expo Go:", message);
        Alert.alert(
          "Expo Go limitation",
          "Saving to gallery is limited in Expo Go on recent Android versions. Use a development build to test save-to-gallery:\n\n1) npx expo run:android\n2) Open the installed app on your phone\n3) Test Save again",
        );
        return;
      }

      console.error("Save artwork error:", error);
      Alert.alert(
        "Save failed",
        `Could not save artwork: ${message}\nMake sure Expo Go has photo permissions or test in a dev-client/standalone build.`,
      );
    }
  }, [targetRef]);

  const shareArtwork = useCallback(async () => {
    try {
      const uri = await captureArtwork(targetRef);
      await Share.share({
        message: "I made this with Kids Art!",
        url: uri,
      });
    } catch (error) {
      Alert.alert("Share failed", "We could not share this artwork right now.");
    }
  }, [targetRef]);

  return { saveArtwork, shareArtwork };
}
