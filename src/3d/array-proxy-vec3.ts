import type { ArrayVector3D } from "../array-3d/types.js";
import type { ProxyArrayVectorTarget, XYZObject } from "../types.js";
import type { Vec3Like } from "./types.js";
import { Vec3 } from "./vec3.js";

const { sin, cos, atan2, sqrt, abs, acos } = Math;

/**
 * Proxying 3D vector into an interleaved array.
 */
export class ArrayProxyVec3<T extends ProxyArrayVectorTarget> implements Vec3Like {
  /**
   * Previous values.
   */
  #prev = new Float64Array([0, 0, 0]);
  /**
   * Magnitude.
   */
  #mag = 0;
  /**
   * Target array.
   */
  #target: T;
  /**
   * Starting offset in target array.
   */
  #offset: number;
  /**
   * Gap between components (stride).
   */
  #gap: number;
  /**
   * Index for the x-componet.
   */
  #ix: number = 0;
  /**
   * Index for the y-componet.
   */
  #iy: number = 1;
  /**
   * Index for the y-componet.
   */
  #iz: number = 2;

  /**
   * Callback to be invoked whenever properties change.
   */
  public onChange?: (v: ArrayProxyVec3<T>) => void;

  /**
   * @param target - The target array.
   * @param offset - The offset of the array.
   * @param gap - The stride between indices.
   * @throws Error when offset is negative, or not an integer.
   * @throws Error when gap is negative, or not an integer.
   * @throws Error when z-component is out of target array bounds.
   */
  constructor(target: T, offset: number, gap: number = 0) {
    this.#target = target;
    this.#offset = offset;
    this.#gap = gap;
    this.bind(target, offset, gap);
  }

  /**
   * Set the proxy target.
   * @param target - The target array.
   * @param offset - The offset in the array.
   * @param gap - The gap (stride) between positions.
   * @throws Error when offset is negative, or not an integer.
   * @throws Error when gap is negative, or not an integer.
   * @throws Error when z-component is out of target array bounds.
   */
  public bind(target: T, offset: number, gap: number): void {
    if (!Number.isInteger(offset) || offset < 0) throw new Error(`Invalid offset: ${offset}`);
    if (!Number.isInteger(gap) || gap < 0) throw new Error(`Invalid gap: ${gap}`);

    const z = offset + (gap + 1) * 2;
    if (z >= target.length) throw new Error(`Index out of bounds: ${z} >= ${target.length}`);

    this.#target = target;
    this.#offset = offset;
    this.#gap = gap;
    this.#ix = offset;
    this.#iy = offset + gap + 1;
    this.#iz = z;
  }

  /**
   * Get the starting offset in the target array.
   */
  get offset(): number {
    return this.#offset;
  }

