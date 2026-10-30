import type { ArrayVector2D } from "./types.js";

/**
 * Creates an ArrayVector2D from y-axis angle.
 * @param phi - Angle in radians
 * @param magnitude - Optional magnitude of the vector (default: `1`)
 * @returns Vector
 */
export const fromAngleY2D = (phi: number, magnitude: number = 1): ArrayVector2D => [
  magnitude * -Math.sin(phi),
  magnitude * Math.cos(phi),
];
