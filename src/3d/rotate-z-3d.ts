import type { ArrayVector3D } from "./types";

/**
 * Rotates a 3D vector around the z-axis.
 * @param {ArrayVector3D} xyz - Vector as `[x, y, z]`
 * @param {number} phi - Angle of rotation in radians
 * @param {ArrayVector3D} axis - Rotation axis point (default: `[0, 0, 0]`)
 * @returns {ArrayVector3D} The rotated vector
 */
export const rotateZ3D = (xyz: ArrayVector3D, phi: number, axis: ArrayVector3D = [0, 0, 0]): ArrayVector3D => {
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  if (axis[0] === 0 && axis[1] === 0 && axis[2] === 0) {
    return [xyz[0] * cosPhi - xyz[1] * sinPhi, xyz[0] * sinPhi + xyz[1] * cosPhi, xyz[2]];
  }
  // Translate point to origin (relative to axis)
  const translatedX = xyz[0] - axis[0];
  const translatedY = xyz[1] - axis[1];
  // Rotate around origin
  const rotatedX = translatedX * cosPhi - translatedY * sinPhi;
  const rotatedY = translatedX * sinPhi + translatedY * cosPhi;
  // Translate back
  return [rotatedX + axis[0], rotatedY + axis[1], xyz[2]];
};
