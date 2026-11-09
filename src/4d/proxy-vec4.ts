import type { ArrayVector4D } from "../array-4d/types.js";
import type { Vec4Like } from "./types.js";
import { Vec4 } from "./vec4.js";

const { cos, acos, atan2, sqrt, abs } = Math;

/** A 4D vector backed by getter and setter functions. */
export class ProxyVec4 implements Vec4Like {
  #prev = new Float64Array(4);
  #mag = 0;

  constructor(
    private getX: () => number,
    private getY: () => number,
    private getZ: () => number,
    private getW: () => number,
    private setX: (x: number) => void,
    private setY: (y: number) => void,
    private setZ: (z: number) => void,
    private setW: (w: number) => void,
  ) {}

  get x(): number {
    return this.getX();
  }
  set x(x: number) {
    this.setX(x);
  }

  get y(): number {
    return this.getY();
  }
  set y(y: number) {
    this.setY(y);
  }

  get z(): number {
    return this.getZ();
  }
  set z(z: number) {
    this.setZ(z);
  }

  get w(): number {
    return this.getW();
  }
  set w(w: number) {
    this.setW(w);
  }

  get xyzw(): ArrayVector4D {
    return [this.x, this.y, this.z, this.w];
  }
  set xyzw(value: ArrayVector4D) {
    this.x = value[0] ?? 0;
    this.y = value[1] ?? 0;
    this.z = value[2] ?? 0;
    this.w = value[3] ?? 0;
  }

  /**
   * Gets the Red-component of a Color.
   * @returns {number} The Red-component.
   */
  get r() {
    return this.x;
  }

  /**
   * Sets the Red-component of a Color.
   * @param {number} r - The new Red-component.
   * @returns {void}
   */
  set r(r: number) {
    this.x = r;
  }

  /**
   * Gets the Green-component of a Color.
   * @returns {number} The Green-component.
   */
  get g() {
    return this.y;
  }

  /**
   * Sets the Green-component of the Color.
   * @param {number} g - The new Green-component.
   * @returns {void}
   */
  set g(g: number) {
    this.y = g;
  }

  /**
   * Gets the Blue-component of the color.
   * @returns {number} The Blue-component.
   */
  get b() {
    return this.z;
  }

  /**
   * Sets the Blue-component of the Color.
   * @param {number} b - The new Blue-component.
   * @returns {void}
   */
  set b(b: number) {
    this.z = b;
  }

  /**
   * Gets the Alpha-component of the color.
   * @returns {number} The Alpha-component.
   */
  get a() {
    return this.w;
  }

