import type { ArrayVector2D } from "./types.js";

/**
 * Calculate the squared magnitude of a 2D vector.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {number} Squared magnitude
 */
export const magnitudeSq2D = (xy: ArrayVector2D): number => xy[0] ** 2 + xy[1] ** 2;
