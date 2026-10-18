import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculates the cross product of two 2D vectors.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {number} Cross product
 */
export const cross2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): number => xy1[0] * xy2[1] - xy1[1] * xy2[0];
