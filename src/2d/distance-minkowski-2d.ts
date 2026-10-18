import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculates the Minkowski distance between two 2D vectors.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @param {number} p - Order of the Minkowski distance
 * @returns {number} Minkowski distance
 */
export const distanceMinkowski2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike, p: number): number =>
  (Math.abs(xy1[0] - xy2[0]) ** p + Math.abs(xy1[1] - xy2[1]) ** p) ** (1 / p);
