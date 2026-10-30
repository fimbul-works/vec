import type { ArrayVector4D } from "./types.js";

/**
 * Clone a 4DArrayVector.
 * @param xyzw - Vector as `[x, y, z, w]`
 * @returns The cloned vector
 */
export const clone4D = (xyzw: ArrayVector4D): ArrayVector4D => [xyzw[0], xyzw[1], xyzw[2], xyzw[3]];
