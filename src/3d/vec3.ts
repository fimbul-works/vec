import type { ArrayVector3D } from "../array-3d";
import type { XYZObject } from "../types";
import type { Vec3Like } from "./types";

const { PI, sin, cos, atan2, sqrt, abs, acos } = Math;
const PI2 = PI * 2;

/**
 * 3D vector.
 */
export class Vec3 implements Vec3Like {
  #xyz = new Float64Array(3);
  #prev = new Float64Array([0, 0, 0]);
  #mag = 0;

  /**
   * Creates a new Vec3 instance.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @param z - The z-coordinate of the vector.
   */
  constructor(x = 0, y = 0, z = 0) {
    this.#xyz[0] = x;
    this.#xyz[1] = y;
    this.#xyz[2] = z;
  }

  /**
   * Gets the x-component of the vector.
   * @returns The x-component.
   */
  get x() {
    return this.#xyz[0];
  }

  /**
   * Sets the x-component of the vector.
   * @param x - The new x-component.
   */
  set x(x: number) {
    this.#xyz[0] = x;
  }

  /**
   * Gets the y-component of the vector.
   * @returns The y-component.
   */
  get y() {
    return this.#xyz[1];
  }

  /**
   * Sets the y-component of the vector.
   * @param y - The new y-component.
   */
  set y(y: number) {
    this.#xyz[1] = y;
  }

  /**
   * Gets the z-component of the vector.
   * @returns The z-component.
   */
  get z() {
    return this.#xyz[2];
  }

