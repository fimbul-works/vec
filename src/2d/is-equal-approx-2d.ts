import type { ArrayVector2DLike } from "./types.js";

/**
 * Compares a 2D vector with another vector using an epsilon value for floating-point comparison.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @param {number} epsilon - Maximum difference between components to consider them equal (default: `Number.EPSILON`)
 * @returns {boolean} `true` if the vectors are equal, `false` otherwise
 */
export const isEqualApprox2D = (
  xy1: ArrayVector2DLike,
  xy2: ArrayVector2DLike,
  epsilon: number = Number.EPSILON,
): boolean => Math.abs(xy1[0] - xy2[0]) <= epsilon && Math.abs(xy1[1] - xy2[1]) <= epsilon;
