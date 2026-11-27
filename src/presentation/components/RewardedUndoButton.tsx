import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { ensureChildSafeAdMobConfigured } from './adMobConfig';

// ============================================================================
// ADS TEMPORARILY DISABLED
// Rewarded ads are turned off for this release. While disabled, the reward is
// granted directly without showing an ad. To re-enable, set ADS_ENABLED = true.
// ============================================================================
const ADS_ENABLED = false;

export function RewardedUndoButton({ onReward }: { onReward: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [adInstance, setAdInstance] = useState<any>(null);

  const loadAd = async () => {
    if (!ADS_ENABLED) {
      setLoaded(true);
      return;
    }

    if (Constants.appOwnership === 'expo') {
      setLoaded(true);
      return;
    }

    const canUseAdMob = await ensureChildSafeAdMobConfigured();
    if (!canUseAdMob) {
      return;
    }

    try {
      const { RewardedAd, RewardedAdEventType, TestIds } = require('react-native-google-mobile-ads');
      // const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-4392376137168445/7988739644';
      const adUnitId = TestIds.REWARDED;
      const ad = RewardedAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
      });
      
      // Bind event listeners
      ad.addAdEventListener(RewardedAdEventType.LOADED, () => setLoaded(true));
      ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
        onReward();
        setLoaded(false);
        void loadAd(); // aggressively preload next
      });
      ad.addAdEventListener(RewardedAdEventType.CLOSED, () => {
        setLoaded(false);
        void loadAd(); // securely preload next if they closed prematurely
      });

      ad.load();
      setAdInstance(ad);
    } catch (e) {
      console.warn('Failed to load rewarded ad natively:', e);
    }
  };

  useEffect(() => {
    void loadAd();
  }, []);

  const handlePress = () => {
    if (!ADS_ENABLED) {
      onReward();
      return;
    }
    if (Constants.appOwnership === 'expo') {
      onReward();
      return;
    }
    if (adInstance && loaded) {
      adInstance.show();
    }
  };

  return (
    <TouchableOpacity style={[styles.btn, !loaded && styles.btnDis]} onPress={handlePress} disabled={!loaded}>
      {loaded ? <MaterialCommunityIcons name="video" size={20} color="#FFF" /> : <ActivityIndicator size="small" color="#FFF" />}
      <Text style={styles.txt}>+5 Tries</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9800',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3
  },
  btnDis: { backgroundColor: '#FFCC80' },
  txt: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 6
  }
});
