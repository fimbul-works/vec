import { dot3D } from "./dot-3d.js";
import type { ArrayVector3D, ArrayVector3DLike } from "./types.js";

/**
 * Reflects a vector across a normal vector.
 * The normal vector should be normalized (unit length).
 * @param {ArrayVector3DLike} xyz - Vector as `[x, y, z]` to reflect
 * @param {ArrayVector3DLike} normal - Normal vector to reflect across (must be normalized)
 * @returns {ArrayVector3D} The reflected vector
 */
export const reflect3D = (xyz: ArrayVector3DLike, normal: ArrayVector3DLike): ArrayVector3D => {
  const dot = dot3D(xyz, normal);
  return [xyz[0] - 2 * dot * normal[0], xyz[1] - 2 * dot * normal[1], xyz[2] - 2 * dot * normal[2]];
};
