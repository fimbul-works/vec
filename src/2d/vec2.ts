import type { ArrayVector2D } from "../array-2d/types.js";
import type { XYObject } from "../types.js";
import type { Vec2Like } from "./types.js";

const { PI, sin, cos, atan2, sqrt, abs } = Math;
const PI2 = PI * 2;

/**
 * 2D vector.
 */
export class Vec2 implements Vec2Like {
  /**
   * Current values.
   */
  #xy: any = new Float64Array(2);

  /**
   * Previous values.
   */
  #prev = new Float64Array([0, 0]);

  /**
   * Magniude.
   */
  #mag = 0;

  /**
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   */
  constructor(x = 0, y = x) {
    this.#xy[0] = x;
    this.#xy[1] = y;
  }

  /**
   * Gets the x-component of the vector.
   * @returns The x-component.
   */
  get x(): number {
    return this.#xy[0];
  }

  /**
   * Sets the x-component of the vector.
   * @param x - The new x-component.
   */
  set x(x: number) {
    this.#xy[0] = x;
  }

  /**
   * Gets the y-component of the vector.
   * @returns The y-component.
   */
  get y(): number {
    return this.#xy[1];
  }

  /**
   * Sets the y-component of the vector.
   * @param y - The new y-component.
   */
  set y(y: number) {
    this.#xy[1] = y;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x and y components of the vector.
   */
  get xy(): ArrayVector2D {
    return Array.from(this.#xy) as ArrayVector2D;
  }

  /**
   * Sets both components of the vector at once.
   * @param xy - An array containing the new x and y components.
   */
  set xy(xy: ArrayVector2D) {
    this.#xy[0] = xy[0] ?? 0;
    this.#xy[1] = xy[1] ?? 0;
  }

  /**
   * Gets the magnitude (length) of the vector.
   * @returns The magnitude of the vector.
   */
  get magnitude(): number {
    const x = this.#xy[0],
      y = this.#xy[1];
    if (x !== this.#prev[0] || y !== this.#prev[1]) {
      this.#mag = sqrt(x ** 2 + y ** 2);
      this.#prev[0] = x;
      this.#prev[1] = y;
    }
    return this.#mag;
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  set magnitude(m: number) {
    const x = this.#xy[0], y = this.#xy[this.#xy];
    const f = m / sqrt(x * x + y * y);
    this.#xy[0] = x * f;
    this.#xy[1] = y * f;
  }

  /**
   * Gets the squared magnitude (length) of the vector.
   * @returns The squared magnitude of the vector.
   */
  get magnitudeSq(): number {
    const x = this.#xy[0], y = this.#xy[1];
    return x * x + y * y;
  }

  /**
   * Gets the angle between the vector and the positive x-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleX(): number {
    const a = atan2(this.#xy[1], this.#xy[0]);
    return a < 0 ? a + PI2 : a;
  }

  /**
   * Sets the angle between the vector and the positive x-axis, maintaining the vector's magnitude.
   * @param phi - The new angle in radians.
   */
  set angleX(phi: number) {
    const M = this.magnitude;
    this.#xy[0] = M * cos(phi);
    this.#xy[1] = M * sin(phi);
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
  const a = -atan2(this.#xy[0], this.#xy[1]);
  return a < 0 ? a + PI2 : a;
  }

  /**
   * Sets the angle between the vector and the positive y-axis, maintaining the vector's magnitude.
   * @param phi - The new angle in radians.
   */
  set angleY(phi: number) {
    const M = this.magnitude;
    this.#xy[0] = M * -sin(phi);
    this.#xy[1] = M * cos(phi);
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec2Like): this {
    this.#xy[0] += v.x;
    this.#xy[1] += v.y;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec2Like): this {
    this.#xy[0] -= v.x;
    this.#xy[1] -= v.y;
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec2Like): this {
    this.#xy[0] *= v.x;
    this.#xy[1] *= v.y;
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec2Like): this {
    this.#xy[0] = this.#xy[0] / v.x;
    this.#xy[1] = this.#xy[1] / v.y;
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec2Like): number {
    const x = this.#xy[0];
    const y = this.#xy[1];
    const vX = v.x;
    const vY = v.y;
    return atan2(x * vY - y * vX, x * vX + y * vY);
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
      this.#xy[0] = (this.#xy[0] / M) * max;
      this.#xy[1] = (this.#xy[1] / M) * max;
    } else if (M < min) {
      this.#xy[0] = (this.#xy[0] / M) * min;
      this.#xy[1] = (this.#xy[1] / M) * min;
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec2 instance with the same components.
   */
  clone(): Vec2 {
    return new Vec2(this.#xy[0], this.#xy[1]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec2Like): this {
    this.#xy[0] = v.x;
    this.#xy[1] = v.y;
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec2Like): number {
    return sqrt((this.#xy[0] - v.x) ** 2 + (this.#xy[1] - v.y) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec2Like): number {
    const absX = abs(this.#xy[0] - v.x);
    const absY = abs(this.#xy[1] - v.y);
    return absX >= absY ? absX : absY;
  }

  /**
   * Calculates the Manhattan distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec2Like): number {
    return abs(this.#xy[0] - v.x) + abs(this.#xy[1] - v.y);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec2Like, p: number): number {
    return (abs(this.#xy[0] - v.x) ** p + abs(this.#xy[1] - v.y) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec2Like): number {
    return (this.#xy[0] - v.x) ** 2 + (this.#xy[1] - v.y) ** 2;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec2Like): number {
    return this.#xy[0] * v.x + this.#xy[1] * v.y;
  }

  /**
   * Calculates the cross product of this vector with another vector.
   * @param v - The other vector.
   * @returns The cross product of the vectors.
   */
  cross(v: Vec2Like): number {
    return this.#xy[0] * v.y - this.#xy[1] * v.x;
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec2 instance representing the reflected vector.
   */
  reflect(normal: Vec2Like): Vec2 {
    const dot = this.dot(normal);
    return new Vec2(this.#xy[0] - 2 * dot * normal.x, this.#xy[1] - 2 * dot * normal.y);
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.#xy[0];
    const y = this.#xy[1];
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity;
  }

  /**
   * Checks if this vector has NaN components.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.#xy[0]) || Number.isNaN(this.#xy[1]);
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return this.#xy[0] === 0 && this.#xy[1] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns `this` instance for method chaining.
   */
  limitMax(max: number): this {
    const M = this.magnitude;
    if (M > max) {
      this.#xy[0] = (this.#xy[0] / M) * max;
      this.#xy[1] = (this.#xy[1] / M) * max;
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
      this.#xy[0] = (this.#xy[0] / M) * min;
      this.#xy[1] = (this.#xy[1] / M) * min;
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns `this` instance for method chaining.
   */
  lookAt(v: Vec2Like): this {
    const m = this.magnitude;
    const vM = v.magnitude;
    this.#xy[0] = (v.x / vM) * m;
    this.#xy[1] = (v.y / vM) * m;
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.#xy[0] *= -1;
    this.#xy[1] *= -1;
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns `this` instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.#xy[0] /= M;
    this.#xy[1] /= M;
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns `this` instance for method chaining.
   */
  project(v: Vec2Like): this {
    const M = this.magnitude;
    const vM = v.magnitude;
    const x = this.#xy[0];
    const y = this.#xy[1];
    const vX = v.x;
    const vY = v.y;
    const f = M * cos(atan2(x * vY - y * vX, x * vX + y * vY));
    this.#xy[0] = (vX / vM) * f;
    this.#xy[1] = (vY / vM) * f;
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns `this` instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    const phi = random() * PI2;
    const M = this.magnitude;
    this.#xy[0] = M * cos(phi);
    this.#xy[1] = M * sin(phi);
    return this;
  }

  /**
   * Rotates this vector around the Z-axis.
   * @param phi - The angle of rotation in radians.
   * @returns `this` instance for method chaining.
   */
  rotateZ(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const x = this.#xy[0];
    const y = this.#xy[1];
    this.#xy[0] = x * cosPhi - y * sinPhi;
    this.#xy[1] = x * sinPhi + y * cosPhi;
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec2Like): boolean {
    return this.#xy[0] === v.x && this.#xy[1] === v.y;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec2Like): boolean {
    return this.#xy[0] === -v.x && this.#xy[1] === -v.y;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec2Like, epsilon: number = Number.EPSILON): boolean {
    return abs(this.#xy[0] - v.x) <= epsilon && abs(this.#xy[1] - v.y) <= epsilon;
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.#xy[0] *= c;
    this.#xy[1] *= c;
    return this;
  }

  /**
   * Rotates this vector 90 degrees to the left.
   * @returns `this` instance for method chaining.
   */
  turnLeft(): this {
    const x = this.#xy[0];
    this.#xy[0] = -this.#xy[1];
    this.#xy[1] = x;
    return this;
  }

  /**
   * Rotates this vector 90 degrees to the right.
   * @returns `this` instance for method chaining.
   */
  turnRight(): this {
    const x = this.#xy[0];
    this.#xy[0] = this.#xy[1];
    this.#xy[1] = -x;
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.#xy[0] = 0;
    this.#xy[1] = 0;
    return this;
  }

  /**
   * Iterator over this vector's components.
   * @yields The x and y components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.#xy[0];
    yield this.#xy[1];
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "Vec2(x, y)".
   */
  toString(): string {
    return `Vec2(${this.#xy[0]}, ${this.#xy[1]})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x and y properties.
   */
  toObject(): XYObject {
    return { x: this.#xy[0], y: this.#xy[1] };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYObject {
    return this.toObject();
  }

  /**
   * Adds two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec2 instance representing the sum.
   */
  static add(v: Vec2Like, w: Vec2Like): Vec2 {
    return new Vec2(v.x + w.x, v.y + w.y);
  }

  /**
   * Subtracts one vector from another.
   * @param v - The vector to subtract from.
   * @param w - The vector to subtract.
   * @returns A new Vec2 instance representing the difference.
   */
  static subtract(v: Vec2Like, w: Vec2Like): Vec2 {
    return new Vec2(v.x - w.x, v.y - w.y);
  }

  /**
   * Multiplies one vector with another.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec2 instance representing the multiplied value.
   */
  static multiply(v: Vec2Like, w: Vec2Like): Vec2 {
    return new Vec2(v.x * w.x, v.y * w.y);
  }

  /**
   * Divides one vector with another.
   * @param v - Divident.
   * @param w - Divisor.
   * @returns A new Vec2 instance representing the divided value.
   */
  static divide(v: Vec2Like, w: Vec2Like): Vec2 {
    return new Vec2(v.x / w.x, v.y / w.y);
  }

  /**
   * Calculates the angle between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The angle between the vectors in radians.
   */
  static angleBetween(v: Vec2Like, w: Vec2Like): number {
    const vX = v.x;
    const vY = v.y;
    const wX = w.x;
    const wY = w.y;
    return atan2(vX * wY - vY * wX, vX * wX + vY * wY);
  }

  /**
   * Calculates the Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The distance between the vectors.
   */
  static distance(v: Vec2Like, w: Vec2Like): number {
    return sqrt((v.x - w.x) ** 2 + (v.y - w.y) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Chebyshev distance between the vectors.
   */
  static distanceChebyshev(v: Vec2Like, w: Vec2Like): number {
    const absX = abs(v.x - w.x);
    const absY = abs(v.y - w.y);
    return absX >= absY ? absX : absY;
  }

  /**
   * Calculates the Manhattan distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Manhattan distance between the vectors.
   */
  static distanceManhattan(v: Vec2Like, w: Vec2Like): number {
    return abs(v.x - w.x) + abs(v.y - w.y);
  }

  /**
   * Calculates the Minkowski distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  static distanceMinkowski(v: Vec2Like, w: Vec2Like, p: number): number {
    return (abs(v.x - w.x) ** p + abs(v.y - w.y) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The squared distance between the vectors.
   */
  static distanceSq(v: Vec2Like, w: Vec2Like): number {
    return (v.x - w.x) ** 2 + (v.y - w.y) ** 2;
  }

  /**
   * Calculates the dot product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The dot product of the vectors.
   */
  static dot(v: Vec2Like, w: Vec2Like): number {
    return v.x * w.x + v.y * w.y;
  }

  /**
   * Calculates the cross product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The cross product scalar value.
   */
  static cross(v: Vec2Like, w: Vec2Like): number {
    return v.x * w.y - v.y * w.x;
  }

  /**
   * Reflects the vector across a normal vector.
   * @param v - The vector to reflect.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec2 instance representing the reflected vector.
   */
  static reflect(v: Vec2Like, normal: Vec2Like): Vec2 {
    const dot = v.dot(normal);
    return new Vec2(v.x - 2 * dot * normal.x, v.y - 2 * dot * normal.y);
  }

  /**
   * Creates a Vec2 instance from polar coordinates.
   * @param r - The radius.
   * @param theta - The angle in radians.
   * @returns A new Vec2 instance.
   */
  static fromPolarCoords(r: number, theta: number): Vec2 {
    return new Vec2(r * cos(theta), r * sin(theta));
  }

  /**
   * Creates an immutable Vec2 instance.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @returns A read-only Vec2 instance.
   */
  static immutable(x = 0, y = 0): Readonly<Vec2> {
    return Object.freeze(new Vec2(x, y));
  }

  /**
   * Checks if a vector has infinite components.
   * @param v - The vector to check.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  static isInfinite(v: Vec2Like): boolean {
    const x = v.x;
    const y = v.y;
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity;
  }

  /**
   * Checks if a vector has NaN components.
   * @param v - The vector to check.
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  static isNaN(v: Vec2Like): boolean {
    return Number.isNaN(v.x) || Number.isNaN(v.y);
  }

  /**
   * Checks if a vector is zero.
   * @param v - The vector to check.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  static isZero(v: Vec2Like): boolean {
    return v.x === 0 && v.y === 0;
  }

  /**
   * Performs linear interpolation between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param t - The interpolation parameter (0 to 1).
   * @returns A new Vec2 instance representing the interpolated vector.
   */
  static lerp(v: Vec2Like, w: Vec2Like, t: number): Vec2 {
    if (t > 1) t = 1;
    else if (t < 0) t = 0;
    const vX = v.x;
    const vY = v.y;
    return new Vec2(vX + (w.x - vX) * t, vY + (w.y - vY) * t);
  }

  /**
   * Negates a vector.
   * @param v - The vector to negate.
   * @returns A new Vec2 instance representing the negated vector.
   */
  static negate(v: Vec2Like): Vec2 {
    return new Vec2(-v.x, -v.y);
  }

  /**
   * Normalizes a vector.
   * @param v - The vector to normalize.
   * @returns A new Vec2 instance representing the normalized vector.
   */
  static normalize(v: Vec2Like): Vec2 {
    const M = v.magnitude;
    return new Vec2(v.x / M, v.y / M);
  }

  /**
   * Projects one vector onto another.
   * @param v - The vector to project.
   * @param w - The vector to project onto.
   * @returns A new Vec2 instance representing the projected vector.
   */
  static project(v: Vec2Like, w: Vec2Like): Vec2 {
    const wM = w.magnitude;
    const vX = v.x;
    const vY = v.y;
    const wX = w.x;
    const wY = w.y;
    const f = v.magnitude * cos(atan2(vX * wY - vY * wX, vX * wX + vY * wY));
    return new Vec2((wX / wM) * f, (wY / wM) * f);
  }

  /**
   * Creates a random unit vector.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns A new Vec2 instance representing a random unit vector.
   */
  static random(random: () => number = Math.random): Vec2 {
    const phi = random() * PI2;
    return new Vec2(cos(phi), sin(phi));
  }

  /**
   * Checks if two vectors are equal.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  static satisfyEquality(v: Vec2Like, w: Vec2Like): boolean {
    return v.x === w.x && v.y === w.y;
  }

  /**
   * Checks if two vectors are opposite.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  static satisfyOpposition(v: Vec2Like, w: Vec2Like): boolean {
    return v.x === -w.x && v.y === -w.y;
  }

  /**
   * Compares a vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  static equals(v: Vec2Like, w: Vec2Like, epsilon: number = Number.EPSILON): boolean {
    return abs(v.x - w.x) <= epsilon && abs(v.y - w.y) <= epsilon;
  }

  /**
   * Scales a vector by a scalar value.
   * @param v - The vector to scale.
   * @param c - The scalar value.
   * @returns A new Vec2 instance representing the scaled vector.
   */
  static scale(v: Vec2Like, c: number): Vec2 {
    return new Vec2(v.x * c, v.y * c);
  }

  /**
   * Creates a zero vector.
   * @returns A new Vec2 instance representing a zero vector.
   */
  static zero(): Vec2 {
    return new Vec2();
  }

  /**
   * Creates a vector with all components set to 1.0.
   * @returns A new Vec2 instance representing a vector with all components set to 1.0.
   */
  static one(): Vec2 {
    return new Vec2(1, 1);
  }

  /**
   * Creates a Vec2 from an array.
   * @param arr - An array containing the x and y coordinates.
   * @returns A new Vec2 instance.
   */
  static fromArray(arr: number[]) {
    return new Vec2(arr[0] ?? 0, arr[1] ?? 0);
  }

  /**
   * Creates a Vec2 from an object with x and y properties.
   * @param obj - An object with x and y properties.
   * @returns A new Vec2 instance.
   */
  static fromObject(obj: XYObject) {
    return new Vec2(obj.x, obj.y);
  }

  /**
   * Creates a Vec2 instance from a JSON-parsed object.
   * @param json - The JSON-parsed object containing x and y properties.
   * @returns A new Vec2 instance.
   */
  static fromJSON(json: XYObject): Vec2 {
    return Vec2.fromObject(json);
  }
}
