import type { ArrayVector2D } from "../array-2d/types.js";
import type { XYObject } from "../types.js";
import type { Vec2Like } from "./types.js";
import { Vec2 } from "./vec2.js";

const { PI, sin, cos, atan2, sqrt, abs } = Math;
const PI2 = PI * 2;

/**
 * Proxying 2D vector.
 */
export class ProxyVec2 implements Vec2Like {
  /**
   * Previous values.
   */
  #prev = new Float64Array([0, 0]);

  /**
   * Magniude.
   */
  #mag = 0;

  /**
   * @param getX - Function that returns the x-component of the vector.
   * @param getY - Function that returns the y-component of the vector.
   * @param setX - Function to set the x-component of the vector.
   * @param setY - Function to set the y-component of the vector.
   */
  constructor(
    private getX: () => number,
    private getY: () => number,
    private setX: (x: number) => void,
    private setY: (y: number) => void,
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
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x and y components of the vector.
   */
  get xy(): ArrayVector2D {
    return [this.getX(), this.getY()];
  }

  /**
   * Sets both components of the vector at once.
   * @param xy - An array containing the new x and y components.
   */
  set xy(xy: ArrayVector2D) {
    this.setX(xy[0]);
    this.setY(xy[1]);
  }

  /**
   * Gets the magnitude (length) of the vector.
   * @returns The magnitude of the vector.
   */
  get magnitude(): number {
    const x = this.getX(),
      y = this.getY();
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
    const M = this.magnitude;
    this.setX((this.getX() / M) * m);
    this.setY((this.getY() / M) * m);
  }

  /**
   * Gets the squared magnitude of the vector.
   * @returns The squared magnitude of the vector.
   * Gets the angle between the vector and the positive x-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleX(): number {
    return atan2(this.getY(), this.getX()) + (this.getY() < 0 ? PI2 : 0);
  }

  /**
   * Sets the angle between the vector and the positive x-axis, maintaining the vector's magnitude.
   * @param phi - The new angle in radians.
   */
  set angleX(phi: number) {
    const M = this.magnitude;
    this.setX(M * cos(phi));
    this.setY(M * sin(phi));
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return -atan2(this.getX(), this.getY()) + (this.getX() > 0 ? PI2 : 0);
  }

  /**
   * Sets the angle between the vector and the positive y-axis, maintaining the vector's magnitude.
   * @param phi - The new angle in radians.
   */
  set angleY(phi: number) {
    const M = this.magnitude;
    this.setX(M * -sin(phi));
    this.setY(M * cos(phi));
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec2Like): this {
    this.setX(this.getX() + v.x);
    this.setY(this.getY() + v.y);
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec2Like): this {
    this.setX(this.getX() - v.x);
    this.setY(this.getY() - v.y);
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec2Like): this {
    this.setX(this.getX() * v.x);
    this.setY(this.getY() * v.y);
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec2Like): this {
    this.setX(this.getX() / v.x);
    this.setY(this.getY() / v.y);
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec2Like): number {
    const x = this.getX();
    const y = this.getY();
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
      this.setX((this.getX() / M) * max);
      this.setY((this.getY() / M) * max);
    } else if (M < min) {
      this.setX((this.getX() / M) * min);
      this.setY((this.getY() / M) * min);
    }
    return this;
  }

