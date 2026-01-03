import { magnitude2D } from "./magnitude-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Projects one 2D vector onto another.
 * @param {ArrayVector2D} xy1 - Vector to project
 * @param {ArrayVector2D} xy2 - Vector to project onto
 * @param {number} [m1] - Optional magnitude of the first vector (default: `magnitude2D(xy1)`)
 * @param {number} [m2] - Optional magnitude of the second vector (default: `magnitude2D(xy2)`)
 * @returns {ArrayVector2D} The projected vector
 */
export const project2D = (
  xy1: ArrayVector2D,
  xy2: ArrayVector2D,
  m1: number = magnitude2D(xy1),
  m2: number = magnitude2D(xy2),
): ArrayVector2D => {
  const f = m1 * Math.cos(Math.atan2(xy1[0] * xy2[1] - xy1[1] * xy2[0], xy1[0] * xy2[0] + xy1[1] * xy2[1]));
  return [(xy2[0] / m2) * f, (xy2[1] / m2) * f];
};