  /**
   * Sets the Alpha-component of the Color.
   * @param {number} a - The new Alpha-component.
   * @returns {void}
   */
  set a(a: number) {
    this.w = a;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns {ArrayVector4D} An array containing the Red, Green, Blue and Alpha components of the Color.
   */
  get rgba(): ArrayVector4D {
    return this.xyzw;
  }

  /**
   * Sets all components of the Color at once.
   * @param {ArrayVector4D} rgba - An array containing the new Red, Green, Blue and Alpha components.
   * @returns {void}
   */
  set rgba(rgba: ArrayVector4D) {
    this.xyzw = rgba;
  }

  /**
   * Gets the angle between the vector and the positive x-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleX(): number {
    return atan2(sqrt(this.y ** 2 + this.z ** 2 + this.w ** 2), this.x);
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(sqrt(this.z ** 2 + this.w ** 2 + this.x ** 2), this.y);
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(sqrt(this.w ** 2 + this.x ** 2 + this.y ** 2), this.z);
  }

  /**
   * Gets the angle between the vector and the positive w-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleW(): number {
    return atan2(sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2), this.w);
  }

  /** Reads the current target components, including external changes. */
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

  get magnitudeSq(): number {
    return this.magnitude ** 2;
  }

  set magnitude(m: number) {
    const M = this.magnitude;
    this.x = (this.x / M) * m;
    this.y = (this.y / M) * m;
    this.z = (this.z / M) * m;
    this.w = (this.w / M) * m;
  }

  /**
   * Adds another vector to this vector.
   * @param {Vec4} v - The vector to add.
   * @returns {this} This Vec4 instance for method chaining.
   */
  add(v: Vec4Like) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns This Vec4 instance for method chaining.
   */
  subtract(v: Vec4Like): this {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns This Vec4 instance for method chaining.
   */
  multiply(v: Vec4Like): this {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns This Vec4 instance for method chaining.
   */
  divide(v: Vec4Like): this {
    this.x = v.x === 0 ? Number.POSITIVE_INFINITY : this.x / v.x;
    this.y = v.y === 0 ? Number.POSITIVE_INFINITY : this.y / v.y;
    this.z = v.z === 0 ? Number.POSITIVE_INFINITY : this.z / v.z;
    this.w = v.w === 0 ? Number.POSITIVE_INFINITY : this.w / v.w;
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec4Like): number {
    return acos((this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w) / (this.magnitude * v.magnitude));
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param {number} min - The minimum magnitude.
   * @param {number} max - The maximum magnitude.
   * @returns {this} This Vec4 instance for method chaining.
   */
  clamp(min: number, max: number) {
    const m = this.magnitude;
    if (m > max) {
      this.x = (this.x / m) * max;
      this.y = (this.y / m) * max;
      this.z = (this.z / m) * max;
      this.w = (this.w / m) * max;
    } else if (m < min) {
      this.x = (this.x / m) * min;
      this.y = (this.y / m) * min;
      this.z = (this.z / m) * min;
      this.w = (this.w / m) * min;
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns {Vec4} A new Vec4 instance with the same components.
   */
  clone() {
    return new Vec4(this.x, this.y, this.z, this.w);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns This Vec2 instance for method chaining.
   */
  copy(v: Vec4Like) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w;
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec4Like): number {
    return sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2 + (this.w - v.w) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param {Vec4} v - The other vector.
   * @returns {number} The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec4Like) {
    const absX = abs(this.x - v.x);
    const absY = abs(this.y - v.y);
    const absZ = abs(this.z - v.z);
    const absW = abs(this.w - v.w);
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
   * @param {Vec4} v - The other vector.
   * @returns {number} The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec4Like) {
    return abs(this.x - v.x) + abs(this.y - v.y) + abs(this.z - v.z) + abs(this.w - v.w);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param {Vec4} v - The other vector.
   * @param {number} p - The order of the Minkowski distance.
   * @returns {number} The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec4Like, p: number) {
    return (
      (abs(this.x - v.x) ** p + abs(this.y - v.y) ** p + abs(this.z - v.z) ** p + abs(this.w - v.w) ** p) ** (1 / p)
    );
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec4Like): number {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2 + (this.w - v.w) ** 2;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec4Like): number {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }

  /**
   * Reflects this vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns This Vec4 instance for method chaining.
   */
  reflect(normal: Vec4Like): this {
    const dot = this.x * normal.x + this.y * normal.y + this.z * normal.z + this.w * normal.w;

    this.x -= 2 * dot * normal.x;
    this.y -= 2 * dot * normal.y;
    this.z -= 2 * dot * normal.z;
    this.w -= 2 * dot * normal.w;
    return this;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns True if the vector has infinite components, false otherwise.
   */
  isInfinite(): boolean {
    const x = this.x;
    const y = this.y;
    const z = this.z;
    const w = this.w;
    return (
      x === +Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === +Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY ||
      z === +Number.POSITIVE_INFINITY ||
      z === Number.NEGATIVE_INFINITY ||
      w === +Number.POSITIVE_INFINITY ||
      w === Number.NEGATIVE_INFINITY
    );
  }

  /**
   * Checks if this vector has NaN components.
   * @returns True if the vector has NaN components, false otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.x) || Number.isNaN(this.y) || Number.isNaN(this.z) || Number.isNaN(this.w);
  }

  /**
   * Checks if this vector is zero.
   * @returns True if the vector is zero, false otherwise.
   */
  isZero(): boolean {
    return this.x === 0 && this.y === 0 && this.z === 0 && this.w === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns This Vec2 instance for method chaining.
   */
  limitMax(max: number): this {
    const m = this.magnitude;
    if (m > max) {
      this.x = (this.x / m) * max;
      this.y = (this.y / m) * max;
      this.z = (this.z / m) * max;
      this.w = (this.w / m) * max;
    }
    return this;
  }

  /**
   * Limits the minimum magnitude of this vector.
   * @param min - The minimum magnitude.
   * @returns This Vec4 instance for method chaining.
   */
  limitMin(min: number): this {
    const m = this.magnitude;
    if (m < min) {
      this.x = (this.x / m) * min;
      this.y = (this.y / m) * min;
      this.z = (this.z / m) * min;
      this.w = (this.w / m) * min;
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns This Vec4 instance for method chaining.
   */
  lookAt(v: Vec4Like): this {
    const m = this.magnitude;
    const vM = v.magnitude;
    this.x = (v.x / vM) * m;
    this.y = (v.y / vM) * m;
    this.z = (v.z / vM) * m;
    this.w = (v.w / vM) * m;
    return this;
  }

  /**
   * Negates this vector.
   * @returns This Vec4 instance for method chaining.
   */
  negate(): this {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    this.w *= -1;
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns This Ve4 instance for method chaining.
   */
  normalize(): this {
    const m = this.magnitude;
    this.x /= m;
    this.y /= m;
    this.z /= m;
    this.w /= m;
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns This Vec4 instance for method chaining.
   */
  project(v: Vec4Like): this {
    const m = this.magnitude;
    const vM = v.magnitude;
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    const vW = v.w;
    const f = m * cos(acos((this.x * vX + this.y * vY + this.z * vZ + this.w * vW) / (m * vM)));
    this.x = (vX / vM) * f;
    this.y = (vY / vM) * f;
    this.z = (vZ / vM) * f;
    this.w = (vW / vM) * f;
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns This Vec4 instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    this.copy(Vec4.random(random));
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  satisfyEquality(v: Vec4Like): boolean {
    return this.x === v.x && this.y === v.y && this.z === v.z && this.w === v.w;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  satisfyOpposition(v: Vec4Like): boolean {
    return this.x === -v.x && this.y === -v.y && this.z === -v.z && this.w === -v.w;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  equals(v: Vec4Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.x - v.x) <= epsilon &&
      abs(this.y - v.y) <= epsilon &&
      abs(this.z - v.z) <= epsilon &&
      abs(this.w - v.w) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns This Vec4 instance for method chaining.
   */
  scale(c: number): this {
    this.x *= c;
    this.y *= c;
    this.z *= c;
    this.w *= c;
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns This Vec4 instance for method chaining.
   */
  zero(): this {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
    return this;
  }

  /**
   * Makes the Vec4 instance iterable.
   * @yields The x, y, z and w components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "Vec4(x, y, z, w)".
   */
  toString(): string {
    return `ProxyVec4(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x, y, z and w properties.
   */
  toObject(): { x: number; y: number; z: number; w: number } {
    const { x, y, z, w } = this;
    return { x, y, z, w };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): { x: number; y: number; z: number; w: number } {
    return this.toObject();
  }
}
