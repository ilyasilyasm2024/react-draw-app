import { Audio } from 'expo-av';
import * as Speech from 'expo-speech';
import { TEMPLATES } from '../../assets/svgs/Templates';

const AUDIO_MAP: any = {
  extra: { win: require('../../../assets/audio/win.mp3') }
};

export function useAudio() {
  const play = async (lang: string, id: string) => {
    // 1. Check for manual MP3 (songs / extra effects)
    const extra = AUDIO_MAP['extra']?.[id];
    if (extra) {
      const { sound } = await Audio.Sound.createAsync(extra);
      await sound.playAsync();
      return;
    }

    // 2. Use Text-to-Speech for everything else
    const template = TEMPLATES.find(t => t.id === id);
    if (!template) return;

    const l = lang as 'en' | 'fr' | 'de';
    const singular = `${template.articles[l] || ''} ${template.names[l]}`.trim();
    const plural = `${template.pluralArticles[l] || ''} ${template.plurals[l]}`.trim();

    // Map internal lang codes to BCP-47 labels used by Speech
    const voiceLang = lang === 'en' ? 'en-US' : lang === 'fr' ? 'fr-FR' : lang === 'de' ? 'de-DE' : 'en-US';

    // Speak both with a slight pause (the period helps)
    Speech.speak(`${singular}. ${plural}`, {
      language: voiceLang,
      pitch: 1.1, 
      rate: 0.85,
    });
  };

  return { play };
}
