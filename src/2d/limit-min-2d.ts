import { clone2D } from "./clone-2d.js";
import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Limits the maximum magnitude of a 2D vector.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @param {number} min - Minimum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns {ArrayVector2D} The limited vector
 */
export const limitMin2D = (xy: ArrayVector2DLike, min: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m < min ? [(xy[0] / m) * min, (xy[1] / m) * min] : clone2D(xy);
