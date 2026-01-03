import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Creates a vector pointing from the first vector to the second vector, maintaining the magnitude of the first vector.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]` (source direction)
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]` (target direction)
 * @param {number} [m1] - Optional current magnitude of the first vector (default: `magnitude3D(xyz1)`)
 * @param {number} [m2] - Optional current magnitude of the second vector (default: `magnitude3D(xyz2)`)
 * @returns {ArrayVector3D} The look-at vector
 */
export const lookAt3D = (
  xyz1: ArrayVector3D,
  xyz2: ArrayVector3D,
  m1: number = magnitude3D(xyz1),
  m2: number = magnitude3D(xyz2),
): ArrayVector3D => [(xyz2[0] / m2) * m1, (xyz2[1] / m2) * m1, (xyz2[2] / m2) * m1];
