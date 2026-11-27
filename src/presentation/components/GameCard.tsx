import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ShapeMap } from '../../domain/entities/Shape';
import { MiniSvg } from './MiniSvg';

interface Props {
  name: string;
  shapes: ShapeMap;
  isFlipped: boolean;
  onPress: () => void;
}

export function GameCard({ name, shapes, isFlipped, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.c, isFlipped && styles.f]} onPress={onPress}>
      {isFlipped ? (
        <View style={styles.content}>
          <MiniSvg shapes={shapes} size={50} />
          <Text style={styles.t}>{name}</Text>
        </View>
      ) : (
        <MaterialCommunityIcons name="help-circle" size={40} color="#fff" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  c: { flex: 1, aspectRatio: 1, margin: 4, backgroundColor: '#9C27B0', justifyContent: 'center', alignItems: 'center', borderRadius: 12, elevation: 4 },
  f: { backgroundColor: '#fff', borderWidth: 2, borderColor: '#9C27B0' },
  content: { alignItems: 'center', justifyContent: 'center' },
  t: { fontSize: 10, fontWeight: 'bold', color: '#9C27B0', marginTop: 4, textAlign: 'center' }
});
