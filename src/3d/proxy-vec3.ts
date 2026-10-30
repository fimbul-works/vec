import type { ArrayVector3D } from "../array-3d";
import type { XYZObject } from "../types";
import type { Vec3Like } from "./types";
import { Vec3 } from "./vec3";

const { sin, cos, atan2, sqrt, abs, acos } = Math;

/**
 * Proxying 3D vector.
 */
export class ProxyVec3 implements Vec3Like {
  #prev = new Float64Array([0, 0, 0]);
  #mag = 0;

  /**
   * @param getX - Function that returns the x-component of the vector.
   * @param getY - Function that returns the y-component of the vector.
   * @param getZ - Function that returns the z-component of the vector.
   * @param setX - Function to set the x-component of the vector.
   * @param setY - Function to set the y-component of the vector.
   * @param setZ - Function to set the z-component of the vector.
   */
  constructor(
    private getX: () => number,
    private getY: () => number,
    private getZ: () => number,
    private setX: (x: number) => void,
    private setY: (y: number) => void,
    private setZ: (z: number) => void,
  ) {}

  /**
   * Gets the x-component of the vector.
   * @returns The x-component.
   */
  get x(): number {
    return this.getX();
  }

  /**
   * Sets the x-component of the vector.
   * @param x - The new x-component.
   */
  set x(x: number) {
    this.setX(x);
  }

  /**
   * Gets the y-component of the vector.
   * @returns The y-component.
   */
  get y(): number {
    return this.getY();
  }

  /**
   * Sets the y-component of the vector.
   * @param y - The new y-component.
   */
  set y(y: number) {
    this.setY(y);
  }

  /**
   * Gets the z-component of the vector.
   * @returns The z-component.
   */
  get z(): number {
    return this.getZ();
  }

