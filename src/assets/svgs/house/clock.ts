import { TemplatePath } from "../../../domain/entities/Template";

export const clockPaths: TemplatePath[] = [
  { id: 'clock-circle-1-fill', path: 'M16.0,50.0 A34.0,34.0 0 1,1 84.0,50.0 A34.0,34.0 0 1,1 16.0,50.0' },
  { id: 'clock-circle-2-border', path: 'M16.0,50.0 A34.0,34.0 0 1,1 84.0,50.0 A34.0,34.0 0 1,1 16.0,50.0' },
  { id: 'clock-circle-3-border', path: 'M22.0,50.0 A28.0,28.0 0 1,1 78.0,50.0 A28.0,28.0 0 1,1 22.0,50.0' },
  { id: 'clock-circle-4-fill', path: 'M47.0,50.0 A3.0,3.0 0 1,1 53.0,50.0 A3.0,3.0 0 1,1 47.0,50.0' },
  { id: 'clock-path-5-border', path: 'M50 50 L50 34' },
  { id: 'clock-path-6-border', path: 'M50 50 L64 58' },
  { id: 'clock-path-7-border', path: 'M50 22 L50 28 M50 72 L50 78 M22 50 L28 50 M72 50 L78 50' },
  { id: 'clock-path-8-border', path: 'M36 18 C36 10, 44 8, 48 14' },
  { id: 'clock-path-9-border', path: 'M64 18 C64 10, 56 8, 52 14' },
  { id: 'clock-path-10-border', path: 'M38 84 L32 92 M62 84 L68 92' }
];
