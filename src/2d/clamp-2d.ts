import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Clamps the magnitude of a 2D vector between a minimum and maximum value.
 * @param {ArrayVector2D} xy - Vector as `[x, y]`
 * @param {number} min - Minimum magnitude
 * @param {number} max - Maximum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude2D(xy)`)
 * @returns {ArrayVector2D} The clamped vector
 */
export const clamp2D = (xy: ArrayVector2D, min: number, max: number, m: number = magnitude2D(xy)): ArrayVector2D =>
  m > max ? [(xy[0] / m) * max, (xy[1] / m) * max] : m < min ? [(xy[0] / m) * min, (xy[1] / m) * min] : xy;
