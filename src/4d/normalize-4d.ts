import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Normalizes a 4D vector to unit length.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @param {number} [m] - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns {ArrayVector4D} The normalized vector
 */
export const normalize4D = (xyzw: ArrayVector4D, m: number = magnitude4D(xyzw)): ArrayVector4D => [
  xyzw[0] / m,
  xyzw[1] / m,
  xyzw[2] / m,
  xyzw[3] / m,
];
