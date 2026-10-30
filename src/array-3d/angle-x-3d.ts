import type { ArrayVector3D } from "./types.js";

/**
 * Gets the angle between a 3DArrayVector and the positive x-axis in radians.
 * @param xyz - Vector as `[x, y, z]`
 * @returns Angle in radians, always in the range [0, 2π)
 */
export const angleX3D = (xyz: ArrayVector3D): number => Math.atan2(Math.sqrt(xyz[1] ** 2 + xyz[2] ** 2), xyz[0]);
