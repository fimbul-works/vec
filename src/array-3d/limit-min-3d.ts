import { clone3D } from "./clone-3d.js";
import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Limits the minimum magnitude of a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @param min - Minimum magnitude
 * @param m - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns The adjusted vector
 */
export const limitMin3D = (xyz: ArrayVector3D, min: number, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m < min ? [(xyz[0] / m) * min, (xyz[1] / m) * min, (xyz[2] / m) * min] : clone3D(xyz);
