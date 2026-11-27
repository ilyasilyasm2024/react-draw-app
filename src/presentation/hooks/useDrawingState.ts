import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShapeMap } from '../../domain/entities/Shape';
import { changeColor, updateShapeInMap } from '../../domain/usecases/ShapeLogic';

export function useDrawingState(templateId: string, initialShapes: ShapeMap) {
  const [shapes, setShapes] = useState<ShapeMap>(initialShapes);
  const [selectedColor, setSelectedColor] = useState<string>('#FF5733');

  useEffect(() => {
    loadSavedColors();
  }, [templateId]);

  const loadSavedColors = async () => {
    const saved = await AsyncStorage.getItem(`@colors_${templateId}`);
    if (!saved) { setShapes(initialShapes); return; }
    const old = JSON.parse(saved);
    // Always use current template paths, only restore saved colors
    const merged = Object.keys(initialShapes).reduce((acc, k) => {
      const color = old[k]?.color || '#FFFFFF';
      return { ...acc, [k]: { ...initialShapes[k], color } };
    }, {} as ShapeMap);
    setShapes(merged);
  };

  const saveColors = (map: ShapeMap) => {
    setShapes(map);
    AsyncStorage.setItem(`@colors_${templateId}`, JSON.stringify(map));
  };

  const colorShape = (id: string) => {
    const shape = shapes[id];
    if (shape) saveColors(updateShapeInMap(shapes, changeColor(shape, selectedColor)));
  };

  const clearAll = () => {
    const reset = Object.keys(shapes).reduce((acc, k) => ({ ...acc, [k]: { ...shapes[k], color: '#FFFFFF' } }), {});
    saveColors(reset);
  };

  return { shapes, selectedColor, setSelectedColor, colorShape, clearAll };
}
