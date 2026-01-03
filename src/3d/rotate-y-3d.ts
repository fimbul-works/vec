import type { ArrayVector3D } from "./types";

/**
 * Rotates a 3D vector around the y-axis.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @param {number} phi - Angle of rotation in radians
 * @param {ArrayVector3D} axis - Rotation axis point (default: `[0, 0, 0]`)
 * @returns {ArrayVector3D} The rotated vector
 */
export const rotateY3D = (xyz: ArrayVector3D, phi: number, axis: ArrayVector3D = [0, 0, 0]): ArrayVector3D => {
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  if (axis[0] === 0 && axis[1] === 0 && axis[2] === 0) {
    return [xyz[0] * cosPhi + xyz[2] * sinPhi, xyz[1], -xyz[0] * sinPhi + xyz[2] * cosPhi];
  }
  // Translate point to origin (relative to axis)
  const translatedX = xyz[0] - axis[0];
  const translatedZ = xyz[2] - axis[2];
  // Rotate around origin
  const rotatedX = translatedX * cosPhi + translatedZ * sinPhi;
  const rotatedZ = -translatedX * sinPhi + translatedZ * cosPhi;
  // Translate back
  return [rotatedX + axis[0], xyz[1], rotatedZ + axis[2]];
};
