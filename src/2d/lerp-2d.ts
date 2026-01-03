import type { ArrayVector2D } from "./types.js";

/**
 * Performs linear interpolation between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @param {number} t - Interpolation parameter
 * @returns {ArrayVector2D} The interpolated vector
 */
export const lerp2D = (xy1: ArrayVector2D, xy2: ArrayVector2D, t: number): ArrayVector2D => [
  xy1[0] + (xy2[0] - xy1[0]) * t,
  xy1[1] + (xy2[1] - xy1[1]) * t,
];
