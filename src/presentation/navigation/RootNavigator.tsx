import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LibraryScreen } from '../screens/LibraryScreen';
import { DrawingScreen } from '../screens/DrawingScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { FreeDrawScreen } from '../screens/FreeDrawScreen';
import { GameSelectionScreen } from '../screens/GameSelectionScreen';
import { MemoryGameScreen } from '../screens/MemoryGameScreen';
import { RootStackParamList } from './types';
import { useLanguage } from '../hooks/useLanguage';

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { t } = useLanguage();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Library" component={LibraryScreen} options={{ title: t('library') }} />
      <Stack.Screen name="Drawing" component={DrawingScreen} options={{ title: t('start') }} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: t('favTitle') }} />
      <Stack.Screen name="FreeDraw" component={FreeDrawScreen} options={{ title: t('freeDraw') }} />
      <Stack.Screen name="GameSelection" component={GameSelectionScreen} options={{ title: t('games') }} />
      <Stack.Screen name="MemoryGame" component={MemoryGameScreen} options={{ title: t('memory') }} />
    </Stack.Navigator>
  );
}
