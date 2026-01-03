import { dot2D } from "./dot-2d.js";
import type { ArrayVector2D } from "./types.js";

/**
 * Reflects the vector across a normal vector.
 * The normal vector should be normalized (unit length).
 * @param {ArrayVector2D} xy - Vector as `[x, y]` to reflect
 * @param {ArrayVector2D} normal - Normal vector to reflect across (must be normalized)
 * @returns {ArrayVector2D} The reflected vector
 */
export const reflect2D = (xy: ArrayVector2D, normal: ArrayVector2D): ArrayVector2D => {
  const dot = dot2D(xy, normal);
  return [xy[0] - 2 * dot * normal[0], xy[1] - 2 * dot * normal[1]];
};
