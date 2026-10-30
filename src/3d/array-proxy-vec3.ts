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
   * Targt array.
   */
  #t: T;

  /**
   * Starting offset in target array.
   */
  #o: number;

  /**
   * Gap between components (stride).
   */
  #s: number;

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
   * Previous values.
   */
  #prev: Float64Array = new Float64Array([0, 0, 0]);

  /**
   * Magniude.
   */
  #mag = 0;

  /**
   * @param target - The target array.
   * @param offset - The offset of the array.
   * @param stride - The stride between indices.
   */
  constructor(target: T, offset: number, stride: number) {
    this.#t = target;
    this.#o = offset;
    this.#s = stride;
    this.calculateIndices();
  }

  /**
   * Set the proxy target.
   * @param target - The target array.
   * @param offset - The offset in the array.
   * @param stride - The stride between positions.
   * @throws Error when z-component is out of target array bounds.
   */
  setTarget(target: T, offset: number, stride: number = 0): this {
    this.#t = target;
    this.#o = offset;
    this.#s = stride;
    this.calculateIndices();
    return this;
  }

  /**
   * Get the current offset in the target array.
   */
  get offset(): number {
    return this.#o;
  }

  /**
   * Set a new offset.
   * @param offset - The offset in the target array.
   * @throws Error when z-component is out of target bounds.
   */
  set offset(offset) {
    this.#o = offset;
    this.calculateIndices();
  }

  /**
   * Calculate indices in target array.
   * @param offset - Starting offset in the array.
   * @throws Error when z-component is out of target bounds.
   */
  private calculateIndices(): void {
    const x = this.#o;
    const stride = this.#s;
    const y = x + stride + 1;
    const z = x + stride * 2 + 2;
    if (this.#t[this.#iy] >= this.#t.length) throw new Error("Index out of bounds");
    this.#t[this.#ix] = x;
    this.#t[this.#iy] = y;
    this.#t[this.#iz] = z;
  }

  /**
   * Gets the x-component of the vector.
   * @returns The x-component.
   */
  get x(): number {
    return this.#t[this.#ix];
  }

  /**
   * Sets the x-component of the vector.
   * @param x - The new x-component.
   */
  set x(x: number) {
    this.#t[this.#ix] = x;
  }

  /**
   * Gets the y-component of the vector.
   * @returns The y-component.
   */
  get y(): number {
    return this.#t[this.#iy];
  }

  /**
   * Sets the y-component of the vector.
   * @param y - The new y-component.
   */
  set y(y: number) {
    this.#t[this.#iy] = y;
  }

  /**
   * Gets the z-component of the vector.
   * @returns The z-component.
   */
  get z(): number {
    return this.#t[this.#iz];
  }

  /**
   * Sets the z-component of the vector.
   * @param z - The new z-component.
   */
  set z(z: number) {
    this.#t[this.#iz] = z;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y and z components of the vector.
   */
  get xyz(): ArrayVector3D {
    return [this.#t[this.#ix], this.#t[this.#iy], this.#t[this.#iz]];
  }

  /**
   * Sets all components of the vector at once.
   * @param xyz - An array containing the new x, y and z components.
   */
  set xyz(xyz: ArrayVector3D) {
    this.#t[this.#ix] = xyz[0] ?? 0;
    this.#t[this.#iy] = xyz[1] ?? 0;
    this.#t[this.#iz] = xyz[2] ?? 0;
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   */
  get magnitude(): number {
    const x = this.#t[this.#ix],
      y = this.#t[this.#iy],
      z = this.#t[this.#iz];
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
    this.#t[this.#ix] = (this.#t[this.#ix] / M) * m;
    this.#t[this.#iy] = (this.#t[this.#iy] / M) * m;
    this.#t[this.#iz] = (this.#t[this.#iz] / M) * m;
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
    return this.#t[this.#ix];
  }

  /**
   * Sets the Red-component of a Color.
   * @param r - The new Red-component.
   * @returns {void}
   */
  set r(r: number) {
    this.#t[this.#ix] = r;
  }

  /**
   * Gets the Green-component of a Color.
   * @returns The Green-component.
   */
  get g() {
    return this.#t[this.#iy];
  }

  /**
   * Sets the Green-component of the Color.
   * @param g - The new Green-component.
   * @returns {void}
   */
  set g(g: number) {
    this.#t[this.#iy] = g;
  }

  /**
   * Gets the Blue-component of the color.
   * @returns The Blue-component.
   */
  get b() {
    return this.#t[this.#iz];
  }

  /**
   * Sets the Blue-component of the Color.
   * @param b - The new Blue-component.
   */
  set b(b: number) {
    this.#t[this.#iz] = b;
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
    return atan2(sqrt(this.#t[this.#iy] ** 2 + this.#t[this.#iz] ** 2), this.#t[this.#ix]);
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(sqrt(this.#t[this.#iz] ** 2 + this.#t[this.#ix] ** 2), this.#t[this.#iy]);
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(sqrt(this.#t[this.#ix] ** 2 + this.#t[this.#iy] ** 2), this.#t[this.#iz]);
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec3Like): this {
    this.#t[this.#ix] += v.x;
    this.#t[this.#iy] += v.y;
    this.#t[this.#iz] += v.z;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec3Like): this {
    this.#t[this.#ix] -= v.x;
    this.#t[this.#iy] -= v.y;
    this.#t[this.#iz] -= v.z;
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec3Like): this {
    this.#t[this.#ix] *= v.x;
    this.#t[this.#iy] *= v.y;
    this.#t[this.#iz] *= v.z;
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec3Like): this {
    this.#t[this.#ix] = this.#t[this.#ix] / v.x;
    this.#t[this.#iy] = this.#t[this.#iy] / v.y;
    this.#t[this.#iz] = this.#t[this.#iz] / v.z;
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
    return acos((this.#t[this.#ix] * v.x + this.#t[this.#iy] * v.y + this.#t[this.#iz] * v.z) / (M * vM));
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
      this.#t[this.#ix] = (this.#t[this.#ix] / M) * max;
      this.#t[this.#iy] = (this.#t[this.#iy] / M) * max;
      this.#t[this.#iz] = (this.#t[this.#iz] / M) * max;
    } else if (M < min) {
      this.#t[this.#ix] = (this.#t[this.#ix] / M) * min;
      this.#t[this.#iy] = (this.#t[this.#iy] / M) * min;
      this.#t[this.#iz] = (this.#t[this.#iz] / M) * min;
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec3 instance with the same components.
   */
  clone() {
    return new Vec3(this.#t[this.#ix], this.#t[this.#iy], this.#t[this.#iz]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec3Like): this {
    this.#t[this.#ix] = v.x;
    this.#t[this.#iy] = v.y;
    this.#t[this.#iz] = v.z;
    return this;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec3Like): number {
    return this.#t[this.#ix] * v.x + this.#t[this.#iy] * v.y + this.#t[this.#iz] * v.z;
  }

  /**
   * Calculates cross product between this vector and another vector.
   * @param v - The other vector.
   * @returns `this` instance for method chaining.
   */
  cross(v: Vec3Like): this {
    const x = this.#t[this.#ix];
    const y = this.#t[this.#iy];
    const z = this.#t[this.#iz];
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    this.#t[this.#ix] = y * vZ - z * vY;
    this.#t[this.#iy] = z * vX - x * vZ;
    this.#t[this.#iz] = x * vY - y * vX;
    return this;
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns `this` instance for method chaining.
   */
  reflect(normal: Vec3Like): this {
    const dot = this.#t[this.#ix] * normal.x + this.#t[this.#iy] * normal.y + this.#t[this.#iz] * normal.z;
    this.#t[this.#ix] -= 2 * dot * normal.x;
    this.#t[this.#iy] -= 2 * dot * normal.y;
    this.#t[this.#iz] -= 2 * dot * normal.z;
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec3Like): number {
    return sqrt((this.#t[this.#ix] - v.x) ** 2 + (this.#t[this.#iy] - v.y) ** 2 + (this.#t[this.#iz] - v.z) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec3Like): number {
    const absX = abs(this.#t[this.#ix] - v.x);
    const absY = abs(this.#t[this.#iy] - v.y);
    const absZ = abs(this.#t[this.#iz] - v.z);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec3Like): number {
    return abs(this.#t[this.#ix] - v.x) + abs(this.#t[this.#iy] - v.y) + abs(this.#t[this.#iz] - v.z);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec3Like, p: number): number {
    return (
      (abs(this.#t[this.#ix] - v.x) ** p + abs(this.#t[this.#iy] - v.y) ** p + abs(this.#t[this.#iz] - v.z) ** p) **
      (1 / p)
    );
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec3Like): number {
    return (this.#t[this.#ix] - v.x) ** 2 + (this.#t[this.#iy] - v.y) ** 2 + (this.#t[this.#iz] - v.z) ** 2;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.#t[this.#ix];
    const y = this.#t[this.#iy];
    const z = this.#t[this.#iz];
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity || z === Infinity || z === -Infinity;
  }

  /**
   * Checks if this vector has NaN components.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.#t[this.#ix]) || Number.isNaN(this.#t[this.#iy]) || Number.isNaN(this.#t[this.#iz]);
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return this.#t[this.#ix] === 0 && this.#t[this.#iy] === 0 && this.#t[this.#iz] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  limitMax(max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.#t[this.#ix] = (this.#t[this.#ix] / M) * max;
      this.#t[this.#iy] = (this.#t[this.#iy] / M) * max;
      this.#t[this.#iz] = (this.#t[this.#iz] / M) * max;
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
      this.#t[this.#ix] = (this.#t[this.#ix] / M) * min;
      this.#t[this.#iy] = (this.#t[this.#iy] / M) * min;
      this.#t[this.#iz] = (this.#t[this.#iz] / M) * min;
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
    this.#t[this.#ix] = (v.x / vM) * M;
    this.#t[this.#iy] = (v.y / vM) * M;
    this.#t[this.#iz] = (v.z / vM) * M;
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.#t[this.#ix] *= -1;
    this.#t[this.#iy] *= -1;
    this.#t[this.#iz] *= -1;
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns `this` instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.#t[this.#ix] /= M;
    this.#t[this.#iy] /= M;
    this.#t[this.#iz] /= M;
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
    const f = M * cos(acos((this.#t[this.#ix] * vX + this.#t[this.#iy] * vY + this.#t[this.#iz] * vZ) / (M * vM)));
    this.#t[this.#ix] = (vX / vM) * f;
    this.#t[this.#iy] = (vY / vM) * f;
    this.#t[this.#iz] = (vZ / vM) * f;
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
    const y = this.#t[this.#iy];
    const z = this.#t[this.#iz];
    this.#t[this.#iy] = y * cosPhi - z * sinPhi;
    this.#t[this.#iz] = y * sinPhi + z * cosPhi;
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
    const x = this.#t[this.#ix];
    const z = this.#t[this.#iz];
    this.#t[this.#ix] = x * cosPhi + z * sinPhi;
    this.#t[this.#iz] = x * sinPhi + z * cosPhi;
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
    const x = this.#t[this.#ix];
    const y = this.#t[this.#iy];
    this.#t[this.#ix] = x * cosPhi - y * sinPhi;
    this.#t[this.#iy] = x * sinPhi + y * cosPhi;
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec3Like): boolean {
    return this.#t[this.#ix] === v.x && this.#t[this.#iy] === v.y && this.#t[this.#iz] === v.z;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec3Like): boolean {
    return this.#t[this.#ix] === -v.x && this.#t[this.#iy] === -v.y && this.#t[this.#iz] === -v.z;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec3Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#t[this.#ix] - v.x) <= epsilon &&
      abs(this.#t[this.#iy] - v.y) <= epsilon &&
      abs(this.#t[this.#iz] - v.z) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.#t[this.#ix] *= c;
    this.#t[this.#iy] *= c;
    this.#t[this.#iz] *= c;
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.#t[this.#ix] = 0;
    this.#t[this.#iy] = 0;
    this.#t[this.#iz] = 0;
    return this;
  }

  /**
   * Iterator over this vector's components.
   * @yields The x, y and z components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.#t[this.#ix];
    yield this.#t[this.#iy];
    yield this.#t[this.#iz];
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "ArrayProxyVec3(x, y, z)".
   */
  toString(): string {
    return `ArrayProxyVec3(${this.#t[this.#ix]}, ${this.#t[this.#iy]}, ${this.#t[this.#iz]})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x, y and z properties.
   */
  toObject(): XYZObject {
    return { x: this.#t[this.#ix], y: this.#t[this.#iy], z: this.#t[this.#iz] };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYZObject {
    return this.toObject();
  }
}
