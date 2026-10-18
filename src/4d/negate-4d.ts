import type { ArrayVector4D, ArrayVector4DLike } from "./types.js";

/**
 * Negates a 4D vector.
 * @param {ArrayVector4DLike} xyzw - Vector as `[x, y, z, w]`
 * @returns {ArrayVector4D} The negated vector
 */
export const negate4D = (xyzw: ArrayVector4DLike): ArrayVector4D => [-xyzw[0], -xyzw[1], -xyzw[2], -xyzw[3]];
