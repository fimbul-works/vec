import type { ArrayVector3D } from "./types.js";

/**
 * Creates a vector from cylindrical coordinates.
 * @param r - Radius
 * @param phi - Angle in radians
 * @param z - Vector z axis
 * @returns Vector
 */
export const fromCylindricalCoords = (r: number, phi: number, z: number): ArrayVector3D => [
  r * Math.cos(phi),
  r * Math.sin(phi),
  z,
];
