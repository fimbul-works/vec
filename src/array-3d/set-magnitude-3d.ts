import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Sets the magnitude (length) of a 3DArrayVector, maintaining its direction.
 * @param xyz - Vector as `[x, y, z]`
 * @param newMagnitude - New magnitude
 * @param m - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns The adjusted vector
 */
export const setMagnitude3D = (
  xyz: ArrayVector3D,
  newMagnitude: number,
  m: number = magnitude3D(xyz),
): ArrayVector3D => [(xyz[0] / m) * newMagnitude, (xyz[1] / m) * newMagnitude, (xyz[2] / m) * newMagnitude];
