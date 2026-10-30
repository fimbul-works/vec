/**
 * Valid target for a ProxyVectorArray.
 */
export type ProxyArrayVectorTarget = Array<number> | Float16Array | Float32Array | Float64Array;

export interface XYObject {
  x: number;
  y: number;
}

export interface XYZObject {
  x: number;
  y: number;
  z: number;
}

export interface XYZWObject {
  x: number;
  y: number;
  z: number;
  w: number;
}
