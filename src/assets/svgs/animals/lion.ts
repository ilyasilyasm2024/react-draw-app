import { TemplatePath } from "../../../domain/entities/Template";

export const lionPaths: TemplatePath[] = [
  // 1. Mane
  { id: 'lion-mane-fill', path: 'M50 12 C66 12, 82 24, 86 42 C90 62, 78 84, 50 88 C22 84, 10 62, 14 42 C18 24, 34 12, 50 12 Z' },
  { id: 'lion-mane-border', path: 'M50 12 C66 12, 82 24, 86 42 C90 62, 78 84, 50 88 C22 84, 10 62, 14 42 C18 24, 34 12, 50 12 Z' },
  
  // 2. Face
  { id: 'lion-face-fill', path: 'M24,50 A26,26 0 1,1 76,50 A26,26 0 1,1 24,50' },
  { id: 'lion-face-border', path: 'M24,50 A26,26 0 1,1 76,50 A26,26 0 1,1 24,50' },

  // 3. Ears
  { id: 'lion-ear-left-fill', path: 'M20,34 A8,8 0 1,1 36,34 A8,8 0 1,1 20,34' },
  { id: 'lion-ear-left-border', path: 'M20,34 A8,8 0 1,1 36,34 A8,8 0 1,1 20,34' },
  { id: 'lion-ear-right-fill', path: 'M64,34 A8,8 0 1,1 80,34 A8,8 0 1,1 64,34' },
  { id: 'lion-ear-right-border', path: 'M64,34 A8,8 0 1,1 80,34 A8,8 0 1,1 64,34' },

  // 4. Inner Ears
  { id: 'lion-ear-inner-left', path: 'M24,34 A4,4 0 1,1 32,34 A4,4 0 1,1 24,34' },
  { id: 'lion-ear-inner-right', path: 'M68,34 A4,4 0 1,1 76,34 A4,4 0 1,1 68,34' },

  // 5. Eyes
  { id: 'lion-eye-left', path: 'M39,46 A3,3 0 1,1 45,46 A3,3 0 1,1 39,46' },
  { id: 'lion-eye-right', path: 'M55,46 A3,3 0 1,1 61,46 A3,3 0 1,1 55,46' },

  // 6. Nose
  { id: 'lion-nose', path: 'M50 54 L44 60 L56 60 Z' },

  // 7. Mouth
  { id: 'lion-mouth', path: 'M44 64 Q50 70 56 64' },

  // 8. Whiskers
  { id: 'lion-whiskers', path: 'M20 58 L38 58 M20 64 L38 62 M62 58 L80 58 M62 62 L80 64' }
];
