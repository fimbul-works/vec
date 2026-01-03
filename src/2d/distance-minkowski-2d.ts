import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the Minkowski distance between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @param {number} p - Order of the Minkowski distance
 * @returns {number} Minkowski distance
 */
export const distanceMinkowski2D = (xy1: ArrayVector2D, xy2: ArrayVector2D, p: number): number =>
  (Math.abs(xy1[0] - xy2[0]) ** p + Math.abs(xy1[1] - xy2[1]) ** p) ** (1 / p);
