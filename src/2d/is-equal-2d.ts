import type { ArrayVector2DLike } from "./types.js";

/**
 * Checks if two 2D vectors are equal.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {boolean} `true` if the vectors are equal, `false` otherwise
 */
export const isEqual2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): boolean =>
  xy1[0] === xy2[0] && xy1[1] === xy2[1];
