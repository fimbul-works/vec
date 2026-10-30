import type { ArrayVector2D } from "./types.js";

/**
 * Multiplies one 2DArrayVector with another component-wise.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns The multiplied vector
 */
export const multiply2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): ArrayVector2D => [xy1[0] * xy2[0], xy1[1] * xy2[1]];
