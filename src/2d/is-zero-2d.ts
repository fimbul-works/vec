import type { ArrayVector2D } from "./types.js";

/**
 * Checks if a vector is zero.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @returns {boolean} `true` if the vector is zero, `false` otherwise
 */
export const isZero2D = (xy: ArrayVector2D): boolean => xy[0] === 0 && xy[1] === 0;
