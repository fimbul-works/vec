import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Normalize a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @param m - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns The normalized vector
 */
export const normalize3D = (xyz: ArrayVector3D, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m === 0 ? [0, 0, 0] : [xyz[0] / m, xyz[1] / m, xyz[2] / m];
