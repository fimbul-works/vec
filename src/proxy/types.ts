/**
 * Valid target for a ProxyVectorArray.
 */
export type ProxyArrayVectorTarget = Array<number> | Float16Array | Float32Array | Float64Array;

/**
 * A vector-like object.
 */
export interface ArrayVectorLike<D extends number> {
  readonly length: D;
  [Symbol.iterator](): ArrayIterator<number>;
}

export interface ArrayVector2DLike extends ArrayVectorLike<2> {
  0: number;
  1: number;
}

export interface ArrayVector3DLike extends ArrayVectorLike<3> {
  0: number;
  1: number;
  2: number;
}

export interface ArrayVector4DLike extends ArrayVectorLike<4> {
  0: number;
  1: number;
  2: number;
  3: number;
}
