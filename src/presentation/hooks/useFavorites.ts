import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAV_KEY = '@fav_templates';

export function useFavorites() {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    loadFavs();
  }, []);

  const loadFavs = async () => {
    const data = await AsyncStorage.getItem(FAV_KEY);
    if (data) setFavs(JSON.parse(data));
  };

  const toggleFav = async (id: string) => {
    const update = favs.includes(id) ? favs.filter(i => i !== id) : [...favs, id];
    setFavs(update);
    await AsyncStorage.setItem(FAV_KEY, JSON.stringify(update));
  };

  return { favs, toggleFav };
}
