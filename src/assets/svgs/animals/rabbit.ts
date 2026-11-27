import { TemplatePath } from "../../../domain/entities/Template";

export const rabbitPaths: TemplatePath[] = [
  // 1. Body
  { id: 'rabbit-body-fill', path: 'M30,66 A26,20 0 1,1 82,66 A26,20 0 1,1 30,66' },
  { id: 'rabbit-body-border', path: 'M30,66 A26,20 0 1,1 82,66 A26,20 0 1,1 30,66' },

  // 2. Head
  { id: 'rabbit-head-fill', path: 'M22,42 A20,20 0 1,1 62,42 A20,20 0 1,1 22,42' },
  { id: 'rabbit-head-border', path: 'M22,42 A20,20 0 1,1 62,42 A20,20 0 1,1 22,42' },

  // 3. Ears Left
  { id: 'rabbit-ear-left-fill', path: 'M32 26 C24 8, 30 2, 40 6 C44 16, 42 28, 38 34 Z' },
  { id: 'rabbit-ear-left-border', path: 'M32 26 C24 8, 30 2, 40 6 C44 16, 42 28, 38 34 Z' },

  // 4. Ears Right
  { id: 'rabbit-ear-right-fill', path: 'M48 24 C44 6, 52 0, 62 8 C64 18, 58 30, 52 34 Z' },
  { id: 'rabbit-ear-right-border', path: 'M48 24 C44 6, 52 0, 62 8 C64 18, 58 30, 52 34 Z' },

  // 5. Inner ears
  { id: 'rabbit-ear-inner-left', path: 'M34 22 C30 12, 32 8, 38 10 C40 18, 38 26, 36 30 Z' },
  { id: 'rabbit-ear-inner-right', path: 'M50 20 C48 10, 52 8, 58 12 C58 20, 54 28, 52 30 Z' },

  // 6. Eyes
  { id: 'rabbit-eye-left', path: 'M33.5,42 A2.5,2.5 0 1,1 38.5,42 A2.5,2.5 0 1,1 33.5,42' },
  { id: 'rabbit-eye-right', path: 'M45.5,42 A2.5,2.5 0 1,1 50.5,42 A2.5,2.5 0 1,1 45.5,42' },

  // 7. Nose
  { id: 'rabbit-nose', path: 'M39.5,50 A2.5,2.5 0 1,1 44.5,50 A2.5,2.5 0 1,1 39.5,50' },

  // 8. Mouth
  { id: 'rabbit-mouth', path: 'M42 52 Q38 58 34 56 M42 52 Q46 58 50 56' },

  // 9. Tail
  { id: 'rabbit-tail-fill', path: 'M74,66 A8,8 0 1,1 90,66 A8,8 0 1,1 74,66' },
  { id: 'rabbit-tail-border', path: 'M74,66 A8,8 0 1,1 90,66 A8,8 0 1,1 74,66' },

  // 10. Front Paw
  { id: 'rabbit-paw-fill', path: 'M39,82 A5,5 0 1,1 49,82 A5,5 0 1,1 39,82' },
  { id: 'rabbit-paw-border', path: 'M39,82 A5,5 0 1,1 49,82 A5,5 0 1,1 39,82' }
];
