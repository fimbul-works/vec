import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Limits the maximum magnitude of a 2D vector.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @param {number} max - Maximum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns {ArrayVector2D} The limited vector
 */
export const limitMax2D = (xy: ArrayVector2D, max: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m > max ? [(xy[0] / m) * max, (xy[1] / m) * max] : xy;
