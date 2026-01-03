import { dot3D } from "./dot-3d";
import type { ArrayVector3D } from "./types";

/**
 * Reflects a vector across a normal vector.
 * The normal vector should be normalized (unit length).
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]` to reflect
 * @param {ArrayVector3D} normal - Normal vector to reflect across (must be normalized)
 * @returns {ArrayVector3D} The reflected vector
 */
export const reflect3D = (xyz: ArrayVector3D, normal: ArrayVector3D): ArrayVector3D => {
  const dot = dot3D(xyz, normal);
  return [xyz[0] - 2 * dot * normal[0], xyz[1] - 2 * dot * normal[1], xyz[2] - 2 * dot * normal[2]];
};
