import type { ArrayVector2D } from "./types.js";

/**
 * Creates an `ArrayVector2D` from polar coordinates.
 * @param phi - Angle in radians
 * @param m - Optional magnitude (default: `1`)
 * @returns Vector
 */
export const fromPolarCoords2D = (phi: number, m: number = 1): ArrayVector2D => [m * Math.cos(phi), m * Math.sin(phi)];