  /**
   * Set a new starting offset.
   * @param offset - The offset in the target array.
   * @throws Error when offset is negative, or not an integer.
   * @throws Error when z-component is out of target bounds.
   */
  set offset(offset) {
    this.bind(this.#target, offset, this.#gap);
    this.onChange?.(this);
  }

  /**
   * Range of min and max component indices.
   */
  get indexRange(): readonly [number, number] {
    return [this.#ix, this.#iz] as const;
  }

  /**
   * Gets the x-component of the vector.
   * @returns The x-component.
   */
  get x(): number {
    return this.#target[this.#ix];
  }

  /**
   * Sets the x-component of the vector.
   * @param x - The new x-component.
   */
  set x(x: number) {
    if (this.#target[this.#ix] === x) return;
    this.#target[this.#ix] = x;
    this.onChange?.(this);
  }

  /**
   * Gets the y-component of the vector.
   * @returns The y-component.
   */
  get y(): number {
    return this.#target[this.#iy];
  }

  /**
   * Sets the y-component of the vector.
   * @param y - The new y-component.
   */
  set y(y: number) {
    if (this.#target[this.#iy] === y) return;
    this.#target[this.#iy] = y;
    this.onChange?.(this);
  }

  /**
   * Gets the z-component of the vector.
   * @returns The z-component.
   */
  get z(): number {
    return this.#target[this.#iz];
  }

  /**
   * Sets the z-component of the vector.
   * @param z - The new z-component.
   */
  set z(z: number) {
    if (this.#target[this.#iz] === z) return;
    this.#target[this.#iz] = z;
    this.onChange?.(this);
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y and z components of the vector.
   */
  get xyz(): ArrayVector3D {
    return [this.#target[this.#ix], this.#target[this.#iy], this.#target[this.#iz]];
  }

  /**
   * Sets all components of the vector at once.
   * @param xyz - An array containing the new x, y and z components.
   */
  set xyz(xyz: ArrayVector3D) {
    this.#target[this.#ix] = xyz[0] ?? 0;
    this.#target[this.#iy] = xyz[1] ?? 0;
    this.#target[this.#iz] = xyz[2] ?? 0;
    this.onChange?.(this);
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   */
  get magnitude(): number {
    const { x, y, z } = this;
    if (x !== this.#prev[0] || y !== this.#prev[1] || z !== this.#prev[2]) {
      this.#mag = sqrt(x ** 2 + y ** 2 + z ** 2);
      this.#prev[0] = x;
      this.#prev[1] = y;
      this.#prev[2] = z;
    }
    return this.#mag;
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  set magnitude(m: number) {
    const M = this.magnitude;
    this.#target[this.#ix] = (this.#target[this.#ix] / M) * m;
    this.#target[this.#iy] = (this.#target[this.#iy] / M) * m;
    this.#target[this.#iz] = (this.#target[this.#iz] / M) * m;
    this.onChange?.(this);
  }

  /**
   * Gets the squared magnitude of the vector.
   * This is faster to compute than the actual magnitude and is useful for comparisons.
   * @returns The squared magnitude of the vector.
   */
  get magnitudeSq(): number {
    return this.magnitude ** 2;
  }

  /**
   * Gets the Red-component of a Color.
   * @returns The Red-component.
   */
  get r() {
    return this.#target[this.#ix];
  }

  /**
   * Sets the Red-component of a Color.
   * @param r - The new Red-component.
   * @returns {void}
   */
  set r(r: number) {
    this.x = r;
  }

  /**
   * Gets the Green-component of a Color.
   * @returns The Green-component.
   */
  get g() {
    return this.#target[this.#iy];
  }

  /**
   * Sets the Green-component of the Color.
   * @param g - The new Green-component.
   * @returns {void}
   */
  set g(g: number) {
    this.y = g;
  }

  /**
   * Gets the Blue-component of the color.
   * @returns The Blue-component.
   */
  get b() {
    return this.#target[this.#iz];
  }

  /**
   * Sets the Blue-component of the Color.
   * @param b - The new Blue-component.
   */
  set b(b: number) {
    this.z = b;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y and z components of the vector.
   */
  get rgb(): ArrayVector3D {
    return this.xyz;
  }

  /**
   * Sets all components of the Color at once.
   * @param rgb - An array containing the new Red, Green and Blue components.
   */
  set rgb(rgb: ArrayVector3D) {
    this.xyz = rgb;
  }

  /**
   * Gets the angle between the vector and the positive x-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleX(): number {
    return atan2(sqrt(this.#target[this.#iy] ** 2 + this.#target[this.#iz] ** 2), this.#target[this.#ix]);
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(sqrt(this.#target[this.#iz] ** 2 + this.#target[this.#ix] ** 2), this.#target[this.#iy]);
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(sqrt(this.#target[this.#ix] ** 2 + this.#target[this.#iy] ** 2), this.#target[this.#iz]);
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec3Like): this {
    this.#target[this.#ix] += v.x;
    this.#target[this.#iy] += v.y;
    this.#target[this.#iz] += v.z;
    this.onChange?.(this);
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec3Like): this {
    this.#target[this.#ix] -= v.x;
    this.#target[this.#iy] -= v.y;
    this.#target[this.#iz] -= v.z;
    this.onChange?.(this);
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec3Like): this {
    this.#target[this.#ix] *= v.x;
    this.#target[this.#iy] *= v.y;
    this.#target[this.#iz] *= v.z;
    this.onChange?.(this);
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec3Like): this {
    this.#target[this.#ix] = this.#target[this.#ix] / v.x;
    this.#target[this.#iy] = this.#target[this.#iy] / v.y;
    this.#target[this.#iz] = this.#target[this.#iz] / v.z;
    this.onChange?.(this);
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec3Like): number {
    const M = this.magnitude;
    const vM = v.magnitude;
    return acos(
      (this.#target[this.#ix] * v.x + this.#target[this.#iy] * v.y + this.#target[this.#iz] * v.z) / (M * vM),
    );
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param min - The minimum magnitude.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  clamp(min: number, max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.#target[this.#ix] = (this.#target[this.#ix] / M) * max;
      this.#target[this.#iy] = (this.#target[this.#iy] / M) * max;
      this.#target[this.#iz] = (this.#target[this.#iz] / M) * max;
      this.onChange?.(this);
    } else if (M < min) {
      this.#target[this.#ix] = (this.#target[this.#ix] / M) * min;
      this.#target[this.#iy] = (this.#target[this.#iy] / M) * min;
      this.#target[this.#iz] = (this.#target[this.#iz] / M) * min;
      this.onChange?.(this);
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec3 instance with the same components.
   */
  clone() {
    return new Vec3(this.#target[this.#ix], this.#target[this.#iy], this.#target[this.#iz]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec3Like): this {
    this.#target[this.#ix] = v.x;
    this.#target[this.#iy] = v.y;
    this.#target[this.#iz] = v.z;
    this.onChange?.(this);
    return this;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec3Like): number {
    return this.#target[this.#ix] * v.x + this.#target[this.#iy] * v.y + this.#target[this.#iz] * v.z;
  }

  /**
   * Calculates cross product between this vector and another vector.
   * @param v - The other vector.
   * @returns `this` instance for method chaining.
   */
  cross(v: Vec3Like): this {
    const x = this.#target[this.#ix];
    const y = this.#target[this.#iy];
    const z = this.#target[this.#iz];
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    this.#target[this.#ix] = y * vZ - z * vY;
    this.#target[this.#iy] = z * vX - x * vZ;
    this.#target[this.#iz] = x * vY - y * vX;
    this.onChange?.(this);
    return this;
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns `this` instance for method chaining.
   */
  reflect(normal: Vec3Like): this {
    const dot =
      this.#target[this.#ix] * normal.x + this.#target[this.#iy] * normal.y + this.#target[this.#iz] * normal.z;
    this.#target[this.#ix] -= 2 * dot * normal.x;
    this.#target[this.#iy] -= 2 * dot * normal.y;
    this.#target[this.#iz] -= 2 * dot * normal.z;
    this.onChange?.(this);
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec3Like): number {
    return sqrt(
      (this.#target[this.#ix] - v.x) ** 2 + (this.#target[this.#iy] - v.y) ** 2 + (this.#target[this.#iz] - v.z) ** 2,
    );
  }

  /**
   * Calculates the Chebyshev distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec3Like): number {
    const absX = abs(this.#target[this.#ix] - v.x);
    const absY = abs(this.#target[this.#iy] - v.y);
    const absZ = abs(this.#target[this.#iz] - v.z);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec3Like): number {
    return abs(this.#target[this.#ix] - v.x) + abs(this.#target[this.#iy] - v.y) + abs(this.#target[this.#iz] - v.z);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec3Like, p: number): number {
    return (
      (abs(this.#target[this.#ix] - v.x) ** p +
        abs(this.#target[this.#iy] - v.y) ** p +
        abs(this.#target[this.#iz] - v.z) ** p) **
      (1 / p)
    );
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec3Like): number {
    return (
      (this.#target[this.#ix] - v.x) ** 2 + (this.#target[this.#iy] - v.y) ** 2 + (this.#target[this.#iz] - v.z) ** 2
    );
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.#target[this.#ix];
    const y = this.#target[this.#iy];
    const z = this.#target[this.#iz];
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity || z === Infinity || z === -Infinity;
  }

  /**
   * Checks if this vector has NaN components.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return (
      Number.isNaN(this.#target[this.#ix]) ||
      Number.isNaN(this.#target[this.#iy]) ||
      Number.isNaN(this.#target[this.#iz])
    );
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return this.#target[this.#ix] === 0 && this.#target[this.#iy] === 0 && this.#target[this.#iz] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  limitMax(max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.#target[this.#ix] = (this.#target[this.#ix] / M) * max;
      this.#target[this.#iy] = (this.#target[this.#iy] / M) * max;
      this.#target[this.#iz] = (this.#target[this.#iz] / M) * max;
      this.onChange?.(this);
    }
    return this;
  }

  /**
   * Limits the minimum magnitude of this vector.
   * @param min - The minimum magnitude.
   * @returns `this` instance for method chaining.
   */
  limitMin(min: number): this {
    const M = this.magnitude;
    if (M < min) {
      this.#target[this.#ix] = (this.#target[this.#ix] / M) * min;
      this.#target[this.#iy] = (this.#target[this.#iy] / M) * min;
      this.#target[this.#iz] = (this.#target[this.#iz] / M) * min;
      this.onChange?.(this);
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns `this` instance for method chaining.
   */
  lookAt(v: Vec3Like): this {
    const M = this.magnitude;
    const vM = v.magnitude;
    this.#target[this.#ix] = (v.x / vM) * M;
    this.#target[this.#iy] = (v.y / vM) * M;
    this.#target[this.#iz] = (v.z / vM) * M;
    this.onChange?.(this);
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.#target[this.#ix] *= -1;
    this.#target[this.#iy] *= -1;
    this.#target[this.#iz] *= -1;
    this.onChange?.(this);
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns `this` instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.#target[this.#ix] /= M;
    this.#target[this.#iy] /= M;
    this.#target[this.#iz] /= M;
    this.onChange?.(this);
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns `this` instance for method chaining.
   */
  project(v: Vec3Like): this {
    const M = this.magnitude;
    const vM = v.magnitude;

    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    const f =
      M *
      cos(acos((this.#target[this.#ix] * vX + this.#target[this.#iy] * vY + this.#target[this.#iz] * vZ) / (M * vM)));
    this.#target[this.#ix] = (vX / vM) * f;
    this.#target[this.#iy] = (vY / vM) * f;
    this.#target[this.#iz] = (vZ / vM) * f;
    this.onChange?.(this);
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns `this` instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    const M = this.magnitude;
    this.copy(Vec3.random(random));
    this.magnitude = M;
    this.onChange?.(this);
    return this;
  }

  /**
   * Rotates this vector around the x-axis.
   * @param phi - The angle of rotation in radians.
   * @returns `this` instance for method chaining.
   */
  rotateX(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const y = this.#target[this.#iy];
    const z = this.#target[this.#iz];
    this.#target[this.#iy] = y * cosPhi - z * sinPhi;
    this.#target[this.#iz] = y * sinPhi + z * cosPhi;
    this.onChange?.(this);
    return this;
  }

  /**
   * Rotates this vector around the y-axis.
   * @param phi - The angle of rotation in radians.
   * @returns `this` instance for method chaining.
   */
  rotateY(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const x = this.#target[this.#ix];
    const z = this.#target[this.#iz];
    this.#target[this.#ix] = x * cosPhi + z * sinPhi;
    this.#target[this.#iz] = x * sinPhi + z * cosPhi;
    this.onChange?.(this);
    return this;
  }

  /**
   * Rotates this vector around the z-axis.
   * @param phi - The angle of rotation in radians.
   * @returns `this` instance for method chaining.
   */
  rotateZ(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const x = this.#target[this.#ix];
    const y = this.#target[this.#iy];
    this.#target[this.#ix] = x * cosPhi - y * sinPhi;
    this.#target[this.#iy] = x * sinPhi + y * cosPhi;
    this.onChange?.(this);
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec3Like): boolean {
    return this.#target[this.#ix] === v.x && this.#target[this.#iy] === v.y && this.#target[this.#iz] === v.z;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec3Like): boolean {
    return this.#target[this.#ix] === -v.x && this.#target[this.#iy] === -v.y && this.#target[this.#iz] === -v.z;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec3Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#target[this.#ix] - v.x) <= epsilon &&
      abs(this.#target[this.#iy] - v.y) <= epsilon &&
      abs(this.#target[this.#iz] - v.z) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.#target[this.#ix] *= c;
    this.#target[this.#iy] *= c;
    this.#target[this.#iz] *= c;
    this.onChange?.(this);
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.#target[this.#ix] = 0;
    this.#target[this.#iy] = 0;
    this.#target[this.#iz] = 0;
    this.onChange?.(this);
    return this;
  }

  /**
   * Iterator over this vector's components.
   * @yields The x, y and z components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.#target[this.#ix];
    yield this.#target[this.#iy];
    yield this.#target[this.#iz];
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "ArrayProxyVec3(x, y, z)".
   */
  toString(): string {
    return `ArrayProxyVec3(${this.#target[this.#ix]}, ${this.#target[this.#iy]}, ${this.#target[this.#iz]})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x, y and z properties.
   */
  toObject(): XYZObject {
    return { x: this.#target[this.#ix], y: this.#target[this.#iy], z: this.#target[this.#iz] };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYZObject {
    return this.toObject();
  }
}
