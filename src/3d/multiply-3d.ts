import type { ArrayVector3D, ArrayVector3DLike } from "./types.js";

/**
 * Multiplies one 3D vector with another component-wise.
 * @param {ArrayVector3DLike} xyz1 - First vector as `[x, y, z]`
 * @param {ArrayVector3DLike} xyz2 - Second vector as `[x, y, z]`
 * @returns {ArrayVector3D} The multiplied value
 */
export const multiply3D = (xyz1: ArrayVector3DLike, xyz2: ArrayVector3DLike): ArrayVector3D => [
  xyz1[0] * xyz2[0],
  xyz1[1] * xyz2[1],
  xyz1[2] * xyz2[2],
];
