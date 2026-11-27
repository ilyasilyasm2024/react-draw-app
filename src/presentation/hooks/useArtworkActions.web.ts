/** @format */

import { useCallback, type RefObject } from "react";
import { Alert } from "react-native";

type CaptureTarget = RefObject<unknown>;

export function useArtworkActions(_targetRef: CaptureTarget) {
  const saveArtwork = useCallback(() => {
    Alert.alert(
      "Save unavailable on web",
      "Open the app on a phone to save artwork to your gallery.",
    );
  }, []);

  const shareArtwork = useCallback(() => {
    Alert.alert(
      "Share unavailable on web",
      "Open the app on a phone to share artwork with friends.",
    );
  }, []);

  return { saveArtwork, shareArtwork };
}
