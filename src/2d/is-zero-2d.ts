import type { ArrayVector2DLike } from "./types.js";

/**
 * Checks if a vector is zero.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @returns {boolean} `true` if the vector is zero, `false` otherwise
 */
export const isZero2D = (xy: ArrayVector2DLike): boolean => xy[0] === 0 && xy[1] === 0;
