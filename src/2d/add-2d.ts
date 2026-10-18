import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Adds one 2D vectors.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {ArrayVector2D} The sum of the vectors
 */
export const add2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): ArrayVector2D => [
  xy1[0] + xy2[0],
  xy1[1] + xy2[1],
];
