import { clone2D } from "./clone-2d.js";
import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Limits the maximum magnitude of a 2DArrayVector.
 * @param xy - Vector as `[x, y]`
 * @param max - Maximum magnitude
 * @param m - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns The limited vector
 */
export const limitMax2D = (xy: ArrayVector2D, max: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m > max ? [(xy[0] / m) * max, (xy[1] / m) * max] : clone2D(xy);
