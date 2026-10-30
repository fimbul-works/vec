import { dot4D } from "./dot-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Reflects a 4DArrayVector across a normal vector.
 * The normal vector should be normalized (unit length).
 * @param xyzw - Vector as `[x, y, z, w]`
 * @param normal - Normal vector (must be normalized)
 * @returns The reflected vector
 */
export const reflect4D = (xyzw: ArrayVector4D, normal: ArrayVector4D): ArrayVector4D => {
  const dot = dot4D(xyzw, normal);
  return [
    xyzw[0] - 2 * dot * normal[0],
    xyzw[1] - 2 * dot * normal[1],
    xyzw[2] - 2 * dot * normal[2],
    xyzw[3] - 2 * dot * normal[3],
  ];
};
