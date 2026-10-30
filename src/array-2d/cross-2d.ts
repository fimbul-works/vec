import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the cross product of two 2D vectors.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @returns Cross product
 */
export const cross2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number => xy1[0] * xy2[1] - xy1[1] * xy2[0];
