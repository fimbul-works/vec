import type { ArrayVector3DShape } from "../types.js";

/**
 * 3D vector as an array.
 */
export type ArrayVector3D = [number, number, number];

/**
 * 3D vector as an array-like object.
 */
export type ArrayVector3DLike = ArrayVector3D | ArrayVector3DShape;
