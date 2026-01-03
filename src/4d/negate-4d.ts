import type { ArrayVector4D } from "./types.js";

/**
 * Negates a 4D vector.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @returns {ArrayVector4D} The negated vector
 */
export const negate4D = (xyzw: ArrayVector4D): ArrayVector4D => [-xyzw[0], -xyzw[1], -xyzw[2], -xyzw[3]];
