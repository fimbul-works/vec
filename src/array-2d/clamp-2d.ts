import { clone2D } from "./clone-2d.js";
import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Clamps the magnitude of a 2DArrayVector between a minimum and maximum value.
 * @param xy - Vector as `[x, y]`
 * @param min - Minimum magnitude
 * @param max - Maximum magnitude
 * @param m - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns The clamped vector
 */
export const clamp2D = (xy: ArrayVector2D, min: number, max: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m > max ? [(xy[0] / m) * max, (xy[1] / m) * max] : m < min ? [(xy[0] / m) * min, (xy[1] / m) * min] : clone2D(xy);
