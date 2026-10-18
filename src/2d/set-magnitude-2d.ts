import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Sets the magnitude (length) of a 2D vector, maintaining its direction.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @param {number} newMag - New magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns {ArrayVector2D} The adjusted vector
 */
export const setMagnitude2D = (xy: ArrayVector2DLike, newMag: number, m: number = magnitude2D(xy)): ArrayVector2D => [
  (xy[0] / m) * newMag,
  (xy[1] / m) * newMag,
];
