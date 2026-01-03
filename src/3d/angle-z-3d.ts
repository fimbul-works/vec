import type { ArrayVector3D } from "./types";

/**
 * Gets the angle between a 3D vector and the positive z-axis in radians.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @returns {number} Angle in radians, always in the range [0, 2π)
 */
export const angleZ3D = (xyz: ArrayVector3D): number => Math.atan2(Math.sqrt(xyz[0] ** 2 + xyz[1] ** 2), xyz[2]);
