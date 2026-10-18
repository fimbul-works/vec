import { clone2D } from "./clone-2d.js";
import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Limits the maximum magnitude of a 2D vector.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @param {number} max - Maximum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns {ArrayVector2D} The limited vector
 */
export const limitMax2D = (xy: ArrayVector2DLike, max: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m > max ? [(xy[0] / m) * max, (xy[1] / m) * max] : clone2D(xy);
