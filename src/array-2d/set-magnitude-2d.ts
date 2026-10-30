import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Sets the magnitude (length) of a 2DArrayVector, maintaining its direction.
 * @param xy - Vector as `[x, y]`
 * @param newMag - New magnitude
 * @param m - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns The adjusted vector
 */
export const setMagnitude2D = (xy: ArrayVector2D, newMag: number, m: number = magnitude2D(xy)): ArrayVector2D => [
  (xy[0] / m) * newMag,
  (xy[1] / m) * newMag,
];
