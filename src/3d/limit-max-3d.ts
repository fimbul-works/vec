import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Limits the maximum magnitude of a 3D vector.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @param {number} max - Maximum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns {ArrayVector3D} The adjusted vector
 */
export const limitMax3D = (xyz: ArrayVector3D, max: number, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m > max ? [(xyz[0] / m) * max, (xyz[1] / m) * max, (xyz[2] / m) * max] : xyz;
