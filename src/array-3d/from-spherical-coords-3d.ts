import type { ArrayVector3D } from "./types.js";

/**
 * Creates a 3DArrayVector from spherical coordinates.
 * @param theta - First angle
 * @param phi - Second angle
 * @param m - Optional magnitude (default: `1`)
 * @returns Vector
 */
export const fromSphericalCoords3D = (theta: number, phi: number, m: number = 1): ArrayVector3D => [
  m * Math.sin(theta) * Math.cos(phi),
  m * Math.sin(theta) * Math.sin(phi),
  m * Math.cos(theta),
];
