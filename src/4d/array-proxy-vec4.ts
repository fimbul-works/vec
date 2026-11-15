import type { ArrayVector4D } from "../array-4d/types.js";
import type { ProxyArrayVectorTarget } from "../types.js";
import type { Vec4Like } from "./types.js";
import { Vec4 } from "./vec4.js";

const { cos, acos, atan2, sqrt, abs } = Math;

/** A 4D vector backed by an interleaved array. Stride is the gap between components. */
export class ArrayProxyVec4<T extends ProxyArrayVectorTarget> implements Vec4Like {
  /**
   * Previous values.
   */
  #prev = new Float64Array([0, 0, 0, 0]);
  /**
   * Magniude.
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
   * Index for the x-component.
   */
  #ix = 0;
  /**
   * Index for the y-component.
   */
  #iy = 1;
  /**
   * Index for the z-component.
   */
  #iz = 2;
  /**
   * Index for the w-component.
   */
  #iw = 3;

  /**
   * @param target - The target array.
   * @param offset - The offset in the array.
   * @param gap - Gap between components (stride).
   * @throws Error when offset is negative, or not an integer.
   * @throws Error when gap is negative, or not an integer.
   * @throws Error when w-component is out of target array bounds.
   */
  constructor(target: T, offset: number, gap: number) {
    this.#target = target;
    this.#offset = offset;
    this.#gap = gap;
    this.bind(target, offset, gap);
  }

