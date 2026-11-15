import type { ArrayVector4D } from "../array-4d/types.js";
import type { XYZWObject } from "../types.js";
import type { Vec4Like } from "./types.js";

/**
 * Documentation for 4D Vector class.
 * @module Vec4
 */

const { sin, cos, acos, atan2, sqrt, abs, log, PI } = Math;

/**
 * Represents a 4D vector with various operations.
 */
export class Vec4 implements Vec4Like {
  #xyzw = new Float64Array(4);
  #mag = 0;
  #prev = new Float64Array([0, 0, 0, 0]);

  /**
   * Creates a new Vec4 instance.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @param z - The z-coordinate of the vector.
   * @param w - The w-coordinate of the vector.
   */
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.#xyzw[0] = x;
    this.#xyzw[1] = y;
    this.#xyzw[2] = z;
    this.#xyzw[3] = w;
  }

  /**
   * Gets the x-component of the vector.
   * @returns The x-component.
   */
  get x() {
    return this.#xyzw[0];
  }

  /**
   * Sets the x-component of the vector.
   * @param x - The new x-component.
   */
  set x(x: number) {
    this.#xyzw[0] = x;
  }

  /**
   * Gets the y-component of the vector.
   * @returns The y-component.
   */
  get y() {
    return this.#xyzw[1];
  }

  /**
   * Sets the z-component of the vector.
   * @param y - The new z-component.
   */
  set y(y: number) {
    this.#xyzw[1] = y;
  }

  /**
   * Gets the z-component of the vector.
   * @returns The z-component.
   */
  get z() {
    return this.#xyzw[2];
  }

  /**
   * Sets the z-component of the vector.
   * @param z - The new z-component.
   */
  set z(z: number) {
    this.#xyzw[2] = z;
  }

  /**
   * Gets the w-component of the vector.
   * @returns The w-component.
   */
  get w() {
    return this.#xyzw[3];
  }

  /**
   * Sets the w-component of the vector.
   * @param w - The new w-component.
   */
  set w(w: number) {
    this.#xyzw[3] = w;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y, z and w components of the vector.
   */
  get xyzw(): ArrayVector4D {
    return Array.from(this.#xyzw) as ArrayVector4D;
  }

  /**
   * Sets both components of the vector at once.
   * @param xyzw - An array containing the new x, y, z and w components.
   */
  set xyzw(xyzw: ArrayVector4D) {
    this.#xyzw[0] = xyzw[0] ?? 0;
    this.#xyzw[1] = xyzw[1] ?? 0;
    this.#xyzw[2] = xyzw[2] ?? 0;
    this.#xyzw[3] = xyzw[3] ?? 0;
  }

  /**
   * Gets the Red-component of a Color.
   * @returns The Red-component.
   */
  get r() {
    return this.x;
  }

  /**
   * Sets the Red-component of a Color.
   * @param r - The new Red-component.
   */
  set r(r: number) {
    this.x = r;
  }

  /**
   * Gets the Green-component of a Color.
   * @returns The Green-component.
   */
  get g() {
    return this.y;
  }

  /**
   * Sets the Green-component of the Color.
   * @param g - The new Green-component.
   */
  set g(g: number) {
    this.y = g;
  }

  /**
   * Gets the Blue-component of the color.
   * @returns The Blue-component.
   */
  get b() {
    return this.z;
  }

  /**
   * Sets the Blue-component of the Color.
   * @param b - The new Blue-component.
   */
  set b(b: number) {
    this.z = b;
  }

  /**
   * Gets the Alpha-component of the color.
   * @returns The Alpha-component.
   */
  get a() {
    return this.w;
  }

  /**
   * Sets the Alpha-component of the Color.
   * @param a - The new Alpha-component.
   */
  set a(a: number) {
    this.w = a;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the Red, Green, Blue and Alpha components of the Color.
   */
  get rgba(): ArrayVector4D {
    return this.xyzw;
  }

  /**
   * Sets all components of the Color at once.
   * @param rgba - An array containing the new Red, Green, Blue and Alpha components.
   */
  set rgba(rgba: ArrayVector4D) {
    this.xyzw = rgba;
  }

  /**
   * Gets the angle between the vector and the positive x-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleX(): number {
    return atan2(sqrt(this.#xyzw[1] ** 2 + this.#xyzw[2] ** 2 + this.#xyzw[3] ** 2), this.#xyzw[0]);
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(sqrt(this.#xyzw[2] ** 2 + this.#xyzw[3] ** 2 + this.#xyzw[0] ** 2), this.#xyzw[1]);
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(sqrt(this.#xyzw[3] ** 2 + this.#xyzw[0] ** 2 + this.#xyzw[1] ** 2), this.#xyzw[2]);
  }

  /**
   * Gets the angle between the vector and the positive w-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleW(): number {
    return atan2(sqrt(this.#xyzw[0] ** 2 + this.#xyzw[1] ** 2 + this.#xyzw[2] ** 2), this.#xyzw[3]);
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   */
  get magnitude(): number {
    const { x, y, z, w } = this;
    if (x !== this.#prev[0] || y !== this.#prev[1] || z !== this.#prev[2] || w !== this.#prev[3]) {
      this.#mag = sqrt(x ** 2 + y ** 2 + z ** 2 + w ** 2);
      this.#prev[0] = x;
      this.#prev[1] = y;
      this.#prev[2] = z;
      this.#prev[3] = w;
    }
    return this.#mag;
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  set magnitude(m: number) {
    const M = this.magnitude;
    this.#xyzw[0] = (this.#xyzw[0] / M) * m;
    this.#xyzw[1] = (this.#xyzw[1] / M) * m;
    this.#xyzw[2] = (this.#xyzw[2] / M) * m;
    this.#xyzw[3] = (this.#xyzw[3] / M) * m;
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
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec4Like) {
    this.#xyzw[0] += v.x;
    this.#xyzw[1] += v.y;
    this.#xyzw[2] += v.z;
    this.#xyzw[3] += v.w;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec4Like): this {
    this.#xyzw[0] -= v.x;
    this.#xyzw[1] -= v.y;
    this.#xyzw[2] -= v.z;
    this.#xyzw[3] -= v.w;
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec4Like): this {
    this.#xyzw[0] *= v.x;
    this.#xyzw[1] *= v.y;
    this.#xyzw[2] *= v.z;
    this.#xyzw[3] *= v.w;
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec4Like): this {
    this.#xyzw[0] = this.#xyzw[0] / v.x;
    this.#xyzw[1] = this.#xyzw[1] / v.y;
    this.#xyzw[2] = this.#xyzw[2] / v.z;
    this.#xyzw[3] = this.#xyzw[3] / v.w;
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec4Like): number {
    return acos(
      (this.#xyzw[0] * v.x + this.#xyzw[1] * v.y + this.#xyzw[2] * v.z + this.#xyzw[3] * v.w) /
        (this.magnitude * v.magnitude),
    );
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param min - The minimum magnitude.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  clamp(min: number, max: number) {
    const M = this.magnitude;
    if (M > max) {
      this.#xyzw[0] = (this.#xyzw[0] / M) * max;
      this.#xyzw[1] = (this.#xyzw[1] / M) * max;
      this.#xyzw[2] = (this.#xyzw[2] / M) * max;
      this.#xyzw[3] = (this.#xyzw[3] / M) * max;
    } else if (M < min) {
      this.#xyzw[0] = (this.#xyzw[0] / M) * min;
      this.#xyzw[1] = (this.#xyzw[1] / M) * min;
      this.#xyzw[2] = (this.#xyzw[2] / M) * min;
      this.#xyzw[3] = (this.#xyzw[3] / M) * min;
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec4 instance with the same components.
   */
  clone() {
    return new Vec4(this.#xyzw[0], this.#xyzw[1], this.#xyzw[2], this.#xyzw[3]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns This Vec2 instance for method chaining.
   */
  copy(v: Vec4Like) {
    this.#xyzw[0] = v.x;
    this.#xyzw[1] = v.y;
    this.#xyzw[2] = v.z;
    this.#xyzw[3] = v.w;
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec4Like): number {
    return sqrt(
      (this.#xyzw[0] - v.x) ** 2 + (this.#xyzw[1] - v.y) ** 2 + (this.#xyzw[2] - v.z) ** 2 + (this.#xyzw[3] - v.w) ** 2,
    );
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec4Like) {
    const absX = abs(this.#xyzw[0] - v.x);
    const absY = abs(this.#xyzw[1] - v.y);
    const absZ = abs(this.#xyzw[2] - v.z);
    const absW = abs(this.#xyzw[3] - v.w);
    return absX >= absY && absX >= absZ && absX >= absW
      ? absX
      : absY >= absZ && absY >= absW
        ? absY
        : absZ >= absW
          ? absZ
          : absW;
  }

  /**
   * Calculates the Manhattan distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec4Like) {
    return abs(this.#xyzw[0] - v.x) + abs(this.#xyzw[1] - v.y) + abs(this.#xyzw[2] - v.z) + abs(this.#xyzw[3] - v.w);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec4Like, p: number) {
    return (
      (abs(this.#xyzw[0] - v.x) ** p +
        abs(this.#xyzw[1] - v.y) ** p +
        abs(this.#xyzw[2] - v.z) ** p +
        abs(this.#xyzw[3] - v.w) ** p) **
      (1 / p)
    );
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec4Like): number {
    return (
      (this.#xyzw[0] - v.x) ** 2 + (this.#xyzw[1] - v.y) ** 2 + (this.#xyzw[2] - v.z) ** 2 + (this.#xyzw[3] - v.w) ** 2
    );
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec4Like): number {
    return this.#xyzw[0] * v.x + this.#xyzw[1] * v.y + this.#xyzw[2] * v.z + this.#xyzw[3] * v.w;
  }

  /**
   * Reflects this vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns `this` instance for method chaining.
   */
  reflect(normal: Vec4Like): this {
    const dot =
      this.#xyzw[0] * normal.x + this.#xyzw[1] * normal.y + this.#xyzw[2] * normal.z + this.#xyzw[3] * normal.w;
    this.#xyzw[0] -= 2 * dot * normal.x;
    this.#xyzw[1] -= 2 * dot * normal.y;
    this.#xyzw[2] -= 2 * dot * normal.z;
    this.#xyzw[3] -= 2 * dot * normal.w;
    return this;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.#xyzw[0];
    const y = this.#xyzw[1];
    const z = this.#xyzw[2];
    const w = this.#xyzw[3];
    return (
      x === Infinity ||
      x === -Infinity ||
      y === Infinity ||
      y === -Infinity ||
      z === Infinity ||
      z === -Infinity ||
      w === Infinity ||
      w === -Infinity
    );
  }

  /**
   * Checks if this vector has NaN components.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return (
      Number.isNaN(this.#xyzw[0]) ||
      Number.isNaN(this.#xyzw[1]) ||
      Number.isNaN(this.#xyzw[2]) ||
      Number.isNaN(this.#xyzw[3])
    );
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return this.#xyzw[0] === 0 && this.#xyzw[1] === 0 && this.#xyzw[2] === 0 && this.#xyzw[3] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns This Vec2 instance for method chaining.
   */
  limitMax(max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.#xyzw[0] = (this.#xyzw[0] / M) * max;
      this.#xyzw[1] = (this.#xyzw[1] / M) * max;
      this.#xyzw[2] = (this.#xyzw[2] / M) * max;
      this.#xyzw[3] = (this.#xyzw[3] / M) * max;
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
      this.#xyzw[0] = (this.#xyzw[0] / M) * min;
      this.#xyzw[1] = (this.#xyzw[1] / M) * min;
      this.#xyzw[2] = (this.#xyzw[2] / M) * min;
      this.#xyzw[3] = (this.#xyzw[3] / M) * min;
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns `this` instance for method chaining.
   */
  lookAt(v: Vec4Like): this {
    const M = this.magnitude;
    const vM = v.magnitude;
    this.#xyzw[0] = (v.x / vM) * M;
    this.#xyzw[1] = (v.y / vM) * M;
    this.#xyzw[2] = (v.z / vM) * M;
    this.#xyzw[3] = (v.w / vM) * M;
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.#xyzw[0] *= -1;
    this.#xyzw[1] *= -1;
    this.#xyzw[2] *= -1;
    this.#xyzw[3] *= -1;
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns This Ve4 instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.#xyzw[0] /= M;
    this.#xyzw[1] /= M;
    this.#xyzw[2] /= M;
    this.#xyzw[3] /= M;
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns `this` instance for method chaining.
   */
  project(v: Vec4Like): this {
    const M = this.magnitude;
    const vM = v.magnitude;
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    const vW = v.w;
    const f =
      M * cos(acos((this.#xyzw[0] * vX + this.#xyzw[1] * vY + this.#xyzw[2] * vZ + this.#xyzw[3] * vW) / (M * vM)));
    this.#xyzw[0] = (vX / vM) * f;
    this.#xyzw[1] = (vY / vM) * f;
    this.#xyzw[2] = (vZ / vM) * f;
    this.#xyzw[3] = (vW / vM) * f;
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns `this` instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    this.copy(Vec4.random(random));
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec4Like): boolean {
    return this.#xyzw[0] === v.x && this.#xyzw[1] === v.y && this.#xyzw[2] === v.z && this.#xyzw[3] === v.w;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec4Like): boolean {
    return this.#xyzw[0] === -v.x && this.#xyzw[1] === -v.y && this.#xyzw[2] === -v.z && this.#xyzw[3] === -v.w;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec4Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#xyzw[0] - v.x) <= epsilon &&
      abs(this.#xyzw[1] - v.y) <= epsilon &&
      abs(this.#xyzw[2] - v.z) <= epsilon &&
      abs(this.#xyzw[3] - v.w) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.#xyzw[0] *= c;
    this.#xyzw[1] *= c;
    this.#xyzw[2] *= c;
    this.#xyzw[3] *= c;
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.#xyzw[0] = 0;
    this.#xyzw[1] = 0;
    this.#xyzw[2] = 0;
    this.#xyzw[3] = 0;
    return this;
  }

  /**
   * Makes the Vec4 instance iterable.
   * @yields The x, y, z and w components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.#xyzw[0];
    yield this.#xyzw[1];
    yield this.#xyzw[2];
    yield this.#xyzw[3];
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "Vec4(x, y, z, w)".
   */
  toString(): string {
    return `Vec4(${this.#xyzw[0]}, ${this.#xyzw[1]}, ${this.#xyzw[2]}, ${this.#xyzw[3]})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x, y, z and w properties.
   */
  toObject(): XYZWObject {
    const [x, y, z, w] = this.#xyzw;
    return { x, y, z, w };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYZWObject {
    return this.toObject();
  }

  /**
   * Adds two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec4 instance representing the sum.
   */
  static add(v: Vec4Like, w: Vec4Like) {
    return new Vec4(v.x + w.x, v.y + w.y, v.z + w.z, v.w + w.w);
  }

  /**
   * Subtracts one vector from another.
   * @param v - The vector to subtract from.
   * @param w - The vector to subtract.
   * @returns A new Vec4 instance representing the difference.
   */
  static subtract(v: Vec4Like, w: Vec4Like) {
    return new Vec4(v.x - w.x, v.y - w.y, v.z - w.z, v.w - w.w);
  }

  /**
   * Multiplies one vector with another.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec4 instance representing the multiplied value.
   */
  static multiply(v: Vec4Like, w: Vec4Like): Vec4 {
    return new Vec4(v.x * w.x, v.y * w.y, v.z * w.z, v.w * w.w);
  }

  /**
   * Divides one vector with another.
   * @param v - Divident.
   * @param w - Divisor.
   * @returns A new Vec4 instance representing the divided value.
   */
  static divide(v: Vec4Like, w: Vec4Like): Vec4 {
    return new Vec4(
      w.x === 0 ? Number.POSITIVE_INFINITY : v.x / w.x,
      w.y === 0 ? Number.POSITIVE_INFINITY : v.y / w.y,
      v.z === 0 ? Number.POSITIVE_INFINITY : v.z / w.z,
      v.w === 0 ? Number.POSITIVE_INFINITY : v.w / w.w,
    );
  }

  /**
   * Calculates the angle between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The angle between the vectors in radians.
   */
  static angleBetween(v: Vec4Like, w: Vec4Like) {
    return acos((v.x * w.x + v.y * w.y + v.z * w.z + v.w * w.w) / (v.magnitude * w.magnitude));
  }

  /**
   * Calculates the Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The distance between the vectors.
   */
  static distance(v: Vec4Like, w: Vec4Like) {
    return sqrt((v.x - w.x) ** 2 + (v.y - w.y) ** 2 + (v.z - w.z) ** 2 + (v.w - w.w) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Chebyshev distance between the vectors.
   */
  static distanceChebyshev(v: Vec4Like, w: Vec4Like) {
    const absX = abs(v.x - w.x);
    const absY = abs(v.y - w.y);
    const absZ = abs(v.z - w.z);
    const absW = abs(v.w - w.w);
    return absX >= absY && absX >= absZ && absX >= absW
      ? absX
      : absY >= absZ && absY >= absW
        ? absY
        : absZ >= absW
          ? absZ
          : absW;
  }

  /**
   * Calculates the Manhattan distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Manhattan distance between the vectors.
   */
  static distanceManhattan(v: Vec4Like, w: Vec4Like) {
    return abs(v.x - w.x) + abs(v.y - w.y) + abs(v.z - w.z) + abs(v.w - w.w);
  }

  /**
   * Calculates the Minkowski distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  static distanceMinkowski(v: Vec4Like, w: Vec4Like, p: number) {
    return (abs(v.x - w.x) ** p + abs(v.y - w.y) ** p + abs(v.z - w.z) ** p + abs(v.w - w.w) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The squared distance between the vectors.
   */
  static distanceSq(v: Vec4Like, w: Vec4Like) {
    return (v.x - w.x) ** 2 + (v.y - w.y) ** 2 + (v.z - w.z) ** 2 + (v.w - w.w) ** 2;
  }

  /**
   * Calculates the dot product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The dot product of the two vectors.
   */
  static dot(v: Vec4Like, w: Vec4Like) {
    return v.x * w.x + v.y * w.y + v.z * w.z + v.w * w.w;
  }

  /**
   * Reflects a vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param v - The vector to reflect.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec4 instance representing the reflected vector.
   */
  static reflect(v: Vec4Like, normal: Vec4Like): Vec4 {
    const dot = v.x * normal.x + v.y * normal.y + v.z * normal.z + v.w * normal.w;
    return new Vec4(
      v.x - 2 * dot * normal.x,
      v.y - 2 * dot * normal.y,
      v.z - 2 * dot * normal.z,
      v.w - 2 * dot * normal.w,
    );
  }

  /**
   * Creates an immutable Vec4 instance.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @param z - The z-coordinate of the vector.
   * @param w - The w-coordinate of the vector.
   * @returns A read-only Vec4 instance.
   */
  static immutable(x = 0, y = 0, z = 0, w = 0): Readonly<Vec4> {
    return Object.freeze(new Vec4(x, y, z, w));
  }

  /**
   * Checks if a vector has infinite components.
   * @param v - The vector to check.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  static isInfinite(v: Vec4Like) {
    const x = v.x;
    const y = v.y;
    const z = v.z;
    const w = v.w;
    return (
      x === Infinity ||
      x === -Infinity ||
      y === Infinity ||
      y === -Infinity ||
      z === Infinity ||
      z === -Infinity ||
      w === Infinity ||
      w === -Infinity
    );
  }

  /**
   * Checks if a vector has NaN components.
   * @param v - The vector to check.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  static isNaN(v: Vec4Like) {
    return Number.isNaN(v.x) || Number.isNaN(v.y) || Number.isNaN(v.z) || Number.isNaN(v.w);
  }

  /**
   * Checks if a vector is zero.
   * @param v - The vector to check.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  static isZero(v: Vec4Like) {
    return v.x === 0 && v.y === 0 && v.z === 0 && v.w === 0;
  }

  /**
   * Performs linear interpolation between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param t - The interpolation parameter (0 to 1).
   * @returns A new Vec4 instance representing the interpolated vector.
   */
  static lerp(v: Vec4Like, w: Vec4Like, t: number) {
    if (t > 1) t = 1;
    else if (t < 0) t = 0;
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    const vW = v.w;
    return new Vec4(vX + (w.x - vX) * t, vY + (w.y - vY) * t, vZ + (w.z - vZ) * t, vW + (w.w - vW) * t);
  }

  /**
   * Negates a vector.
   * @param v - The vector to negate.
   * @returns A new Vec4 instance representing the negated vector.
   */
  static negate(v: Vec4Like) {
    return new Vec4(-v.x, -v.y, -v.z, -v.w);
  }

  /**
   * Normalizes a vector.
   * @param v - The vector to normalize.
   * @returns A new Vec4 instance representing the normalized vector.
   */
  static normalize(v: Vec4Like) {
    const m = v.magnitude;
    return new Vec4(v.x / m, v.y / m, v.z / m, v.w / m);
  }

  /**
   * Projects one vector onto another.
   * @param v - The vector to project.
   * @param w - The vector to project onto.
   * @returns A new Vec4 instance representing the projected vector.
   */
  static project(v: Vec4Like, w: Vec4Like) {
    const vM = v.magnitude;
    const wM = w.magnitude;
    const wX = w.x;
    const wY = w.y;
    const wZ = w.z;
    const wW = w.w;
    const f = vM * cos(acos((v.x * wX + v.y * wY + v.z * wZ + v.w * wW) / (vM * wM)));
    return new Vec4((wX / wM) * f, (wY / wM) * f, (wZ / wM) * f, (wW / wM) * f);
  }

  /**
   * Creates a random unit vector.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns A new Vec4 instance representing a random unit vector.
   */
  static random(random: () => number = Math.random) {
    // Generate four numbers from a Normal Distribution (Box-Muller transform)
    const x = sqrt(-2 * log(random())) * cos(2 * PI * random());
    const y = sqrt(-2 * log(random())) * sin(2 * PI * random());
    const z = sqrt(-2 * log(random())) * cos(2 * PI * random());
    const w = sqrt(-2 * log(random())) * sin(2 * PI * random());

    // Calculate the current length
    const length = sqrt(x * x + y * y + z * z + w * w);

    // Divide by length to make it a unit vector
    return new Vec4(x / length, y / length, z / length, w / length);
  }

  /**
   * Checks if two vectors are equal.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  static satisfyEquality(v: Vec4Like, w: Vec4Like): boolean {
    return v.x === w.x && v.y === w.y && v.z === w.z && v.w === w.w;
  }

  /**
   * Checks if two vectors are opposite.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  static satisfyOpposition(v: Vec4Like, w: Vec4Like): boolean {
    return v.x === -w.x && v.y === -w.y && v.z === -w.z && v.w === -w.w;
  }

  /**
   * Compares a vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  static equals(v: Vec4Like, w: Vec4Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(v.x - w.x) <= epsilon && abs(v.y - w.y) <= epsilon && abs(v.z - w.z) <= epsilon && abs(v.w - w.w) <= epsilon
    );
  }

  /**
   * Scales a vector by a scalar value.
   * @param v - The vector to scale.
   * @param c - The scalar value.
   * @returns A new Vec4 instance representing the scaled vector.
   */
  static scale(v: Vec4Like, c: number) {
    return new Vec4(v.x * c, v.y * c, v.z * c, v.w * c);
  }

  /**
   * Creates a zero vector.
   * @returns A new Vec4 instance representing a zero vector.
   */
  static zero() {
    return new Vec4();
  }

  /**
   * Creates a vector with all components set to 1.0.
   * @returns A new Vec4 instance representing a vector with all components set to 1.0.
   */
  static one(): Vec4 {
    return new Vec4(1, 1, 1, 1);
  }

  /**
   * Creates a Vec4 from an array.
   * @param arr - An array containing the x, y, z, and w coordinates.
   * @returns A new Vec4 instance.
   */
  static fromArray(arr: ArrayVector4D | number[]) {
    return new Vec4(arr[0] ?? 0, arr[1] ?? 0, arr[2] ?? 0, arr[3] ?? 0);
  }

  /**
   * Creates a Vec4 from an object with x, y, z and w properties.
   * @param obj - An object with x, y, z, and w properties.
   * @returns A new Vec4 instance.
   */
  static fromObject(obj: XYZWObject) {
    return new Vec4(obj.x, obj.y, obj.z, obj.w);
  }

  /**
   * Creates a Vec4 instance from a JSON-parsed object.
   * @param json - The JSON-parsed object containing x and y properties.
   * @returns A new Vec4 instance.
   */
  static fromJSON(json: XYZWObject): Vec4 {
    return Vec4.fromObject(json);
  }
}
