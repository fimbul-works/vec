/**
 * Documentation for 2D Vector class.
 * @module Vec2
 */

const { PI, sin, cos, atan2, sqrt, abs } = Math;
const PI2 = PI * 2;

/**
 * Represents a 2D vector with various operations.
 */
export class Vec2 {
  #magnitude = 0;
  #prevXY: Float64Array = new Float64Array([0, 0]);
  #xy: Float64Array = new Float64Array(2);

  /**
   * Computes and updates the magnitude of the vector.
   * @private
   * @param {number} x - The x-component of the vector.
   * @param {number} y - The y-component of the vector.
   * @returns {void}
   */
  #computeMagnitude(x = this.#xy[0], y = this.#xy[1]): void {
    if (x !== this.#prevXY[0] || y !== this.#prevXY[1]) {
      this.#magnitude = sqrt(x ** 2 + y ** 2);
      this.#prevXY[0] = x;
      this.#prevXY[1] = y;
    }
  }

  /**
   * Creates a new Vec2 instance.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   */
  constructor(x = 0, y = x) {
    this.#xy[0] = x;
    this.#xy[1] = y;
    this.#computeMagnitude(x, y);
  }

  /**
   * Adds two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec2 instance representing the sum.
   */
  static add(v: Vec2, w: Vec2): Vec2 {
    return new Vec2(v.#xy[0] + w.#xy[0], v.#xy[1] + w.#xy[1]);
  }

  /**
   * Subtracts one vector from another.
   * @param v - The vector to subtract from.
   * @param w - The vector to subtract.
   * @returns A new Vec2 instance representing the difference.
   */
  static subtract(v: Vec2, w: Vec2): Vec2 {
    return new Vec2(v.#xy[0] - w.#xy[0], v.#xy[1] - w.#xy[1]);
  }

  /**
   * Multiplies one vector with another.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec2 instance representing the multiplied value.
   */
  static multiply(v: Vec2, w: Vec2): Vec2 {
    return new Vec2(v.x * w.x, v.y * w.y);
  }

  /**
   * Divides one vector with another.
   * @param v - Divident.
   * @param w - Divisor.
   * @returns A new Vec2 instance representing the divided value.
   */
  static divide(v: Vec2, w: Vec2): Vec2 {
    return new Vec2(w.x === 0 ? Number.POSITIVE_INFINITY : v.x / w.x, w.y === 0 ? Number.POSITIVE_INFINITY : v.y / w.y);
  }

  /**
   * Calculates the angle between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The angle between the vectors in radians.
   */
  static angleBetween(v: Vec2, w: Vec2): number {
    const vX = v.#xy[0];
    const vY = v.#xy[1];
    const wX = w.#xy[0];
    const wY = w.#xy[1];
    return atan2(vX * wY - vY * wX, vX * wX + vY * wY);
  }

  /**
   * Calculates the Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The distance between the vectors.
   */
  static distance(v: Vec2, w: Vec2): number {
    return sqrt((v.#xy[0] - w.#xy[0]) ** 2 + (v.#xy[1] - w.#xy[1]) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Chebyshev distance between the vectors.
   */
  static distanceChebyshev(v: Vec2, w: Vec2): number {
    const absX = abs(v.#xy[0] - w.#xy[0]);
    const absY = abs(v.#xy[1] - w.#xy[1]);
    return absX >= absY ? absX : absY;
  }

  /**
   * Calculates the Manhattan distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Manhattan distance between the vectors.
   */
  static distanceManhattan(v: Vec2, w: Vec2): number {
    return abs(v.#xy[0] - w.#xy[0]) + abs(v.#xy[1] - w.#xy[1]);
  }

  /**
   * Calculates the Minkowski distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  static distanceMinkowski(v: Vec2, w: Vec2, p: number): number {
    return (abs(v.#xy[0] - w.#xy[0]) ** p + abs(v.#xy[1] - w.#xy[1]) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The squared distance between the vectors.
   */
  static distanceSq(v: Vec2, w: Vec2): number {
    return (v.#xy[0] - w.#xy[0]) ** 2 + (v.#xy[1] - w.#xy[1]) ** 2;
  }

  /**
   * Calculates the dot product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The dot product of the vectors.
   */
  static dot(v: Vec2, w: Vec2): number {
    return v.#xy[0] * w.#xy[0] + v.#xy[1] * w.#xy[1];
  }

  /**
   * Calculates the cross product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The cross product scalar value.
   */
  static cross(v: Vec2, w: Vec2): number {
    return v.#xy[0] * w.#xy[1] - v.#xy[1] * w.#xy[0];
  }

  /**
   * Reflects the vector across a normal vector.
   * @param v - The vector to reflect.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec2 instance representing the reflected vector.
   */
  static reflect(v: Vec2, normal: Vec2): Vec2 {
    const dot = v.dot(normal);
    return new Vec2(v.#xy[0] - 2 * dot * normal.#xy[0], v.#xy[1] - 2 * dot * normal.#xy[1]);
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
   * Creates an immutable Vec2-like object.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @returns An immutable object with Vec2-like properties.
   */
  static immutable(
    x = 0,
    y = 0,
  ): Readonly<{
    angleX: number;
    angleY: number;
    isInfinite: boolean;
    isNaN: boolean;
    isZero: boolean;
    magnitude: number;
    magnitudeSq: number;
    x: number;
    xy: readonly number[];
    y: number;
  }> {
    const data = new Float64Array(10);
    data[0] = x;
    data[1] = y;
    data[4] = atan2(y, x) + (y < 0 ? PI2 : 0);
    data[5] = -atan2(x, y) + (x > 0 ? PI2 : 0);
    const magnitudeSq = x ** 2 + y ** 2;
    data[8] = sqrt(magnitudeSq);
    data[9] = magnitudeSq;
    const isInfinite =
      x === Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY;
    const _isNaN = Number.isNaN(x) && Number.isNaN(y);
    const isZero = x === 0 && y === 0;
    const xy = Object.freeze([...data.slice(0, 2)]);
    return {
      get x() {
        return data[0];
      },
      get y() {
        return data[1];
      },
      get xy() {
        return xy;
      },
      get magnitude() {
        return data[8];
      },
      get magnitudeSq() {
        return data[10];
      },
      get angleX() {
        return data[4];
      },
      get angleY() {
        return data[5];
      },
      get isInfinite() {
        return isInfinite;
      },
      get isNaN() {
        return _isNaN;
      },
      get isZero() {
        return isZero;
      },
    };
  }

  /**
   * Checks if a vector has infinite components.
   * @param v - The vector to check.
   * @returns True if the vector has infinite components, false otherwise.
   */
  static isInfinite(v: Vec2): boolean {
    const x = v.#xy[0];
    const y = v.#xy[1];
    return (
      x === Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY
    );
  }

  /**
   * Checks if a vector has NaN components.
   * @param v - The vector to check.
   * @returns True if the vector has NaN components, false otherwise.
   */
  static isNaN(v: Vec2): boolean {
    return Number.isNaN(v.#xy[0]) || Number.isNaN(v.#xy[1]);
  }

  /**
   * Checks if a vector is zero.
   * @param v - The vector to check.
   * @returns True if the vector is zero, false otherwise.
   */
  static isZero(v: Vec2): boolean {
    return v.#xy[0] === 0 && v.#xy[1] === 0;
  }

  /**
   * Performs linear interpolation between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param t - The interpolation parameter (0 to 1).
   * @returns A new Vec2 instance representing the interpolated vector.
   */
  static lerp(v: Vec2, w: Vec2, t: number): Vec2 {
    if (t > 1) t = 1;
    else if (t < 0) t = 0;
    const vX = v.#xy[0];
    const vY = v.#xy[1];
    return new Vec2(vX + (w.#xy[0] - vX) * t, vY + (w.#xy[1] - vY) * t);
  }

  /**
   * Negates a vector.
   * @param v - The vector to negate.
   * @returns A new Vec2 instance representing the negated vector.
   */
  static negate(v: Vec2): Vec2 {
    return new Vec2(-v.#xy[0], -v.#xy[1]);
  }

  /**
   * Normalizes a vector.
   * @param v - The vector to normalize.
   * @returns A new Vec2 instance representing the normalized vector.
   */
  static normalize(v: Vec2): Vec2 {
    const m = v.#magnitude;
    return new Vec2(v.#xy[0] / m, v.#xy[1] / m);
  }

  /**
   * Projects one vector onto another.
   * @param v - The vector to project.
   * @param w - The vector to project onto.
   * @returns A new Vec2 instance representing the projected vector.
   */
  static project(v: Vec2, w: Vec2): Vec2 {
    const vX = v.#xy[0];
    const vY = v.#xy[1];
    const wX = w.#xy[0];
    const wY = w.#xy[1];
    const wM = w.#magnitude;
    const f = v.#magnitude * cos(atan2(vX * wY - vY * wX, vX * wX + vY * wY));
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
   * @returns True if the vectors are equal, false otherwise.
   */
  static satisfyEquality(v: Vec2, w: Vec2): boolean {
    return v.#xy[0] === w.#xy[0] && v.#xy[1] === w.#xy[1];
  }

  /**
   * Checks if two vectors are opposite.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  static satisfyOpposition(v: Vec2, w: Vec2): boolean {
    return v.#xy[0] === -w.#xy[0] && v.#xy[1] === -w.#xy[1];
  }

  /**
   * Compares a vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  static equals(v: Vec2, w: Vec2, epsilon: number = Number.EPSILON): boolean {
    return abs(v.#xy[0] - w.#xy[0]) <= epsilon && abs(v.#xy[1] - w.#xy[1]) <= epsilon;
  }

  /**
   * Scales a vector by a scalar value.
   * @param v - The vector to scale.
   * @param c - The scalar value.
   * @returns A new Vec2 instance representing the scaled vector.
   */
  static scale(v: Vec2, c: number): Vec2 {
    return new Vec2(v.#xy[0] * c, v.#xy[1] * c);
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
   * @param {[number, number] | number[]} arr - An array containing the x and y coordinates.
   * @returns {Vec2} A new Vec2 instance.
   */
  static fromArray(arr: [number, number] | number[]) {
    return new Vec2(arr[0] ?? 0, arr[1] ?? 0);
  }

  /**
   * Creates a Vec2 from an object with x and y properties.
   * @param {{ x: number; y: number }} obj - An object with x and y properties.
   * @returns {Vec2} A new Vec2 instance.
   */
  static fromObject(obj: { x: number; y: number }) {
    return new Vec2(obj.x, obj.y);
  }

  /**
   * Creates a Vec2 instance from a JSON-parsed object.
   * @param json - The JSON-parsed object containing x and y properties.
   * @returns A new Vec2 instance.
   */
  static fromJSON(json: { x: number; y: number }): Vec2 {
    return Vec2.fromObject(json);
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
    this.#computeMagnitude();
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
    this.#computeMagnitude();
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x and y components of the vector.
   */
  get xy(): [number, number] {
    return Array.from(this.#xy.slice()) as [number, number];
  }

  /**
   * Sets both components of the vector at once.
   * @param xy - An array containing the new x and y components.
   */
  set xy(xy: [number, number] | number[]) {
    this.#xy[0] = xy[0];
    this.#xy[1] = xy[1];
    this.#computeMagnitude();
  }

  /**
   * Gets the angle between the vector and the positive x-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleX(): number {
    return atan2(this.#xy[1], this.#xy[0]) + (this.#xy[1] < 0 ? PI2 : 0);
  }

  /**
   * Sets the angle between the vector and the positive x-axis, maintaining the vector's magnitude.
   * @param phi - The new angle in radians.
   */
  set angleX(phi: number) {
    const m = this.#magnitude;
    this.#xy[0] = m * cos(phi);
    this.#xy[1] = m * sin(phi);
    this.#computeMagnitude();
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return -atan2(this.#xy[0], this.#xy[1]) + (this.#xy[0] > 0 ? PI2 : 0);
  }

  /**
   * Sets the angle between the vector and the positive y-axis, maintaining the vector's magnitude.
   * @param phi - The new angle in radians.
   */
  set angleY(phi: number) {
    const m = this.#magnitude;
    this.#xy[0] = m * -sin(phi);
    this.#xy[1] = m * cos(phi);
    this.#computeMagnitude();
  }

  /**
   * Gets the magnitude (length) of the vector.
   * @returns The magnitude of the vector.
   */
  get magnitude(): number {
    return this.#magnitude;
  }

  /**
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  set magnitude(m: number) {
    const M = this.#magnitude;
    this.#xy[0] = (this.#xy[0] / M) * m;
    this.#xy[1] = (this.#xy[1] / M) * m;
    this.#computeMagnitude();
  }

  /**
   * Gets the squared magnitude of the vector.
   * This is faster to compute than the actual magnitude and is useful for comparisons.
   * @returns The squared magnitude of the vector.
   */
  get magnitudeSq(): number {
    return this.#magnitude ** 2;
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns This Vec2 instance for method chaining.
   */
  add(v: Vec2): this {
    this.#xy[0] += v.#xy[0];
    this.#xy[1] += v.#xy[1];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns This Vec2 instance for method chaining.
   */
  subtract(v: Vec2): this {
    this.#xy[0] -= v.#xy[0];
    this.#xy[1] -= v.#xy[1];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns This Vec2 instance for method chaining.
   */
  multiply(v: Vec2): this {
    this.#xy[0] *= v.#xy[0];
    this.#xy[1] *= v.#xy[1];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns This Vec2 instance for method chaining.
   */
  divide(v: Vec2): this {
    this.#xy[0] = v.#xy[0] === 0 ? Number.POSITIVE_INFINITY : this.#xy[0] / v.#xy[0];
    this.#xy[1] = v.#xy[1] === 0 ? Number.POSITIVE_INFINITY : this.#xy[1] / v.#xy[1];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec2): number {
    const x = this.#xy[0];
    const y = this.#xy[1];
    const vX = v.#xy[0];
    const vY = v.#xy[1];
    return atan2(x * vY - y * vX, x * vX + y * vY);
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param min - The minimum magnitude.
   * @param max - The maximum magnitude.
   * @returns This Vec2 instance for method chaining.
   */
  clamp(min: number, max: number): this {
    const m = this.#magnitude;
    if (m > max) {
      this.#xy[0] = (this.#xy[0] / m) * max;
      this.#xy[1] = (this.#xy[1] / m) * max;
      this.#computeMagnitude();
    } else if (m < min) {
      this.#xy[0] = (this.#xy[0] / m) * min;
      this.#xy[1] = (this.#xy[1] / m) * min;
      this.#computeMagnitude();
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
   * @returns This Vec2 instance for method chaining.
   */
  copy(v: Vec2): this {
    this.#xy[0] = v.#xy[0];
    this.#xy[1] = v.#xy[1];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec2): number {
    return sqrt((this.#xy[0] - v.#xy[0]) ** 2 + (this.#xy[1] - v.#xy[1]) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec2): number {
    const absX = abs(this.#xy[0] - v.#xy[0]);
    const absY = abs(this.#xy[1] - v.#xy[1]);
    return absX >= absY ? absX : absY;
  }

  /**
   * Calculates the Manhattan distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec2): number {
    return abs(this.#xy[0] - v.#xy[0]) + abs(this.#xy[1] - v.#xy[1]);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec2, p: number): number {
    return (abs(this.#xy[0] - v.#xy[0]) ** p + abs(this.#xy[1] - v.#xy[1]) ** p) ** (1 / p);
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec2): number {
    return (this.#xy[0] - v.#xy[0]) ** 2 + (this.#xy[1] - v.#xy[1]) ** 2;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec2): number {
    return this.#xy[0] * v.#xy[0] + this.#xy[1] * v.#xy[1];
  }

  /**
   * Calculates the cross product of this vector with another vector.
   * @param v - The other vector.
   * @returns The cross product of the vectors.
   */
  cross(v: Vec2): number {
    return this.#xy[0] * v.#xy[1] - this.#xy[1] * v.#xy[0];
  }

  /**
   * Reflects this vector across a normal vector.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec2 instance representing the reflected vector.
   */
  reflect(normal: Vec2): Vec2 {
    const dot = this.dot(normal);
    return new Vec2(this.#xy[0] - 2 * dot * normal.#xy[0], this.#xy[1] - 2 * dot * normal.#xy[1]);
  }

  /**
   * Checks if this vector has infinite components.
   * @returns True if the vector has infinite components, false otherwise.
   */
  isInfinite(): boolean {
    const x = this.#xy[0];
    const y = this.#xy[1];
    return (
      x === Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY
    );
  }

  /**
   * Checks if this vector has NaN components.
   * @returns True if the vector has NaN components, false otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.#xy[0]) || Number.isNaN(this.#xy[1]);
  }

  /**
   * Checks if this vector is zero.
   * @returns True if the vector is zero, false otherwise.
   */
  isZero(): boolean {
    return this.#xy[0] === 0 && this.#xy[1] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns This Vec2 instance for method chaining.
   */
  limitMax(max: number): this {
    const m = this.#magnitude;
    if (m > max) {
      this.#xy[0] = (this.#xy[0] / m) * max;
      this.#xy[1] = (this.#xy[1] / m) * max;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Limits the minimum magnitude of this vector.
   * @param min - The minimum magnitude.
   * @returns This Vec2 instance for method chaining.
   */
  limitMin(min: number): this {
    const m = this.#magnitude;
    if (m < min) {
      this.#xy[0] = (this.#xy[0] / m) * min;
      this.#xy[1] = (this.#xy[1] / m) * min;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns This Vec2 instance for method chaining.
   */
  lookAt(v: Vec2): this {
    const m = this.#magnitude;
    const vM = v.#magnitude;
    this.#xy[0] = (v.#xy[0] / vM) * m;
    this.#xy[1] = (v.#xy[1] / vM) * m;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Negates this vector.
   * @returns This Vec2 instance for method chaining.
   */
  negate(): this {
    this.#xy[0] *= -1;
    this.#xy[1] *= -1;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns This Vec2 instance for method chaining.
   */
  normalize(): this {
    const m = this.#magnitude;
    this.#xy[0] /= m;
    this.#xy[1] /= m;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns This Vec2 instance for method chaining.
   */
  project(v: Vec2): this {
    const x = this.#xy[0];
    const y = this.#xy[1];
    const vX = v.#xy[0];
    const vY = v.#xy[1];
    const vM = v.#magnitude;
    const f = this.#magnitude * cos(atan2(x * vY - y * vX, x * vX + y * vY));
    this.#xy[0] = (vX / vM) * f;
    this.#xy[1] = (vY / vM) * f;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns This Vec2 instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    const phi = random() * PI2;
    const m = this.#magnitude;
    this.#xy[0] = m * cos(phi);
    this.#xy[1] = m * sin(phi);
    this.#computeMagnitude();
    return this;
  }

  /**
   * Rotates this vector around the Z-axis.
   * @param phi - The angle of rotation in radians.
   * @returns This Vec2 instance for method chaining.
   */
  rotateZ(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const x = this.#xy[0];
    const y = this.#xy[1];
    this.#xy[0] = x * cosPhi - y * sinPhi;
    this.#xy[1] = x * sinPhi + y * cosPhi;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  satisfyEquality(v: Vec2): boolean {
    return this.#xy[0] === v.#xy[0] && this.#xy[1] === v.#xy[1];
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  satisfyOpposition(v: Vec2): boolean {
    return this.#xy[0] === -v.#xy[0] && this.#xy[1] === -v.#xy[1];
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  equals(v: Vec2, epsilon: number = Number.EPSILON): boolean {
    return abs(this.#xy[0] - v.#xy[0]) <= epsilon && abs(this.#xy[1] - v.#xy[1]) <= epsilon;
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns This Vec2 instance for method chaining.
   */
  scale(c: number): this {
    this.#xy[0] *= c;
    this.#xy[1] *= c;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Rotates this vector 90 degrees to the left.
   * @returns This Vec2 instance for method chaining.
   */
  turnLeft(): this {
    const x = this.#xy[0];
    this.#xy[0] = -this.#xy[1];
    this.#xy[1] = x;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Rotates this vector 90 degrees to the right.
   * @returns This Vec2 instance for method chaining.
   */
  turnRight(): this {
    const x = this.#xy[0];
    this.#xy[0] = this.#xy[1];
    this.#xy[1] = -x;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns This Vec2 instance for method chaining.
   */
  zero(): this {
    this.#xy[0] = 0;
    this.#xy[1] = 0;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Makes the Vec2 instance iterable.
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
  toObject(): { x: number; y: number } {
    return { x: this.#xy[0], y: this.#xy[1] };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): { x: number; y: number } {
    return this.toObject();
  }
}
