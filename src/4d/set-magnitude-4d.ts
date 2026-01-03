import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Sets the magnitude of a 4D vector while maintaining its direction.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @param {number} newMag - The new magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns {ArrayVector4D} Vector with the new magnitude
 */
export const setMagnitude4D = (xyzw: ArrayVector4D, newMag: number, m: number = magnitude4D(xyzw)): ArrayVector4D => [
  (xyzw[0] / m) * newMag,
  (xyzw[1] / m) * newMag,
  (xyzw[2] / m) * newMag,
  (xyzw[3] / m) * newMag,
];
