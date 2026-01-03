import type { ArrayVector2D } from "./types.js";

/**
 * Rotates a 2D point around an arbitrary axis point
 * @param {ArrayVector2D} xy - Point to rotate
 * @param {number} phi - Rotation angle in radians
 * @param {ArrayVector2D} axis - Rotation axis point (default: `[0, 0]`)
 * @returns {ArrayVector2D} The rotated vector
 */
export const rotate2D = (xy: ArrayVector2D, phi: number, axis: ArrayVector2D = [0, 0]): ArrayVector2D => {
  const cos = Math.cos(phi);
  const sin = Math.sin(phi);
  // No need to translate if axis is [0, 0]
  if (axis[0] === 0 && axis[1] === 0) {
    return [xy[0] * cos - xy[1] * sin, xy[0] * sin + xy[1] * cos];
  }
  // Translate point to origin (relative to axis)
  const translatedX = xy[0] - axis[0];
  const translatedY = xy[1] - axis[1];
  // Rotate around origin
  const rotatedX = translatedX * cos - translatedY * sin;
  const rotatedY = translatedX * sin + translatedY * cos;
  // Translate back
  return [rotatedX + axis[0], rotatedY + axis[1]];
};
