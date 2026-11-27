import { TemplatePath } from '../../../domain/entities/Template';

/**
 * High-fidelity tomato – plump round body with calyx and stem.
 * Scaled to 100×100 viewBox. Parts: body, stem, calyx, section lines.
 */
export const tomatoPaths: TemplatePath[] = [
  // 1. MAIN BODY
  {
    id: 'tomato_body',
    path: 'M50 92 C25 92 10 75 10 52 C10 30 25 18 50 18 C75 18 90 30 90 52 C90 75 75 92 50 92 Z'
  },
  // 2. CALYX (Refined star shape)
  {
    id: 'tomato_calyx',
    path: 'M50 25 L45 10 L38 20 L25 15 L35 28 L15 35 L38 38 L42 55 L50 40 L58 55 L62 38 L85 35 L65 28 L75 15 L62 20 L55 10 Z'
  },
  // 3. STEM
  {
    id: 'tomato_stem',
    path: 'M48 18 C47 12 47 5 50 5 C53 5 53 12 52 18 L48 18'
  }
];
