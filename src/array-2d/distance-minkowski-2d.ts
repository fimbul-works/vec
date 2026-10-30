import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the Minkowski distance between two 2D vectors.
 * @param xy1 - First vector as `[x, y]`
 * @param xy2 - Second vector as `[x, y]`
 * @param p - Order of the Minkowski distance
 * @returns Minkowski distance
 */
export const distanceMinkowski2D = (xy1: ArrayVector2D, xy2: ArrayVector2D, p: number): number =>
  (Math.abs(xy1[0] - xy2[0]) ** p + Math.abs(xy1[1] - xy2[1]) ** p) ** (1 / p);
