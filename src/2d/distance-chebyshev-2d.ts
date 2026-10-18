import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculates the Chebyshev distance between two 2D vectors.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {number} Chebyshev distance
 */
export const distanceChebyshev2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): number => {
  const absX = Math.abs(xy1[0] - xy2[0]);
  const absY = Math.abs(xy1[1] - xy2[1]);
  return absX >= absY ? absX : absY;
};