  /**
   * Sets the z-component of the vector.
   * @param z - The new z-component.
   */
  set z(z: number) {
    this.setZ(z);
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y and z components of the vector.
   */
  get xyz(): ArrayVector3D {
    return [this.getX(), this.getY(), this.getZ()];
  }

  /**
   * Sets all components of the vector at once.
   * @param xyz - An array containing the new x, y and z components.
   */
  set xyz(xyz: ArrayVector3D) {
    this.setX(xyz[0] ?? 0);
    this.setY(xyz[1] ?? 0);
    this.setZ(xyz[2] ?? 0);
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   */
  get magnitude(): number {
    const x = this.getX(),
      y = this.getY(),
      z = this.getZ();
    if (x !== this.#prev[0] || y !== this.#prev[1] || z !== this.#prev[2]) {
      this.#mag = sqrt(x ** 2 + y ** 2 + z ** 2);
      this.#prev[0] = x;
      this.#prev[1] = y;
      this.#prev[2] = z;
    }
    return this.#mag;
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
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  set magnitude(m: number) {
    const M = this.magnitude;
    this.setX((this.getX() / M) * m);
    this.setY((this.getY() / M) * m);
    this.setZ((this.getZ() / M) * m);
  }

  /**
   * Gets the Red-component of a Color.
   * @returns The Red-component.
   */
  get r() {
    return this.getX();
  }

  /**
   * Sets the Red-component of a Color.
   * @param r - The new Red-component.
   * @returns {void}
   */
  set r(r: number) {
    this.setX(r);
  }

  /**
   * Gets the Green-component of a Color.
   * @returns The Green-component.
   */
  get g() {
    return this.getY();
  }

  /**
   * Sets the Green-component of the Color.
   * @param g - The new Green-component.
   * @returns {void}
   */
  set g(g: number) {
    this.setY(g);
  }

  /**
   * Gets the Blue-component of the color.
   * @returns The Blue-component.
   */
  get b() {
    return this.getZ();
  }

  /**
   * Sets the Blue-component of the Color.
   * @param b - The new Blue-component.
   */
  set b(b: number) {
    this.setZ(b);
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
    return atan2(sqrt(this.getY() ** 2 + this.getZ() ** 2), this.getX());
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(sqrt(this.getZ() ** 2 + this.getX() ** 2), this.getY());
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(sqrt(this.getX() ** 2 + this.getY() ** 2), this.getZ());
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec3Like) {
    this.setX(this.getX() + v.x);
    this.setY(this.getY() + v.y);
    this.setZ(this.getZ() + v.z);
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec3Like): this {
    this.setX(this.getX() - v.x);
    this.setY(this.getY() - v.y);
    this.setZ(this.getZ() - v.z);
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec3Like): this {
    this.setX(this.getX() * v.x);
    this.setY(this.getY() * v.y);
    this.setZ(this.getZ() * v.z);
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec3Like): this {
    this.setX(this.getX() / v.x);
    this.setY(this.getY() / v.y);
    this.setZ(this.getZ() / v.z);
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
    return acos((this.getX() * v.x + this.getY() * v.y + this.getZ() * v.z) / (M * vM));
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
      this.setX((this.getX() / M) * max);
      this.setY((this.getY() / M) * max);
      this.setZ((this.getZ() / M) * max);
    } else if (M < min) {
      this.setX((this.getX() / M) * min);
      this.setY((this.getY() / M) * min);
      this.setZ((this.getZ() / M) * min);
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec3 instance with the same components.
   */
  clone() {
    return new Vec3(this.getX(), this.getY(), this.getZ());
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec3Like): this {
    this.setX(v.x);
    this.setY(v.y);
    this.setZ(v.z);
    return this;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec3Like): number {
    return this.getX() * v.x + this.getY() * v.y + this.getZ() * v.z;
  }

  /**
   * Calculates cross product between this vector and another vector.
   * @param v - The other vector.
   * @returns `this` instance for method chaining.
   */
  cross(v: Vec3Like): this {
    const x = this.getX();
    const y = this.getY();
    const z = this.getZ();
    const vX = v.x;
    const vY = v.y;
    const vZ = v.z;
    this.setX(y * vZ - z * vY);
    this.setY(z * vX - x * vZ);
    this.setZ(x * vY - y * vX);
    return this;
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns `this` instance for method chaining.
   */
  reflect(normal: Vec3Like): this {
    const dot = this.getX() * normal.x + this.getY() * normal.y + this.getZ() * normal.z;
    this.setX(this.getX() - 2 * dot * normal.x);
    this.setY(this.getY() - 2 * dot * normal.y);
    this.setZ(this.getZ() + 2 * dot * normal.z);
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec3Like): number {
    return sqrt((this.getX() - v.x) ** 2 + (this.getY() - v.y) ** 2 + (this.getZ() - v.z) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec3Like) {
    const absX = abs(this.getX() - v.x);
    const absY = abs(this.getY() - v.y);
    const absZ = abs(this.getZ() - v.z);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec3Like) {
    return abs(this.getX() - v.x) + abs(this.getY() - v.y) + abs(this.getZ() - v.z);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec3Like, p: number) {
    return (abs(this.getX() - v.x) ** p + abs(this.getY() - v.y) ** p + abs(this.getZ() - v.z) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec3Like): number {
    return (this.getX() - v.x) ** 2 + (this.getY() - v.y) ** 2 + (this.getZ() - v.z) ** 2;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.getX();
    const y = this.getY();
    const z = this.getZ();
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity || z === Infinity || z === -Infinity;
  }

  /**
   * Checks if this vector has NaN components.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.getX()) || Number.isNaN(this.getY()) || Number.isNaN(this.getZ());
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return this.getX() === 0 && this.getY() === 0 && this.getZ() === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  limitMax(max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.setX((this.getX() / M) * max);
      this.setY((this.getY() / M) * max);
      this.setZ((this.getZ() / M) * max);
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
      this.setX((this.getX() / M) * min);
      this.setY((this.getY() / M) * min);
      this.setZ((this.getZ() / M) * min);
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
    this.setX((v.x / vM) * M);
    this.setY((v.y / vM) * M);
    this.setZ((v.z / vM) * M);
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.setX(this.getX() * -1);
    this.setY(this.getY() * -1);
    this.setZ(this.getZ() * -1);
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns `this` instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.setX(this.getX() / M);
    this.setY(this.getY() / M);
    this.setZ(this.getZ() / M);
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
    const f = M * cos(acos((this.getX() * vX + this.getY() * vY + this.getZ() * vZ) / (M * vM)));
    this.setX((vX / vM) * f);
    this.setY((vY / vM) * f);
    this.setZ((vZ / vM) * f);
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
    const y = this.getY();
    const z = this.getZ();
    this.setY(y * cosPhi - z * sinPhi);
    this.setZ(y * sinPhi + z * cosPhi);
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
    const x = this.getX();
    const z = this.getZ();
    this.setX(x * cosPhi + z * sinPhi);
    this.setZ(x * sinPhi + z * cosPhi);
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
    const x = this.getX();
    const y = this.getY();
    this.setX(x * cosPhi - y * sinPhi);
    this.setY(x * sinPhi + y * cosPhi);
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec3Like): boolean {
    return this.getX() === v.x && this.getY() === v.y && this.getZ() === v.z;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec3Like): boolean {
    return this.getX() === -v.x && this.getY() === -v.y && this.getZ() === -v.z;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec3Like, epsilon: number = Number.EPSILON): boolean {
    return abs(this.getX() - v.x) <= epsilon && abs(this.getY() - v.y) <= epsilon && abs(this.getZ() - v.z) <= epsilon;
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.setX(this.getX() * c);
    this.setY(this.getY() * c);
    this.setZ(this.getZ() * c);
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.setX(0);
    this.setY(0);
    this.setZ(0);
    return this;
  }

  /**
   * Iterator over this vector's components.
   * @yields The x, y and z components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.getX();
    yield this.getY();
    yield this.getZ();
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "ProxyVec3(x, y, z)".
   */
  toString(): string {
    return `ProxyVec3(${this.getX()}, ${this.getY()}, ${this.getZ()})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x, y and z properties.
   */
  toObject(): XYZObject {
    return { x: this.getX(), y: this.getY(), z: this.getZ() };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYZObject {
    return this.toObject();
  }
}
