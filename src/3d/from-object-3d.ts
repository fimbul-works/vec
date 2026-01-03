import type { ArrayVector3D } from "./types.js";

/**
 * Creates an ArrayVector3D from an object with x, y and z properties.
 * @param {{ x: number; y: number; z: number }} vector3D - Object with x, y and z properties
 * @returns {ArrayVector3D} Vector
 */
export const fromObject3D = ({ x, y, z }: { x: number; y: number; z: number }): ArrayVector3D => [x, y, z];
