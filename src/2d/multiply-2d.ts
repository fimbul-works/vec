import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Multiplies one 2D vector with another component-wise.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {ArrayVector2D} The multiplied vector
 */
export const multiply2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): ArrayVector2D => [
  xy1[0] * xy2[0],
  xy1[1] * xy2[1],
];
