import { clone3D } from "./clone-3d.js";
import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Limits the maximum magnitude of a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @param max - Maximum magnitude
 * @param m - Optional current magnitude (default: `magnitude3D(xyz)`)
 * @returns The adjusted vector
 */
export const limitMax3D = (xyz: ArrayVector3D, max: number, m: number = magnitude3D(xyz)): ArrayVector3D =>
  m > max ? [(xyz[0] / m) * max, (xyz[1] / m) * max, (xyz[2] / m) * max] : clone3D(xyz);
