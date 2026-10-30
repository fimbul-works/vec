import type { ArrayVector2D } from "./types.js";

/**
 * Compares a 2DArrayVector with another vector using an epsilon value for floating-point comparison.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @param epsilon - Maximum difference between components to consider them equal (default: `Number.EPSILON`)
 * @returns {boolean} `true` if the vectors are equal, `false` otherwise
 */
export const isEqualApprox2D = (xy1: ArrayVector2D, xy2: ArrayVector2D, epsilon: number = Number.EPSILON): boolean =>
  Math.abs(xy1[0] - xy2[0]) <= epsilon && Math.abs(xy1[1] - xy2[1]) <= epsilon;
