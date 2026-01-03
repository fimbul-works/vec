import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the Manhattan distance between two 2D vectors.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {number} Manhattan distance
 */
export const distanceManhattan2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): number =>
  Math.abs(xy2[0] - xy1[0]) + Math.abs(xy2[1] - xy1[1]);
