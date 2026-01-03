import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Sets the magnitude (length) of a 3D vector, maintaining its direction.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @param {number} newMagnitude - New magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns {ArrayVector3D} The adjusted vector
 */
export const setMagnitude3D = (
  xyz: ArrayVector3D,
  newMagnitude: number,
  m: number = magnitude3D(xyz),
): ArrayVector3D => [(xyz[0] / m) * newMagnitude, (xyz[1] / m) * newMagnitude, (xyz[2] / m) * newMagnitude];
