import type { ArrayVector2D } from "./types.js";

/**
 * Calculate the Euclidean distance between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {number} Euclidean distance
 */
export const distance2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number =>
  Math.sqrt((xy2[0] - xy1[0]) ** 2 + (xy2[1] - xy1[1]) ** 2);
