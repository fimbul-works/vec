import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D, ArrayVector2DLike } from "./types.js";

/**
 * Normalize a 2D vector.
 * @param {ArrayVector2DLike} xy - Vector as `[x, y]`
 * @param {number} [m] - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns {ArrayVector2D} The normalized vector
 */
export const normalize2D = (xy: ArrayVector2DLike, m: number = magnitude2D(xy)): ArrayVector2D =>
  m === 0 ? [0, 0] : [xy[0] / m, xy[1] / m];
