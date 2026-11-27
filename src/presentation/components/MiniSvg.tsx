import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ShapeMap } from '../../domain/entities/Shape';

interface Props {
  shapes: ShapeMap;
  size?: number;
}

export function MiniSvg({ shapes, size = 40 }: Props) {
  return (
    <Svg height={size} width={size} viewBox="0 0 100 100">
      {Object.values(shapes).map((s) => (
        <Path key={s.id} d={s.path} fill={s.color} stroke="#333" strokeWidth={1} />
      ))}
    </Svg>
  );
}
