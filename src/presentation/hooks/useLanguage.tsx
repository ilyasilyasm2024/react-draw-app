import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANG_KEY = '@app_language';

const DICTIONARY: Record<string, any> = {
  en: {
    start: 'Start Drawing', surprise: 'Surprise Me!', gallery: 'My Gallery', color: 'Color',
    favorite: 'Favorite', save: 'Save', pickColor: 'Pick a Color', close: 'Close',
    noFavs: 'No favorites yet!', library: 'Choose a Shape', favTitle: 'My Favorites', clear: 'Clear',
    freeDraw: 'Free Drawing', games: 'Play Games', memory: 'Memory Game', choose: 'Choose Words', 
    play: 'Play!', match: 'Matches', tries: 'Tries', wow: 'WOW!', superstar: 'You are a Superstar!',
    fruits: 'Fruits', vegetables: 'Vegetables', animals: 'Animals', numbers: 'Numbers',
    shapes: 'Shapes', school: 'School', house: 'House', plants: 'Plants', kitchen: 'Kitchen', jobs: 'Jobs'
  },
  fr: {
    start: 'Commencer', surprise: 'Surprise !', gallery: 'Ma Galerie', color: 'Couleur',
    favorite: 'Favori', save: 'Enregistrer', pickColor: 'Couleur', close: 'Fermer',
    noFavs: 'Pas de favoris !', library: 'Choisir une forme', favTitle: 'Mes Favoris', clear: 'Effacer',
    freeDraw: 'Dessin Libre', games: 'Jeux', memory: 'Mémory', choose: 'Choisir mots',
    play: 'Jouer !', match: 'Paires', tries: 'Essais', wow: 'WAOUH !', superstar: 'Tu es une Superstar !',
    fruits: 'Fruits', vegetables: 'Légumes', animals: 'Animaux', numbers: 'Nombres',
    shapes: 'Formes', school: 'École', house: 'Maison', plants: 'Plantes', kitchen: 'Cuisine', jobs: 'Métiers'
  },
  de: {
    start: 'Zeichnen', surprise: 'Überraschung!', gallery: 'Meine Galerie', color: 'Farbe',
    favorite: 'Favorit', save: 'Speichern', pickColor: 'Farbe wählen', close: 'Schließen',
    noFavs: 'Keine Favoriten!', library: 'Form wählen', favTitle: 'Meine Favoriten', clear: 'Löschen',
    freeDraw: 'Freies Zeichnen', games: 'Spiele', memory: 'Memory', choose: 'Wörter wählen',
    play: 'Spielen!', match: 'Matches', tries: 'Versuche', wow: 'TOLL!', superstar: 'Du bist ein Superstar!',
    fruits: 'Früchte', vegetables: 'Gemüse', animals: 'Tiere', numbers: 'Zahlen',
    shapes: 'Formen', school: 'Schule', house: 'Haus', plants: 'Pflanzen', kitchen: 'Küche', jobs: 'Berufe'
  }
};

type LanguageContextType = {
  language: string;
  updateLanguage: (l: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  updateLanguage: () => {},
  t: (k) => DICTIONARY['en'][k] || k,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem(LANG_KEY).then(l => l && setLanguage(l));
  }, []);

  const updateLanguage = (l: string) => {
    setLanguage(l);
    AsyncStorage.setItem(LANG_KEY, l);
  };

  const t = (key: string) => DICTIONARY[language]?.[key] || DICTIONARY['en']?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, updateLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  return useContext(LanguageContext);
}
