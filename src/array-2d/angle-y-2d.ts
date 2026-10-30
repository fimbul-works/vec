import type { ArrayVector2D } from "./types.js";

/**
 * Gets the angle between a 2DArrayVector and the positive y-axis in radians.
 * @param xy - Vector as `[x, y]`
 * @returns Angle in radians, always in the range [0, 2π)
 */
export const angleY2D = (xy: ArrayVector2D): number => Math.atan2(xy[0], xy[1] + (xy[0] < 0 ? Math.PI : 0));
