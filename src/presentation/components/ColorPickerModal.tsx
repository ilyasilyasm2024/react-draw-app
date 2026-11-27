import React from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { ColorButton } from './ColorButton';
import { useLanguage } from '../hooks/useLanguage';

const COLORS = [
  '#FF0000', '#D32F2F', '#FF5252', '#E91E63', '#9C27B0', '#673AB7',
  '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',
  '#795548', '#8D6E63', '#9E9E9E', '#607D8B', '#000000', '#FFFFFF'
];

interface ColorPickerModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (color: string) => void;
  selectedColor: string;
}

export function ColorPickerModal({ isVisible, onClose, onSelect, selectedColor }: ColorPickerModalProps) {
  const { t } = useLanguage();

  const selectAndClose = (color: string) => {
    onSelect(color);
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{t('pickColor')}</Text>
          
          <FlatList
            data={COLORS}
            numColumns={6}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <ColorButton color={item} onSelect={selectAndClose} isSelected={selectedColor === item} />
            )}
          />

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>{t('close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  container: { backgroundColor: 'white', padding: 25, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  closeButton: { marginTop: 25, paddingVertical: 12, paddingHorizontal: 40, backgroundColor: '#f0f0f0', borderRadius: 20 },
  closeText: { fontWeight: 'bold', color: '#666' }
});
