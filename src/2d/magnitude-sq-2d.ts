import type { ArrayVector2DLike } from "./types.js";

/**
 * Calculate the squared magnitude of a 2D vector.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {number} Squared magnitude
 */
export const magnitudeSq2D = (xy: ArrayVector2DLike): number => xy[0] ** 2 + xy[1] ** 2;
