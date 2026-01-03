import { magnitude3D } from "./magnitude-3d";
import type { ArrayVector3D } from "./types";

/**
 * Calculates the angle between two 3D vectors.
 * @param {ArrayVector3D} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3D} xyz2 - Second vector as `[x, y, z]`
 * @param {number} [m1] - Optional first vector magnitude (default: `magnitude3D(xyz1)`)
 * @param {number} [m2] - Optional second vector magnitude (default: `magnitude3D(xyz2)`)
 * @returns {number} Angle between the vectors in radians
 */
export const angleBetween3D = (
  xyz1: ArrayVector3D,
  xyz2: ArrayVector3D,
  m1: number = magnitude3D(xyz1),
  m2: number = magnitude3D(xyz2),
): number => Math.acos((xyz1[0] * xyz2[0] + xyz1[1] * xyz2[1] + xyz1[2] * xyz2[2]) / (m1 * m2));
