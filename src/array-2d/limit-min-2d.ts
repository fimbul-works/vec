import { clone2D } from "./clone-2d.js";
import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Limits the maximum magnitude of a 2DArrayVector.
 * @param xy - Vector as `[x, y]`
 * @param min - Minimum magnitude
 * @param m - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns The limited vector
 */
export const limitMin2D = (xy: ArrayVector2D, min: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m < min ? [(xy[0] / m) * min, (xy[1] / m) * min] : clone2D(xy);
