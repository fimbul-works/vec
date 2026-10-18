import { clone3D } from "./clone-3d.js";
import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D, ArrayVector3DLike } from "./types.js";

/**
 * Limits the minimum magnitude of a 3D vector.
 * @param {ArrayVector3DLike} xyz - Vector as `[x, y, z]`
 * @param {number} min - Minimum magnitude
 * @param {number} [m] - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns {ArrayVector3D} The adjusted vector
 */
export const limitMin3D = (xyz: ArrayVector3DLike, min: number, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m < min ? [(xyz[0] / m) * min, (xyz[1] / m) * min, (xyz[2] / m) * min] : clone3D(xyz);
