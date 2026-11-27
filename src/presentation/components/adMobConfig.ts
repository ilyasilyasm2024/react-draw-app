/** @format */

import { Platform } from "react-native";
import Constants from "expo-constants";

// ============================================================================
// ADS TEMPORARILY DISABLED
// AdMob initialization is turned off for this release. To re-enable ads,
// set ADS_ENABLED = true. The original implementation is preserved below.
// ============================================================================
const ADS_ENABLED = false;

let isConfigured = false;

export async function ensureChildSafeAdMobConfigured(): Promise<boolean> {
  if (!ADS_ENABLED) {
    return false;
  }

  if (isConfigured) {
    return true;
  }

  // Expo Go and web do not provide native AdMob modules.
  if (Constants.appOwnership === "expo" || Platform.OS === "web") {
    return false;
  }

  try {
    const {
      default: mobileAds,
      MaxAdContentRating,
    } = require("react-native-google-mobile-ads");

    await mobileAds().setRequestConfiguration({
      maxAdContentRating: MaxAdContentRating.G,
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
    });

    await mobileAds().initialize();
    isConfigured = true;
    return true;
  } catch (error) {
    console.warn("Failed to configure child-safe AdMob settings:", error);
    return false;
  }
}
