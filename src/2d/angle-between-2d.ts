import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the angle between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {number} Angle between the vectors in radians
 */
export const angleBetween2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number =>
  Math.atan2(xy1[0] * xy2[1] - xy1[1] * xy2[0], xy1[0] * xy2[0] + xy1[1] * xy2[1]);
