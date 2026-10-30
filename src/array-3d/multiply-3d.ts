import type { ArrayVector3D } from "./types.js";

/**
 * Multiplies one 3DArrayVector with another component-wise.
 * @param xyz1 - First vector as `[x, y, z]`
 * @param xyz2 - Second vector as `[x, y, z]`
 * @returns The multiplied value
 */
export const multiply3D = (xyz1: ArrayVector3D, xyz2: ArrayVector3D): ArrayVector3D => [
  xyz1[0] * xyz2[0],
  xyz1[1] * xyz2[1],
  xyz1[2] * xyz2[2],
];