  /**
   * Set the proxy target.
   * @param target - The target array.
   * @param offset - The offset in the array.
   * @param stride - The stride between positions.
   * @throws Error when w-component is out of target array bounds.
   */
  public bind(target: T, offset: number, gap: number): void {
    if (!Number.isInteger(offset) || offset < 0) throw new Error(`Invalid offset: ${offset}`);
    if (!Number.isInteger(gap) || gap < 0) throw new Error(`Invalid gap: ${gap}`);

    const w = offset + (gap + 1) * 3;
    if (w >= target.length) throw new Error(`Index out of bounds: ${w} >= ${target.length}`);

    this.#target = target;
    this.#offset = offset;
    this.#gap = gap;
    this.#ix = offset;
    this.#iy = offset + gap + 1;
    this.#iz = offset + (gap + 1) * 2;
    this.#iw = w;
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
   * @throws Error when w-component is out of target bounds.
   */
  set offset(offset: number) {
    this.bind(this.#target, offset, this.#gap);
  }

  /**
   * Range of min and max component indices.
   */
  get indexRange(): readonly [number, number] {
    return [this.#offset, this.#iw] as const;
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
    this.#target[this.#ix] = x;
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
    this.#target[this.#iy] = y;
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
    this.#target[this.#iz] = z;
  }

  /**
   * Gets the w-component of the vector.
   * @returns The w-component.
   */
  get w(): number {
    return this.#target[this.#iw];
  }

  /**
   * Sets the w-component of the vector.
   * @param w - The new w-component.
   */
  set w(w: number) {
    this.#target[this.#iw] = w;
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y, z, and w components of the vector.
   */
  get xyzw(): ArrayVector4D {
    return [this.#target[this.#ix], this.#target[this.#iy], this.#target[this.#iz], this.#target[this.#iw]];
  }

  /**
   * Sets all components of the vector at once.
   * @param value - An array containing the new x, y, z, and w components.
   */
  set xyzw(value: ArrayVector4D) {
    this.#target[this.#ix] = value[0] ?? 0;
    this.#target[this.#iy] = value[1] ?? 0;
    this.#target[this.#iz] = value[2] ?? 0;
    this.#target[this.#iw] = value[3] ?? 0;
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
   */
  set r(r: number) {
    this.#target[this.#ix] = r;
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
   */
  set g(g: number) {
    this.#target[this.#iy] = g;
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
    this.#target[this.#iz] = b;
  }

  /**
   * Gets the Alpha-component of the color.
   * @returns The Alpha-component.
   */
  get a() {
    return this.#target[this.#iw];
  }

  /**
   * Sets the Alpha-component of the Color.
   * @param a - The new Alpha-component.
   */
  set a(a: number) {
    this.#target[this.#iw] = a;
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
    return atan2(
      sqrt(this.#target[this.#iy] ** 2 + this.#target[this.#iz] ** 2 + this.#target[this.#iw] ** 2),
      this.#target[this.#ix],
    );
  }

  /**
   * Gets the angle between the vector and the positive y-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleY(): number {
    return atan2(
      sqrt(this.#target[this.#iz] ** 2 + this.#target[this.#iw] ** 2 + this.#target[this.#ix] ** 2),
      this.#target[this.#iy],
    );
  }

  /**
   * Gets the angle between the vector and the positive z-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleZ(): number {
    return atan2(
      sqrt(this.#target[this.#iw] ** 2 + this.#target[this.#ix] ** 2 + this.#target[this.#iy] ** 2),
      this.#target[this.#iz],
    );
  }

  /**
   * Gets the angle between the vector and the positive w-axis in radians.
   * @returns The angle in radians, always in the range [0, 2π).
   */
  get angleW(): number {
    return atan2(
      sqrt(this.#target[this.#ix] ** 2 + this.#target[this.#iy] ** 2 + this.#target[this.#iz] ** 2),
      this.#target[this.#iw],
    );
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
    this.#target[this.#ix] = (this.#target[this.#ix] / M) * m;
    this.#target[this.#iy] = (this.#target[this.#iy] / M) * m;
    this.#target[this.#iz] = (this.#target[this.#iz] / M) * m;
    this.#target[this.#iw] = (this.#target[this.#iw] / M) * m;
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns `this` instance for method chaining.
   */
  add(v: Vec4Like): this {
    this.#target[this.#ix] += v.x;
    this.#target[this.#iy] += v.y;
    this.#target[this.#iz] += v.z;
    this.#target[this.#iw] += v.w;
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns `this` instance for method chaining.
   */
  subtract(v: Vec4Like): this {
    this.#target[this.#ix] -= v.x;
    this.#target[this.#iy] -= v.y;
    this.#target[this.#iz] -= v.z;
    this.#target[this.#iw] -= v.w;
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns `this` instance for method chaining.
   */
  multiply(v: Vec4Like): this {
    this.#target[this.#ix] *= v.x;
    this.#target[this.#iy] *= v.y;
    this.#target[this.#iz] *= v.z;
    this.#target[this.#iw] *= v.w;
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns `this` instance for method chaining.
   */
  divide(v: Vec4Like): this {
    this.#target[this.#ix] = v.x === 0 ? Number.POSITIVE_INFINITY : this.#target[this.#ix] / v.x;
    this.#target[this.#iy] = v.y === 0 ? Number.POSITIVE_INFINITY : this.#target[this.#iy] / v.y;
    this.#target[this.#iz] = v.z === 0 ? Number.POSITIVE_INFINITY : this.#target[this.#iz] / v.z;
    this.#target[this.#iw] = v.w === 0 ? Number.POSITIVE_INFINITY : this.#target[this.#iw] / v.w;
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec4Like): number {
    return acos(
      (this.#target[this.#ix] * v.x +
        this.#target[this.#iy] * v.y +
        this.#target[this.#iz] * v.z +
        this.#target[this.#iw] * v.w) /
        (this.magnitude * v.magnitude),
    );
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param min - The minimum magnitude.
   * @param max - The maximum magnitude.
   * @returns {this} `this` instance for method chaining.
   */
  clamp(min: number, max: number) {
    const m = this.magnitude;
    if (m > max) {
      this.#target[this.#ix] = (this.#target[this.#ix] / m) * max;
      this.#target[this.#iy] = (this.#target[this.#iy] / m) * max;
      this.#target[this.#iz] = (this.#target[this.#iz] / m) * max;
      this.#target[this.#iw] = (this.#target[this.#iw] / m) * max;
    } else if (m < min) {
      this.#target[this.#ix] = (this.#target[this.#ix] / m) * min;
      this.#target[this.#iy] = (this.#target[this.#iy] / m) * min;
      this.#target[this.#iz] = (this.#target[this.#iz] / m) * min;
      this.#target[this.#iw] = (this.#target[this.#iw] / m) * min;
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns A new Vec4 instance with the same components.
   */
  clone() {
    return new Vec4(this.#target[this.#ix], this.#target[this.#iy], this.#target[this.#iz], this.#target[this.#iw]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns `this` instance for method chaining.
   */
  copy(v: Vec4Like) {
    this.#target[this.#ix] = v.x;
    this.#target[this.#iy] = v.y;
    this.#target[this.#iz] = v.z;
    this.#target[this.#iw] = v.w;
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec4Like): number {
    return sqrt(
      (this.#target[this.#ix] - v.x) ** 2 +
        (this.#target[this.#iy] - v.y) ** 2 +
        (this.#target[this.#iz] - v.z) ** 2 +
        (this.#target[this.#iw] - v.w) ** 2,
    );
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec4Like) {
    const absX = abs(this.#target[this.#ix] - v.x);
    const absY = abs(this.#target[this.#iy] - v.y);
    const absZ = abs(this.#target[this.#iz] - v.z);
    const absW = abs(this.#target[this.#iw] - v.w);
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
    return (
      abs(this.#target[this.#ix] - v.x) +
      abs(this.#target[this.#iy] - v.y) +
      abs(this.#target[this.#iz] - v.z) +
      abs(this.#target[this.#iw] - v.w)
    );
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec4Like, p: number) {
    return (
      (abs(this.#target[this.#ix] - v.x) ** p +
        abs(this.#target[this.#iy] - v.y) ** p +
        abs(this.#target[this.#iz] - v.z) ** p +
        abs(this.#target[this.#iw] - v.w) ** p) **
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
      (this.#target[this.#ix] - v.x) ** 2 +
      (this.#target[this.#iy] - v.y) ** 2 +
      (this.#target[this.#iz] - v.z) ** 2 +
      (this.#target[this.#iw] - v.w) ** 2
    );
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec4Like): number {
    return (
      this.#target[this.#ix] * v.x +
      this.#target[this.#iy] * v.y +
      this.#target[this.#iz] * v.z +
      this.#target[this.#iw] * v.w
    );
  }

  /**
   * Reflects this vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns `this` instance for method chaining.
   */
  reflect(normal: Vec4Like): this {
    const dot =
      this.#target[this.#ix] * normal.x +
      this.#target[this.#iy] * normal.y +
      this.#target[this.#iz] * normal.z +
      this.#target[this.#iw] * normal.w;

    this.#target[this.#ix] -= 2 * dot * normal.x;
    this.#target[this.#iy] -= 2 * dot * normal.y;
    this.#target[this.#iz] -= 2 * dot * normal.z;
    this.#target[this.#iw] -= 2 * dot * normal.w;
    return this;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns `true` if the vector has infinite components, `false` otherwise.
   */
  isInfinite(): boolean {
    const x = this.#target[this.#ix];
    const y = this.#target[this.#iy];
    const z = this.#target[this.#iz];
    const w = this.#target[this.#iw];
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
   * @returns `true` if the vector has NaN components, `false` otherwise.
   */
  isNaN(): boolean {
    return (
      Number.isNaN(this.#target[this.#ix]) ||
      Number.isNaN(this.#target[this.#iy]) ||
      Number.isNaN(this.#target[this.#iz]) ||
      Number.isNaN(this.#target[this.#iw])
    );
  }

  /**
   * Checks if this vector is zero.
   * @returns `true` if the vector is zero, `false` otherwise.
   */
  isZero(): boolean {
    return (
      this.#target[this.#ix] === 0 &&
      this.#target[this.#iy] === 0 &&
      this.#target[this.#iz] === 0 &&
      this.#target[this.#iw] === 0
    );
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
      this.#target[this.#iw] = (this.#target[this.#iw] / M) * max;
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
      this.#target[this.#iw] = (this.#target[this.#iw] / M) * min;
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
    this.#target[this.#ix] = (v.x / vM) * M;
    this.#target[this.#iy] = (v.y / vM) * M;
    this.#target[this.#iz] = (v.z / vM) * M;
    this.#target[this.#iw] = (v.w / vM) * M;
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
    this.#target[this.#iw] *= -1;
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns This Ve4 instance for method chaining.
   */
  normalize(): this {
    const M = this.magnitude;
    this.#target[this.#ix] /= M;
    this.#target[this.#iy] /= M;
    this.#target[this.#iz] /= M;
    this.#target[this.#iw] /= M;
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
      M *
      cos(
        acos(
          (this.#target[this.#ix] * vX +
            this.#target[this.#iy] * vY +
            this.#target[this.#iz] * vZ +
            this.#target[this.#iw] * vW) /
            (M * vM),
        ),
      );
    this.#target[this.#ix] = (vX / vM) * f;
    this.#target[this.#iy] = (vY / vM) * f;
    this.#target[this.#iz] = (vZ / vM) * f;
    this.#target[this.#iw] = (vW / vM) * f;
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns `this` instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    const M = this.magnitude;
    this.copy(Vec4.random(random));
    this.magnitude = M;
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are equal, `false` otherwise.
   */
  satisfyEquality(v: Vec4Like): boolean {
    return (
      this.#target[this.#ix] === v.x &&
      this.#target[this.#iy] === v.y &&
      this.#target[this.#iz] === v.z &&
      this.#target[this.#iw] === v.w
    );
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns `true` if the vectors are opposite, `false` otherwise.
   */
  satisfyOpposition(v: Vec4Like): boolean {
    return (
      this.#target[this.#ix] === -v.x &&
      this.#target[this.#iy] === -v.y &&
      this.#target[this.#iz] === -v.z &&
      this.#target[this.#iw] === -v.w
    );
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns `true` if the vectors are equal within epsilon, `false` otherwise.
   */
  equals(v: Vec4Like, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#target[this.#ix] - v.x) <= epsilon &&
      abs(this.#target[this.#iy] - v.y) <= epsilon &&
      abs(this.#target[this.#iz] - v.z) <= epsilon &&
      abs(this.#target[this.#iw] - v.w) <= epsilon
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
    this.#target[this.#iw] *= c;
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
    this.#target[this.#iw] = 0;
    return this;
  }

  /**
   * Makes the Vec4 instance iterable.
   * @yields The x, y, z and w components of the vector.
   */
  *[Symbol.iterator](): IterableIterator<number> {
    yield this.#target[this.#ix];
    yield this.#target[this.#iy];
    yield this.#target[this.#iz];
    yield this.#target[this.#iw];
  }

  /**
   * Returns a string representation of the vector.
   * @returns A string in the format "ArrayProxyVec4(x, y, z, w)".
   */
  toString(): string {
    return `ArrayProxyVec4(${this.#target[this.#ix]}, ${this.#target[this.#iy]}, ${this.#target[this.#iz]}, ${this.#target[this.#iw]})`;
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
