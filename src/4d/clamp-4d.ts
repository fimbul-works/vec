import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Clamps the magnitude of a 4D vector between min and max.
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @param {number} min - Minimum magnitude
 * @param {number} max - Maximum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude4D(xyzw)`)
 * @returns {ArrayVector4D} The clamped vector
 */
export const clamp4D = (xyzw: ArrayVector4D, min: number, max: number, m: number = magnitude4D(xyzw)): ArrayVector4D =>
  m > max
    ? [(xyzw[0] / m) * max, (xyzw[1] / m) * max, (xyzw[2] / m) * max, (xyzw[3] / m) * max]
    : m < min
      ? [(xyzw[0] / m) * min, (xyzw[1] / m) * min, (xyzw[2] / m) * min, (xyzw[3] / m) * min]
      : xyzw;
