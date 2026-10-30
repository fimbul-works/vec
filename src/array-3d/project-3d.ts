import { magnitude3D } from "./magnitude-3d.js";
import type { ArrayVector3D } from "./types.js";

/**
 * Projects one 3DArrayVector onto the second.
 * @param xyz1 - Vector to project
 * @param xyz2 - Vector to project onto
 * @param m1 - Optional magnitude of the vector to project (default: `magnitude3D(xyz1)`)
 * @param m2 - Optional magnitude of the vector to project onto (default: `magnitude3D(xyz2)`)
 * @returns The projected vector
 */
export const project3D = (
  xyz1: ArrayVector3D,
  xyz2: ArrayVector3D,
  m1: number = magnitude3D(xyz1),
  m2: number = magnitude3D(xyz2),
): ArrayVector3D => {
  const f = m1 * Math.cos(Math.acos((xyz1[0] * xyz2[0] + xyz1[1] * xyz2[1] + xyz1[2] * xyz2[2]) / (m1 * m2)));
  return [(xyz2[0] / m2) * f, (xyz2[1] / m2) * f, (xyz2[2] / m2) * f];
};
