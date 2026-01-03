import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the squared Euclidean distance between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {number} Squared distance
 */
export const distanceSq2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number =>
  (xy2[0] - xy1[0]) ** 2 + (xy2[1] - xy1[1]) ** 2;
