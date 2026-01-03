import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Calculates the 2D vector angle of a vector pointing at another.
 * @param {ArrayVector2D} xy1 - First vector as `[x, y]`
 * @param {ArrayVector2D} xy2 - Second vector as `[x, y]` (target to look at)
 * @param {number} [m1] - Optional current magnitude of the first vector (default: magnitude2D(xy1))
 * @param {number} [m2] - Optional current magnitude of the second vector (default: magnitude2D(xy2))
 * @returns {ArrayVector2D} Vector pointing at the target with the magnitude of xy1
 */
export const lookAt2D = (
  xy1: ArrayVector2D,
  xy2: ArrayVector2D,
  m1: number = magnitude2D(xy1),
  m2: number = magnitude2D(xy2),
): ArrayVector2D => [(xy2[0] / m2) * m1, (xy2[1] / m2) * m1];
