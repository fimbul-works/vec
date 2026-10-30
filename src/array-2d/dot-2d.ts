import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the dot product of two vectors.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns Dot product
 */
export const dot2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number => xy1[0] * xy2[0] + xy1[1] * xy2[1];
