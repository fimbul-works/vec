import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculates the dot product of two vectors.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {number} Dot product
 */
export const dot2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): number => xy1[0] * xy2[0] + xy1[1] * xy2[1];
