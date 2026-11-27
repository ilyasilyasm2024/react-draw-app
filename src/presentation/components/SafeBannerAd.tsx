/** @format */

// ============================================================================
// ADS TEMPORARILY DISABLED
// Banner ads are turned off for this release. To re-enable, set
// ADS_ENABLED = true below. The original implementation is preserved.
// ============================================================================

const ADS_ENABLED = false;

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import { ensureChildSafeAdMobConfigured } from "./adMobConfig";

export function SafeBannerAd() {
  const [Ad, setAd] = useState<any>(null);

  useEffect(() => {
    if (!ADS_ENABLED) {
      return;
    }

    // Expo Go does not contain AdMob native modules, it will hard crash if evaluated.
    if (Constants.appOwnership === "expo") {
      return;
    }

    void (async () => {
      const canUseAdMob = await ensureChildSafeAdMobConfigured();
      if (!canUseAdMob) {
        return;
      }

      try {
        const {
          BannerAd,
          BannerAdSize,
          TestIds,
        } = require("react-native-google-mobile-ads");
        // const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-4392376137168445/1614902986';
        const adUnitId = TestIds.BANNER;

        setAd(() => () => (
          <View
            style={{
              width: "100%",
              alignItems: "center",
              backgroundColor: "#fafafa",
              paddingTop: 10,
            }}
          >
            <BannerAd
              unitId={adUnitId}
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true, // IMPORTANT FOR KIDS APP COPPA COMPLIANCE
              }}
            />
          </View>
        ));
      } catch (err) {
        console.warn("Failed to load AdMob", err);
      }
    })();
  }, []);

  // Ads disabled: render nothing so no banner space is reserved.
  if (!ADS_ENABLED) {
    return null;
  }

  if (!Ad) {
    return (
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#e0e0e0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#757575", fontWeight: "bold" }}>
          ADVERTISEMENT
        </Text>
        <Text style={{ color: "#9e9e9e", fontSize: 10 }}>
          Native AdMob Hidden in Expo Go
        </Text>
      </View>
    );
  }

  return <Ad />;
}
