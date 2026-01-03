import { dot4D } from "./dot-4d.js";
import { magnitude4D } from "./magnitude-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Calculates the angle between two 4D vectors.
 * @param {ArrayVector4D} xyzw1 - First vector as `[x, y, z, w]`
 * @param {ArrayVector4D} xyzw2 - Second vector as `[x, y, z, w]`
 * @param {number} [m1] - Optional magnitude of the first vector (default: `magnitude4D(xyzw1)`)
 * @param {number} [m2] - Optional magnitude of the second vector (default: `magnitude4D(xyzw2)`)
 * @returns {number} The angle in radians
 */
export const angleBetween4D = (
  xyzw1: ArrayVector4D,
  xyzw2: ArrayVector4D,
  m1: number = magnitude4D(xyzw1),
  m2: number = magnitude4D(xyzw2),
): number => Math.acos(dot4D(xyzw1, xyzw2) / (m1 * m2));
