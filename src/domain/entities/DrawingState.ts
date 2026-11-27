import { ShapeMap } from './Shape';

export interface DrawingState {
  shapes: ShapeMap;
  selectedColor: string;
}
