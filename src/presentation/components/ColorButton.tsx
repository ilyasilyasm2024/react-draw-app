import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

interface ColorButtonProps {
  color: string;
  onSelect: (color: string) => void;
  isSelected: boolean;
}

export function ColorButton({ color, onSelect, isSelected }: ColorButtonProps) {
  const selectColor = () => onSelect(color);
  
  return (
    <TouchableOpacity 
      onPress={selectColor}
      style={[
        styles.button, 
        { backgroundColor: color },
        isSelected && styles.selected
      ]}
    >
      <View />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selected: {
    borderColor: '#000',
    transform: [{ scale: 1.1 }],
  },
});