  /**
   * Creates a new Vec2 instance based on this vector.
   * @returns A new Vec2 instance with the same components.
   */
  clone(): Vec2 {
    return new Vec2(this.getX(), this.getY());
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec2Like): this {
    this.setX(v.x);
    this.setY(v.y);
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec2Like): number {
    return sqrt((this.getX() - v.x) ** 2 + (this.getY() - v.y) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec2Like): number {
    const absX = abs(this.getX() - v.x);
    const absY = abs(this.getY() - v.y);
    return absX >= absY ? absX : absY;
  }

  /**
   * Calculates the Manhattan distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec2Like): number {
    return abs(this.getX() - v.x) + abs(this.getY() - v.y);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec2Like, p: number): number {
    return (abs(this.getX() - v.x) ** p + abs(this.getY() - v.y) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec2Like): number {
    return (this.getX() - v.x) ** 2 + (this.getY() - v.y) ** 2;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec2Like): number {
    return this.getX() * v.x + this.getY() * v.y;
  }

  /**
   * Calculates the cross product of this vector with another vector.
   * @param v - The other vector.
   * @returns The cross product of the vectors.
   */
  cross(v: Vec2Like): number {
    return this.getX() * v.y - this.getY() * v.x;
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec2Like instance representing the reflected vector.
   */
  reflect(normal: Vec2Like): Vec2 {
    const dot = this.dot(normal);
    return new Vec2(this.getX() - 2 * dot * normal.x, this.getY() - 2 * dot * normal.y);
  }

  /**
   * Checks if this vector has infinite components.
   * @returns True if the vector has infinite components, false otherwise.
   */
  isInfinite(): boolean {
    const x = this.getX();
    const y = this.getY();
    return x === Infinity || x === -Infinity || y === Infinity || y === -Infinity;
  }

  /**
   * Checks if this vector has NaN components.
   * @returns True if the vector has NaN components, false otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.getX()) || Number.isNaN(this.getY());
  }

  /**
   * Checks if this vector is zero.
   * @returns True if the vector is zero, false otherwise.
   */
  isZero(): boolean {
    return this.getX() === 0 && this.getY() === 0;
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
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns `this` instance for method chaining.
   */
  lookAt(v: Vec2Like): this {
    const M = this.magnitude;
    const vM = v.magnitude;
    this.setX((v.x / vM) * M);
    this.setY((v.y / vM) * M);
    return this;
  }

  /**
   * Negates this vector.
   * @returns `this` instance for method chaining.
   */
  negate(): this {
    this.setX(this.getX() * -1);
    this.setY(this.getY() * -1);
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
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns `this` instance for method chaining.
   */
  project(v: Vec2Like): this {
    const x = this.getX();
    const y = this.getY();
    const vX = v.x;
    const vY = v.y;
    const vM = v.magnitude;
    const f = this.magnitude * cos(atan2(x * vY - y * vX, x * vX + y * vY));
    this.setX((vX / vM) * f);
    this.setY((vY / vM) * f);
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
    this.setX(M * cos(phi));
    this.setY(M * sin(phi));
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
    const x = this.getX();
    const y = this.getY();
    this.setX(x * cosPhi - y * sinPhi);
    this.setY(x * sinPhi + y * cosPhi);
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  satisfyEquality(v: Vec2Like): boolean {
    return this.getX() === v.x && this.getY() === v.y;
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  satisfyOpposition(v: Vec2Like): boolean {
    return this.getX() === -v.x && this.getY() === -v.y;
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  equals(v: Vec2Like, epsilon: number = Number.EPSILON): boolean {
    return abs(this.getX() - v.x) <= epsilon && abs(this.getY() - v.y) <= epsilon;
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns `this` instance for method chaining.
   */
  scale(c: number): this {
    this.setX(this.getX() * c);
    this.setY(this.getY() * c);
    return this;
  }

  /**
   * Rotates this vector 90 degrees to the left.
   * @returns `this` instance for method chaining.
   */
  turnLeft(): this {
    const x = this.getX();
    this.setX(-this.getY());
    this.setY(x);
    return this;
  }

  /**
   * Rotates this vector 90 degrees to the right.
   * @returns `this` instance for method chaining.
   */
  turnRight(): this {
    const x = this.getX();
    this.setX(this.getY());
    this.setY(-x);
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns `this` instance for method chaining.
   */
  zero(): this {
    this.setX(0);
    this.setY(0);
    return this;
  }

  /**
   * Iterator over this vector's components.
   * @yields The x and y components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.getX();
    yield this.getY();
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "ProxyVec2(x, y)".
   */
  toString(): string {
    return `ProxyVec2(${this.getX()}, ${this.getY()})`;
  }

  /**
   * Converts the vector to a plain object.
   * @returns An object with x and y properties.
   */
  toObject(): XYObject {
    return { x: this.getX(), y: this.getY() };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): XYObject {
    return this.toObject();
  }
}
