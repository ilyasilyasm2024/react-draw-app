import { TemplatePath } from "../../../domain/entities/Template";

export const frogPaths: TemplatePath[] = [
  // 1. Body
  { id: 'frog-body-fill', path: 'M18 62 C18 42, 34 28, 50 28 C66 28, 82 42, 82 62 C82 78, 68 88, 50 88 C32 88, 18 78, 18 62 Z' },
  { id: 'frog-body-border', path: 'M18 62 C18 42, 34 28, 50 28 C66 28, 82 42, 82 62 C82 78, 68 88, 50 88 C32 88, 18 78, 18 62 Z' },
  
  // 2. Eyes Base
  { id: 'frog-eye-left-base-fill', path: 'M26,30 A8,8 0 1,1 42,30 A8,8 0 1,1 26,30' },
  { id: 'frog-eye-left-base-border', path: 'M26,30 A8,8 0 1,1 42,30 A8,8 0 1,1 26,30' },
  { id: 'frog-eye-right-base-fill', path: 'M58,30 A8,8 0 1,1 74,30 A8,8 0 1,1 58,30' },
  { id: 'frog-eye-right-base-border', path: 'M58,30 A8,8 0 1,1 74,30 A8,8 0 1,1 58,30' },

  // 3. Eyes White
  { id: 'frog-eye-left-white', path: 'M31,30 A3,3 0 1,1 37,30 A3,3 0 1,1 31,30' },
  { id: 'frog-eye-right-white', path: 'M63,30 A3,3 0 1,1 69,30 A3,3 0 1,1 63,30' },

  // 4. Eyes Pupil
  { id: 'frog-eye-left-pupil', path: 'M33.5,30 A1.5,1.5 0 1,1 36.5,30 A1.5,1.5 0 1,1 33.5,30' },
  { id: 'frog-eye-right-pupil', path: 'M65.5,30 A1.5,1.5 0 1,1 68.5,30 A1.5,1.5 0 1,1 65.5,30' },

  // 5. Belly
  { id: 'frog-belly', path: 'M30,66 A20,14 0 1,1 70,66 A20,14 0 1,1 30,66' },

  // 6. Mouth
  { id: 'frog-mouth', path: 'M38 58 Q50 66 62 58' },

  // 7. Front Legs
  { id: 'frog-leg-front-left', path: 'M28 72 Q18 78 18 88' },
  { id: 'frog-leg-front-right', path: 'M72 72 Q82 78 82 88' },

  // 8. Back Legs
  { id: 'frog-leg-back-left', path: 'M30 80 Q22 92 12 90' },
  { id: 'frog-leg-back-right', path: 'M70 80 Q78 92 88 90' }
];
