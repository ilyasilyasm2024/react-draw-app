import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeBannerAd } from './SafeBannerAd';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        {children}
      </View>
      <View style={[styles.bannerWrap, { paddingBottom: insets.bottom }]}> 
        <SafeBannerAd />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: 'transparent' },
  bannerWrap: { width: '100%', alignItems: 'center', paddingVertical: 8 },
  content: { flex: 1 },
});
