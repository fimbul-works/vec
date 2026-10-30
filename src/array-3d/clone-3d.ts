import type { ArrayVector3D } from "./types.js";

/**
 * Clone a 3DArrayVector.
 * @param xyz - Vector as `[x, y, z]`
 * @returns The cloned vector
 */
export const clone3D = (xyz: ArrayVector3D): ArrayVector3D => [xyz[0], xyz[1], xyz[2]];
