import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculates the squared Euclidean distance between two 2D vectors.
 * @param {ArrayVector2DLike} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2DLike} xy2 - Second vector as `[x, y]`
 * @returns {number} Squared distance
 */
export const distanceSq2D = (xy1: ArrayVector2DLike, xy2: ArrayVector2DLike): number =>
  (xy2[0] - xy1[0]) ** 2 + (xy2[1] - xy1[1]) ** 2;
