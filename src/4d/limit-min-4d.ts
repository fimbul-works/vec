import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Limits the minimum magnitude of a 4D vector.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @param {number} min - Minimum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns {ArrayVector4D} Vector with limited magnitude
 */
export const limitMin4D = (xyzw: ArrayVector4D, min: number, m: number = magnitude4D(xyzw)): ArrayVector4D =>
  m < min ? [(xyzw[0] / m) * min, (xyzw[1] / m) * min, (xyzw[2] / m) * min, (xyzw[3] / m) * min] : xyzw;
