import type { ArrayVector4D } from "./types.js";

/**
 * Checks if a 4D vector is zero.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @returns {boolean} `true` if vector is zero, `false` otherwise
 */
export const isZero4D = (xyzw: ArrayVector4D): boolean =>
  xyzw[0] === 0 && xyzw[1] === 0 && xyzw[2] === 0 && xyzw[3] === 0;
