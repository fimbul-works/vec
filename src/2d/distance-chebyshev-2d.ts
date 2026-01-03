import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the Chebyshev distance between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {number} Chebyshev distance
 */
export const distanceChebyshev2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number => {
  const absX = Math.abs(xy1[0] - xy2[0]);
  const absY = Math.abs(xy1[1] - xy2[1]);
  return absX >= absY ? absX : absY;
};
