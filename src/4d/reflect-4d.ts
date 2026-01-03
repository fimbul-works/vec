import { dot4D } from "./dot-4d.js";
import type { ArrayVector4D } from "./types.js";

/**
 * Reflects a 4D vector across a normal vector.
 * The normal vector should be normalized (unit length).
 * @param {ArrayVector4D} xyzw - Vector as `[x, y, z, w]`
 * @param {ArrayVector4D} normal - Normal vector (must be normalized)
 * @returns {ArrayVector4D} The reflected vector
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
