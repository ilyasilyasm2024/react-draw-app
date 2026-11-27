import { Shape, ShapeMap } from '../entities/Shape';

export function createShape(id: string, path: string): Shape {
  return {
    id,
    path,
    color: '#FFFFFF'
  };
}

export function updateShapeInMap(map: ShapeMap, shape: Shape): ShapeMap {
  return {
    ...map,
    [shape.id]: shape
  };
}

export function changeColor(shape: Shape, newColor: string): Shape {
  return {
    ...shape,
    color: newColor
  };
}
