import type { ArrayVector2D } from "./types.js";

/**
 * Divides one 2D vector with another.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]`
 * @returns {ArrayVector2D} The divided value
 */
export const divide2D = (xy1: ArrayVector2D, xy2: ArrayVector2D): ArrayVector2D => [
  xy2[0] === 0 ? Number.POSITIVE_INFINITY : xy1[0] / xy2[0],
  xy2[1] === 0 ? Number.POSITIVE_INFINITY : xy1[1] / xy2[1],
];
