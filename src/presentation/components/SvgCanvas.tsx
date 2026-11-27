import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { ShapeMap } from '../../domain/entities/Shape';

interface SvgCanvasProps {
  shapes: ShapeMap;
  onPathClick: (id: string) => void;
}

export function SvgCanvas({ shapes, onPathClick }: SvgCanvasProps) {
  const renderPaths = () => {
    return Object.values(shapes).map((shape) => (
      <Path
        key={shape.id}
        d={shape.path}
        fill={shape.color}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.5}
        onPress={() => onPathClick(shape.id)}
        onPressIn={() => onPathClick(shape.id)}
      />
    ));
  };

  return (
    <Svg height="100%" width="100%" viewBox="0 0 100 100" pointerEvents="box-none">
      <G>{renderPaths()}</G>
    </Svg>
  );
}