  /**
   * Sets the z-component of the vector.
   * @param z - The new z-component.
   */
  set z(z: number) {
    this.#xyz[2] = z;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y and z components of the vector.
   */
  get xyz(): ArrayVector3D {
    return Array.from(this.#xyz) as ArrayVector3D;
  }

  /**
   * Sets all components of the vector at once.
   * @param xyz - An array containing the new x, y and z components.
   */
  set xyz(xyz: ArrayVector3D) {
    this.#xyz[0] = xyz[0] ?? 0;
    this.#xyz[1] = xyz[1] ?? 0;
    this.#xyz[2] = xyz[2] ?? 0;
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   */
  get magnitude(): number {
    const x = this.#xyz[0],
      y = this.#xyz[1],
      z = this.#xyz[2];
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
    this.#xyz[0] = (this.#xyz[0] / M) * m;
    this.#xyz[1] = (this.#xyz[1] / M) * m;
    this.#xyz[2] = (this.#xyz[2] / M) * m;
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
    return this.#xyz[0];
  }

  /**
   * Sets the Red-component of a Color.
   * @param r - The new Red-component.
   * @returns {void}
   */
  set r(r: number) {
    this.#xyz[0] = r;
  }

  /**
   * Gets the Green-component of a Color.
   * @returns The Green-component.
   */
  get g() {
    return this.#xyz[1];
  }

  /**
   * Sets the Green-component of the Color.
   * @param g - The new Green-component.
   * @returns {void}
   */
  set g(g: number) {
    this.#xyz[1] = g;
  }

  /**
   * Gets the Blue-component of the color.
   * @returns The Blue-component.
   */
  get b() {
    return this.#xyz[2];
  }

  /**
   * Sets the Blue-component of the Color.
   * @param b - The new Blue-component.
   */
  set b(b: number) {
    this.#xyz[2] = b;
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
    return atan2(sqrt(this.#xyz[1] ** 2 + this.#xyz[2] ** 2), this.#xyz[0]);
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(sqrt(this.#xyz[2] ** 2 + this.#xyz[0] ** 2), this.#xyz[1]);
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(sqrt(this.#xyz[0] ** 2 + this.#xyz[1] ** 2), this.#xyz[2]);
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec3Like): this {
    this.#xyz[0] += v.x;
    this.#xyz[1] += v.y;
    this.#xyz[2] += v.z;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec3Like): this {
    this.#xyz[0] -= v.x;
    this.#xyz[1] -= v.y;
    this.#xyz[2] -= v.z;
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec3Like): this {
    this.#xyz[0] *= v.x;
    this.#xyz[1] *= v.y;
    this.#xyz[2] *= v.z;
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec3Like): this {
    this.#xyz[0] = this.#xyz[0] / v.x;
    this.#xyz[1] = this.#xyz[1] / v.y;
    this.#xyz[2] = this.#xyz[2] / v.z;
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
    return acos((this.#xyz[0] * v.x + this.#xyz[1] * v.y + this.#xyz[2] * v.z) / (M * vM));
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
      this.#xyz[0] = (this.#xyz[0] / M) * max;
      this.#xyz[1] = (this.#xyz[1] / M) * max;
      this.#xyz[2] = (this.#xyz[2] / M) * max;
    } else if (M < min) {
      this.#xyz[0] = (this.#xyz[0] / M) * min;
      this.#xyz[1] = (this.#xyz[1] / M) * min;
      this.#xyz[2] = (this.#xyz[2] / M) * min;
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec3 instance with the same components.
   */
  clone() {
    return new Vec3(this.#xyz[0], this.#xyz[1], this.#xyz[2]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec3Like): this {
    this.#xyz[0] = v.x;
    this.#xyz[1] = v.y;
    this.#xyz[2] = v.z;
    return this;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec3Like): number {
    return this.#xyz[0] * v.x + this.#xyz[1] * v.y + this.#xyz[2] * v.z;
  }

  /**
   * Calculates cross product between this vector and another vector.
   * @param v - The other vector.
   * @returns `this` instance for method chaining.
   */
  cross(v: Vec3Like): this {
    const x = this.#xyz[0];
    const y = this.#xyz[1];
    const z = this.#xyz[2];
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    this.#xyz[0] = y * vZ - z * vY;
    this.#xyz[1] = z * vX - x * vZ;
    this.#xyz[2] = x * vY - y * vX;
    return this;
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns `this` instance for method chaining.
   */
  reflect(normal: Vec3Like): this {
    const dot = this.#xyz[0] * normal.x + this.#xyz[1] * normal.y + this.#xyz[2] * normal.z;
    this.#xyz[0] -= 2 * dot * normal.x;
    this.#xyz[1] -= 2 * dot * normal.y;
    this.#xyz[2] -= 2 * dot * normal.z;
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec3Like): number {
    return sqrt((this.#xyz[0] - v.x) ** 2 + (this.#xyz[1] - v.y) ** 2 + (this.#xyz[2] - v.z) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec3Like): number {
    const absX = abs(this.#xyz[0] - v.x);
    const absY = abs(this.#xyz[1] - v.y);
    const absZ = abs(this.#xyz[2] - v.z);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec3Like): number {
    return abs(this.#xyz[0] - v.x) + abs(this.#xyz[1] - v.y) + abs(this.#xyz[2] - v.z);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec3Like, p: number): number {
    return (abs(this.#xyz[0] - v.x) ** p + abs(this.#xyz[1] - v.y) ** p + abs(this.#xyz[2] - v.z) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec3Like): number {
    return (this.#xyz[0] - v.x) ** 2 + (this.#xyz[1] - v.y) ** 2 + (this.#xyz[2] - v.z) ** 2;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.#xyz[0];
    const y = this.#xyz[1];
    const z = this.#xyz[2];
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity || z === Infinity || z === -Infinity;
  }

  /**
   * Checks if this vector has NaN components.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.#xyz[0]) || Number.isNaN(this.#xyz[1]) || Number.isNaN(this.#xyz[2]);
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return this.#xyz[0] === 0 && this.#xyz[1] === 0 && this.#xyz[2] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  limitMax(max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.#xyz[0] = (this.#xyz[0] / M) * max;
      this.#xyz[1] = (this.#xyz[1] / M) * max;
      this.#xyz[2] = (this.#xyz[2] / M) * max;
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
      this.#xyz[0] = (this.#xyz[0] / M) * min;
      this.#xyz[1] = (this.#xyz[1] / M) * min;
      this.#xyz[2] = (this.#xyz[2] / M) * min;
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
    this.#xyz[0] = (v.x / vM) * M;
    this.#xyz[1] = (v.y / vM) * M;
    this.#xyz[2] = (v.z / vM) * M;
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.#xyz[0] *= -1;
    this.#xyz[1] *= -1;
    this.#xyz[2] *= -1;
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns `this` instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.#xyz[0] /= M;
    this.#xyz[1] /= M;
    this.#xyz[2] /= M;
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
    const f = M * cos(acos((this.#xyz[0] * vX + this.#xyz[1] * vY + this.#xyz[2] * vZ) / (M * vM)));
    this.#xyz[0] = (vX / vM) * f;
    this.#xyz[1] = (vY / vM) * f;
    this.#xyz[2] = (vZ / vM) * f;
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
    const y = this.#xyz[1];
    const z = this.#xyz[2];
    this.#xyz[1] = y * cosPhi - z * sinPhi;
    this.#xyz[2] = y * sinPhi + z * cosPhi;
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
    const x = this.#xyz[0];
    const z = this.#xyz[2];
    this.#xyz[0] = x * cosPhi + z * sinPhi;
    this.#xyz[2] = x * sinPhi + z * cosPhi;
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
    const x = this.#xyz[0];
    const y = this.#xyz[1];
    this.#xyz[0] = x * cosPhi - y * sinPhi;
    this.#xyz[1] = x * sinPhi + y * cosPhi;
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec3Like): boolean {
    return this.#xyz[0] === v.x && this.#xyz[1] === v.y && this.#xyz[2] === v.z;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec3Like): boolean {
    return this.#xyz[0] === -v.x && this.#xyz[1] === -v.y && this.#xyz[2] === -v.z;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec3Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#xyz[0] - v.x) <= epsilon && abs(this.#xyz[1] - v.y) <= epsilon && abs(this.#xyz[2] - v.z) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.#xyz[0] *= c;
    this.#xyz[1] *= c;
    this.#xyz[2] *= c;
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.#xyz[0] = 0;
    this.#xyz[1] = 0;
    this.#xyz[2] = 0;
    return this;
  }

  /**
   * Iterator over this vector's components.
   * @yields The x, y and z components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.#xyz[0];
    yield this.#xyz[1];
    yield this.#xyz[2];
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "Vec3(x, y, z)".
   */
  toString(): string {
    return `Vec3(${this.#xyz[0]}, ${this.#xyz[1]}, ${this.#xyz[2]})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x, y and z properties.
   */
  toObject(): XYZObject {
    return { x: this.#xyz[0], y: this.#xyz[1], z: this.#xyz[2] };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYZObject {
    return this.toObject();
  }

  /**
   * Adds two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec3 instance representing the sum.
   */
  static add(v: Vec3Like, w: Vec3) {
    return new Vec3(v.x + w.x, v.y + w.y, v.z + w.z);
  }

  /**
   * Subtracts one vector from another.
   * @param v - The vector to subtract from.
   * @param w - The vector to subtract.
   * @returns A new Vec3 instance representing the difference.
   */
  static subtract(v: Vec3Like, w: Vec3) {
    return new Vec3(v.x - w.x, v.y - w.y, v.z - w.z);
  }

  /**
   * Multiplies one vector with another.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec3 instance representing the multiplied value.
   */
  static multiply(v: Vec3Like, w: Vec3): Vec3 {
    return new Vec3(v.x * w.x, v.y * w.y, v.z * w.z);
  }

  /**
   * Divides one vector with another.
   * @param v - Divident.
   * @param w - Divisor.
   * @returns A new Vec3 instance representing the divided value.
   */
  static divide(v: Vec3Like, w: Vec3): Vec3 {
    return new Vec3(v.x / w.x, v.y / w.y, v.z / w.z);
  }

  /**
   * Calculates the angle between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The angle between the vectors in radians.
   */
  static angleBetween(v: Vec3Like, w: Vec3) {
    const vM = v.magnitude;
    const wM = w.magnitude;
    return acos((v.x * w.x + v.y * w.y + v.z * w.z) / (vM * wM));
  }

  /**
   * Calculates the cross product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The cross product of the two vectors.
   */
  static cross(v: Vec3Like, w: Vec3) {
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    const wX = w.x;
    const wY = w.y;
    const wZ = w.z;
    return new Vec3(vY * wZ - vZ * wY, vZ * wX - vX * wZ, vX * wY - vY * wX);
  }

  /**
   * Reflects a vector across a normal vector.
   * @param v - The vector to reflect.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec3 instance representing the reflected vector.
   */
  static reflect(v: Vec3Like, normal: Vec3Like): Vec3 {
    const dot = v.x * normal.x + v.y * normal.y + v.z * normal.z;
    return new Vec3(v.x - 2 * dot * normal.x, v.y - 2 * dot * normal.y, v.z - 2 * dot * normal.z);
  }

  /**
   * Calculates the Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The distance between the vectors.
   */
  static distance(v: Vec3Like, w: Vec3) {
    return sqrt((v.x - w.x) ** 2 + (v.y - w.y) ** 2 + (v.z - w.z) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Chebyshev distance between the vectors.
   */
  static distanceChebyshev(v: Vec3Like, w: Vec3) {
    const absX = abs(v.x - w.x);
    const absY = abs(v.y - w.y);
    const absZ = abs(v.z - w.z);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Manhattan distance between the vectors.
   */
  static distanceManhattan(v: Vec3Like, w: Vec3) {
    return abs(v.x - w.x) + abs(v.y - w.y) + abs(v.z - w.z);
  }

  /**
   * Calculates the Minkowski distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  static distanceMinkowski(v: Vec3Like, w: Vec3, p: number) {
    return (abs(v.x - w.x) ** p + abs(v.y - w.y) ** p + abs(v.z - w.z) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The squared distance between the vectors.
   */
  static distanceSq(v: Vec3Like, w: Vec3) {
    return (v.x - w.x) ** 2 + (v.y - w.y) ** 2 + (v.z - w.z) ** 2;
  }

  /**
   * Calculates the dot product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The dot product of the two vectors.
   */
  static dot(v: Vec3Like, w: Vec3) {
    return v.x * w.x + v.y * w.y + v.z * w.z;
  }

  /**
   * Creates a Vec3 from cylindrical coordinates.
   * @param r - Radial distance from the z-axis
   * @param phi - Azimuthal angle in the x-y plane from the x-axis
   * @param z - Height above the x-y plane
   * @returns New Vec3 instance
   */
  static fromCylindricalCoords(r: number, phi: number, z: number) {
    return new Vec3(r * cos(phi), r * sin(phi), z);
  }

  /**
   * Creates a Vec3 from spherical coordinates.
   * @param r - Radial distance from origin
   * @param theta - Polar angle from the z-axis
   * @param phi - Azimuthal angle in the x-y plane from the x-axis
   * @returns New Vec3 instance
   */
  static fromSphericalCoords(r: number, theta: number, phi: number) {
    return new Vec3(r * sin(theta) * cos(phi), r * sin(theta) * sin(phi), r * cos(theta));
  }

  /**
   * Creates an immutable Vec3 instance.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @param z - The z-coordinate of the vector.
   * @returns A read-only Vec3 instance.
   */
  static immutable(x = 0, y = 0, z = 0): Readonly<Vec3> {
    return Object.freeze(new Vec3(x, y, z));
  }

  /**
   * Checks if a vector has infinite components.
   * @param v - The vector to check.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  static isInfinite(v: Vec3Like): boolean {
    const x = v.x;
    const y = v.y;
    const z = v.z;
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity || z === Infinity || z === -Infinity;
  }

  /**
   * Checks if a vector has NaN components.
   * @param v - The vector to check.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  static isNaN(v: Vec3Like): boolean {
    return Number.isNaN(v.x) || Number.isNaN(v.y) || Number.isNaN(v.z);
  }

  /**
   * Checks if a vector is zero.
   * @param v - The vector to check.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  static isZero(v: Vec3Like): boolean {
    return v.x === 0 && v.y === 0 && v.z === 0;
  }

  /**
   * Performs linear interpolation between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param t - The interpolation parameter (0 to 1).
   * @returns A new Vec3 instance representing the interpolated vector.
   */
  static lerp(v: Vec3Like, w: Vec3, t: number): Vec3 {
    if (t > 1) t = 1;
    else if (t < 0) t = 0;
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    return new Vec3(vX + (w.x - vX) * t, vY + (w.y - vY) * t, vZ + (w.z - vZ) * t);
  }

  /**
   * Negates a vector.
   * @param v - The vector to negate.
   * @returns A new Vec3 instance representing the negated vector.
   */
  static negate(v: Vec3Like): Vec3 {
    return new Vec3(-v.x, -v.y, -v.z);
  }

  /**
   * Normalizes a vector.
   * @param v - The vector to normalize.
   * @returns A new Vec3 instance representing the normalized vector.
   */
  static normalize(v: Vec3Like): Vec3 {
    const M = v.magnitude;
    return new Vec3(v.x / M, v.y / M, v.z / M);
  }

  /**
   * Projects one vector onto another.
   * @param v - The vector to project.
   * @param w - The vector to project onto.
   * @returns A new Vec3 instance representing the projected vector.
   */
  static project(v: Vec3Like, w: Vec3) {
    const vM = v.magnitude;
    const wM = w.magnitude;
    const wX = w.x;
    const wY = w.y;
    const wZ = w.z;
    const f = vM * cos(acos((v.x * wX + v.y * wY + v.z * wZ) / (vM * wM)));
    return new Vec3((wX / wM) * f, (wY / wM) * f, (wZ / wM) * f);
  }

  /**
   * Creates a random unit vector.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns A new Vec3 instance representing a random unit vector.
   */
  static random(random: () => number = Math.random) {
    return Vec3.fromSphericalCoords(Math.acos(2 * random() - 1), random() * PI2, 1);
  }

  /**
   * Checks if two vectors are equal.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  static satisfyEquality(v: Vec3Like, w: Vec3) {
    return v.x === w.x && v.y === w.y && v.z === w.z;
  }

  /**
   * Checks if two vectors are opposite.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  static satisfyOpposition(v: Vec3Like, w: Vec3) {
    return v.x === -w.x && v.y === -w.y && v.z === -w.z;
  }

  /**
   * Compares a vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  static equals(v: Vec3Like, w: Vec3, epsilon: number = Number.EPSILON): boolean {
    return abs(v.x - w.x) <= epsilon && abs(v.y - w.y) <= epsilon && abs(v.z - w.z) <= epsilon;
  }

  /**
   * Scales a vector by a scalar value.
   * @param v - The vector to scale.
   * @param c - The scalar value.
   * @returns A new Vec3 instance representing the scaled vector.
   */
  static scale(v: Vec3Like, c: number) {
    return new Vec3(v.x * c, v.y * c, v.z * c);
  }

  /**
   * Creates a zero vector.
   * @returns A new Vec3 instance representing a zero vector.
   */
  static zero() {
    return new Vec3();
  }

  /**
   * Creates a vector with all components set to 1.0.
   * @returns A new Vec3 instance representing a vector with all components set to 1.0.
   */
  static one(): Vec3 {
    return new Vec3(1, 1, 1);
  }

  /**
   * Creates a Vec3 from an array.
   * @param arr - An array containing the x, y, and z coordinates.
   * @returns A new Vec3 instance.
   */
  static fromArray(arr: number[]): Vec3 {
    return new Vec3(arr[0] ?? 0, arr[1] ?? 0, arr[2] ?? 0);
  }

  /**
   * Creates a Vec3 from an object with x, y and z properties.
   * @param obj - An object with x, y, and z properties.
   * @returns A new Vec3 instance.
   */
  static fromObject(obj: XYZObject) {
    return new Vec3(obj.x, obj.y, obj.z);
  }

  /**
   * Creates a Vec3 instance from a JSON-parsed object.
   * @param json - The JSON-parsed object containing x and y properties.
   * @returns A new Vec3 instance.
   */
  static fromJSON(json: XYZObject): Vec3 {
    return Vec3.fromObject(json);
  }
}
