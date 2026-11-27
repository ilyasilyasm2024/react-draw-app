export interface Shape {
  id: string;
  path: string;
  color: string;
}

export type ShapeMap = Record<string, Shape>;
