const { sin, cos, acos, atan2, sqrt, abs } = Math;

/**
 * Represents a 3D vector with various operations.
 */
export class Vec3 {
  #magnitude = 0;
  #prevXYZ = new Float64Array([0, 0, 0]);
  #xyz = new Float64Array(3);

  /**
   * Computes and updates the magnitude of the vector.
   * @private
   * @param x - The x-component of the vector.
   * @param y - The y-component of the vector.
   * @param z - The z-component of the vector.
   */
  #computeMagnitude(x: number = this.#xyz[0], y: number = this.#xyz[1], z: number = this.#xyz[2]) {
    if (x !== this.#prevXYZ[0] || y !== this.#prevXYZ[1] || z !== this.#prevXYZ[2]) {
      this.#magnitude = sqrt(x ** 2 + y ** 2 + z ** 2);
      this.#prevXYZ[0] = x;
      this.#prevXYZ[1] = y;
      this.#prevXYZ[2] = z;
    }
  }

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
    this.#computeMagnitude(x, y, z);
  }

  /**
   * Adds two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec3 instance representing the sum.
   */
  static add(v: Vec3, w: Vec3) {
    return new Vec3(v.#xyz[0] + w.#xyz[0], v.#xyz[1] + w.#xyz[1], v.#xyz[2] + w.#xyz[2]);
  }

  /**
   * Subtracts one vector from another.
   * @param v - The vector to subtract from.
   * @param w - The vector to subtract.
   * @returns A new Vec2 instance representing the difference.
   */
  static subtract(v: Vec3, w: Vec3) {
    return new Vec3(v.#xyz[0] - w.#xyz[0], v.#xyz[1] - w.#xyz[1], v.#xyz[2] - w.#xyz[2]);
  }

  /**
   * Multiplies one vector with another.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec3 instance representing the multiplied value.
   */
  static multiply(v: Vec3, w: Vec3): Vec3 {
    return new Vec3(v.x * w.x, v.y * w.y, v.z * w.z);
  }

  /**
   * Divides one vector with another.
   * @param v - Divident.
   * @param w - Divisor.
   * @returns A new Vec3 instance representing the divided value.
   */
  static divide(v: Vec3, w: Vec3): Vec3 {
    return new Vec3(
      w.x === 0 ? Number.POSITIVE_INFINITY : v.x / w.x,
      w.y === 0 ? Number.POSITIVE_INFINITY : v.y / w.y,
      v.z === 0 ? Number.POSITIVE_INFINITY : v.z / w.z,
    );
  }

  /**
   * Calculates the angle between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The angle between the vectors in radians.
   */
  static angleBetween(v: Vec3, w: Vec3) {
    return acos(
      (v.#xyz[0] * w.#xyz[0] + v.#xyz[1] * w.#xyz[1] + v.#xyz[2] * w.#xyz[2]) / (v.#magnitude * w.#magnitude),
    );
  }

  /**
   * Calculates the cross product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The cross product of the two vectors.
   */
  static cross(v: Vec3, w: Vec3) {
    const vX = v.#xyz[0];
    const vY = v.#xyz[1];
    const vZ = v.#xyz[2];
    const wX = w.#xyz[0];
    const wY = w.#xyz[1];
    const wZ = w.#xyz[2];
    return new Vec3(vY * wZ - vZ * wY, vZ * wX - vX * wZ, vX * wY - vY * wX);
  }

  /**
   * Reflects a vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param v - The vector to reflect.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec3 instance representing the reflected vector.
   */
  static reflect(v: Vec3, normal: Vec3): Vec3 {
    // R = V - 2(V·N)N
    const dot = v.#xyz[0] * normal.#xyz[0] + v.#xyz[1] * normal.#xyz[1] + v.#xyz[2] * normal.#xyz[2];

    return new Vec3(
      v.#xyz[0] - 2 * dot * normal.#xyz[0],
      v.#xyz[1] - 2 * dot * normal.#xyz[1],
      v.#xyz[2] - 2 * dot * normal.#xyz[2],
    );
  }

  /**
   * Calculates the Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The distance between the vectors.
   */
  static distance(v: Vec3, w: Vec3) {
    return sqrt((v.#xyz[0] - w.#xyz[0]) ** 2 + (v.#xyz[1] - w.#xyz[1]) ** 2 + (v.#xyz[2] - w.#xyz[2]) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Chebyshev distance between the vectors.
   */
  static distanceChebyshev(v: Vec3, w: Vec3) {
    const absX = abs(v.#xyz[0] - w.#xyz[0]);
    const absY = abs(v.#xyz[1] - w.#xyz[1]);
    const absZ = abs(v.#xyz[2] - w.#xyz[2]);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The Manhattan distance between the vectors.
   */
  static distanceManhattan(v: Vec3, w: Vec3) {
    return abs(v.#xyz[0] - w.#xyz[0]) + abs(v.#xyz[1] - w.#xyz[1]) + abs(v.#xyz[2] - w.#xyz[2]);
  }

  /**
   * Calculates the Minkowski distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  static distanceMinkowski(v: Vec3, w: Vec3, p: number) {
    return (
      (abs(v.#xyz[0] - w.#xyz[0]) ** p + abs(v.#xyz[1] - w.#xyz[1]) ** p + abs(v.#xyz[2] - w.#xyz[2]) ** p) ** (1 / p)
    );
  }

  /**
   * Calculates the squared Euclidean distance between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The squared distance between the vectors.
   */
  static distanceSq(v: Vec3, w: Vec3) {
    return (v.#xyz[0] - w.#xyz[0]) ** 2 + (v.#xyz[1] - w.#xyz[1]) ** 2 + (v.#xyz[2] - w.#xyz[2]) ** 2;
  }

  /**
   * Calculates the dot product of two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns The dot product of the two vectors.
   */
  static dot(v: Vec3, w: Vec3) {
    return v.#xyz[0] * w.#xyz[0] + v.#xyz[1] * w.#xyz[1] + v.#xyz[2] * w.#xyz[2];
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
   * Creates an immutable Vec3-like object.
   * @param x - The x-coordinate of the vector.
   * @param y - The y-coordinate of the vector.
   * @returns An immutable object with Vec3-like properties.
   */
  static immutable(x = 0, y = 0, z = 0) {
    const data = new Float64Array(10);
    data[0] = x;
    data[1] = y;
    data[2] = z;
    const xySqSum = x ** 2 + y ** 2;
    data[4] = atan2(sqrt(y ** 2 + z ** 2), x);
    data[5] = atan2(sqrt(z ** 2 + x ** 2), y);
    data[6] = atan2(sqrt(xySqSum), z);
    const magnitudeSq = xySqSum + z ** 2;
    data[8] = sqrt(magnitudeSq);
    data[9] = magnitudeSq;
    const isInfinite =
      x === +Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === +Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY ||
      z === +Number.POSITIVE_INFINITY ||
      z === Number.NEGATIVE_INFINITY;
    const _isNaN = Number.isNaN(x) && Number.isNaN(y) && Number.isNaN(z);
    const isZero = x === 0 && y === 0 && z === 0;
    const xyz = Object.freeze([...data.slice(0, 3)]);
    return {
      get angleX() {
        return data[4];
      },
      get angleY() {
        return data[5];
      },
      get angleZ() {
        return data[6];
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
      get magnitude() {
        return data[8];
      },
      get magnitudeSq() {
        return data[10];
      },
      get r() {
        return data[0];
      },
      get g() {
        return data[1];
      },
      get b() {
        return data[2];
      },
      get rgb() {
        return xyz;
      },
      get x() {
        return data[0];
      },
      get xyz() {
        return xyz;
      },
      get y() {
        return data[1];
      },
      get z() {
        return data[2];
      },
    };
  }

  /**
   * Checks if a vector has infinite components.
   * @param v - The vector to check.
   * @returns True if the vector has infinite components, false otherwise.
   */
  static isInfinite(v: Vec3) {
    const x = v.#xyz[0];
    const y = v.#xyz[1];
    const z = v.#xyz[2];
    return (
      x === +Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === +Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY ||
      z === +Number.POSITIVE_INFINITY ||
      z === Number.NEGATIVE_INFINITY
    );
  }

  /**
   * Checks if a vector has NaN components.
   * @param v - The vector to check.
   * @returns True if the vector has NaN components, false otherwise.
   */
  static isNaN(v: Vec3) {
    return Number.isNaN(v.#xyz[0]) || Number.isNaN(v.#xyz[1]) || Number.isNaN(v.#xyz[2]);
  }

  /**
   * Checks if a vector is zero.
   * @param v - The vector to check.
   * @returns True if the vector is zero, false otherwise.
   */
  static isZero(v: Vec3) {
    return v.#xyz[0] === 0 && v.#xyz[1] === 0 && v.#xyz[2] === 0;
  }

  /**
   * Performs linear interpolation between two vectors.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param t - The interpolation parameter (0 to 1).
   * @returns A new Vec2 instance representing the interpolated vector.
   */
  static lerp(v: Vec3, w: Vec3, t: number) {
    if (t > 1) t = 1;
    else if (t < 0) t = 0;
    const vX = v.#xyz[0];
    const vY = v.#xyz[1];
    const vZ = v.#xyz[2];
    return new Vec3(vX + (w.#xyz[0] - vX) * t, vY + (w.#xyz[1] - vY) * t, vZ + (w.#xyz[2] - vZ) * t);
  }

  /**
   * Negates a vector.
   * @param v - The vector to negate.
   * @returns A new Vec2 instance representing the negated vector.
   */
  static negate(v: Vec3) {
    return new Vec3(-v.#xyz[0], -v.#xyz[1], -v.#xyz[2]);
  }

  /**
   * Normalizes a vector.
   * @param v - The vector to normalize.
   * @returns A new Vec2 instance representing the normalized vector.
   */
  static normalize(v: Vec3) {
    const m = v.#magnitude;
    return new Vec3(v.#xyz[0] / m, v.#xyz[1] / m, v.#xyz[2] / m);
  }

  /**
   * Projects one vector onto another.
   * @param v - The vector to project.
   * @param w - The vector to project onto.
   * @returns A new Vec2 instance representing the projected vector.
   */
  static project(v: Vec3, w: Vec3) {
    const vM = v.#magnitude;
    const wM = w.#magnitude;
    const wX = w.#xyz[0];
    const wY = w.#xyz[1];
    const wZ = w.#xyz[2];
    const f = vM * cos(acos((v.#xyz[0] * wX + v.#xyz[1] * wY + v.#xyz[2] * wZ) / (vM * wM)));
    return new Vec3((wX / wM) * f, (wY / wM) * f, (wZ / wM) * f);
  }

  /**
   * Creates a random unit vector.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns A new Vec3 instance representing a random unit vector.
   */
  static random(random: () => number = Math.random) {
    let x1: number;
    let x2: number;
    do {
      x1 = random() * 2 - 1;
      x2 = random() * 2 - 1;
    } while (x1 ** 2 + x2 ** 2 >= 1);
    const f = sqrt(1 - x1 ** 2 - x2 ** 2);
    return new Vec3(2 * x1 * f, 2 * x2 * f, 1 - 2 * (x1 ** 2 + x2 ** 2));
  }

  /**
   * Checks if two vectors are equal.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static satisfyEquality(v: Vec3, w: Vec3) {
    return v.#xyz[0] === w.#xyz[0] && v.#xyz[1] === w.#xyz[1] && v.#xyz[2] === w.#xyz[2];
  }

  /**
   * Checks if two vectors are opposite.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  static satisfyOpposition(v: Vec3, w: Vec3) {
    return v.#xyz[0] === -w.#xyz[0] && v.#xyz[1] === -w.#xyz[1] && v.#xyz[2] === -w.#xyz[2];
  }

  /**
   * Compares a vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  static equals(v: Vec3, w: Vec3, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(v.#xyz[0] - w.#xyz[0]) <= epsilon &&
      abs(v.#xyz[1] - w.#xyz[1]) <= epsilon &&
      abs(v.#xyz[2] - w.#xyz[2]) <= epsilon
    );
  }

  /**
   * Scales a vector by a scalar value.
   * @param v - The vector to scale.
   * @param c - The scalar value.
   * @returns A new Vec3 instance representing the scaled vector.
   */
  static scale(v: Vec3, c: number) {
    return new Vec3(v.#xyz[0] * c, v.#xyz[1] * c, v.#xyz[2] * c);
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
   * @returns A new Vec3 instance.
   */
  static fromArray(arr: [number, number, number] | number[]) {
    return new Vec3(arr[0] ?? 0, arr[1] ?? 0, arr[2] ?? 0);
  }

  /**
   * Creates a Vec3 from an object with x, y and z properties.
   * @returns A new Vec3 instance.
   */
  static fromObject(obj: { x: number; y: number; z: number }) {
    return new Vec3(obj.x, obj.y, obj.z);
  }

  /**
   * Creates a Vec3 instance from a JSON-parsed object.
   * @param json - The JSON-parsed object containing x and y properties.
   * @returns A new Vec3 instance.
   */
  static fromJSON(json: { x: number; y: number; z: number }): Vec3 {
    return Vec3.fromObject(json);
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
    this.#computeMagnitude();
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
    this.#computeMagnitude();
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
    this.#computeMagnitude();
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns An array containing the x, y and z components of the vector.
   */
  get xyz(): [number, number, number] {
    return Array.from(this.#xyz.slice()) as [number, number, number];
  }

  /**
   * Sets both components of the vector at once.
   * @param xyz - An array containing the new x, y and z components.
   */
  set xyz(xyz: [number, number, number] | number[]) {
    this.#xyz[0] = xyz[0];
    this.#xyz[1] = xyz[1];
    this.#xyz[2] = xyz[2];
    this.#computeMagnitude();
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
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  get magnitude(): number {
    return this.#magnitude;
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
   * Sets the magnitude (length) of the vector, maintaining its direction.
   * @param m - The new magnitude.
   */
  set magnitude(m: number) {
    const M = this.#magnitude;
    this.#xyz[0] = (this.#xyz[0] / M) * m;
    this.#xyz[1] = (this.#xyz[1] / M) * m;
    this.#xyz[2] = (this.#xyz[2] / M) * m;
    this.#computeMagnitude();
  }

  /**
   * Adds another vector to this vector.
   * @param v - The vector to add.
   * @returns This Vec3 instance for method chaining.
   */
  add(v: Vec3) {
    this.#xyz[0] += v.#xyz[0];
    this.#xyz[1] += v.#xyz[1];
    this.#xyz[2] += v.#xyz[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns This Vec3 instance for method chaining.
   */
  subtract(v: Vec3): this {
    this.#xyz[0] -= v.#xyz[0];
    this.#xyz[1] -= v.#xyz[1];
    this.#xyz[2] -= v.#xyz[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns This Vec3 instance for method chaining.
   */
  multiply(v: Vec3): this {
    this.#xyz[0] *= v.#xyz[0];
    this.#xyz[1] *= v.#xyz[1];
    this.#xyz[2] *= v.#xyz[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns This Vec3 instance for method chaining.
   */
  divide(v: Vec3): this {
    this.#xyz[0] = v.#xyz[0] === 0 ? Number.POSITIVE_INFINITY : this.#xyz[0] / v.#xyz[0];
    this.#xyz[1] = v.#xyz[1] === 0 ? Number.POSITIVE_INFINITY : this.#xyz[1] / v.#xyz[1];
    this.#xyz[2] = v.#xyz[2] === 0 ? Number.POSITIVE_INFINITY : this.#xyz[2] / v.#xyz[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec3): number {
    return acos(
      (this.#xyz[0] * v.#xyz[0] + this.#xyz[1] * v.#xyz[1] + this.#xyz[2] * v.#xyz[2]) /
        (this.#magnitude * v.#magnitude),
    );
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param min - The minimum magnitude.
   * @param max - The maximum magnitude.
   * @returns This Vec3 instance for method chaining.
   */
  clamp(min: number, max: number): this {
    const m = this.#magnitude;
    if (m > max) {
      this.#xyz[0] = (this.#xyz[0] / m) * max;
      this.#xyz[1] = (this.#xyz[1] / m) * max;
      this.#xyz[2] = (this.#xyz[2] / m) * max;
      this.#computeMagnitude();
    } else if (m < min) {
      this.#xyz[0] = (this.#xyz[0] / m) * min;
      this.#xyz[1] = (this.#xyz[1] / m) * min;
      this.#xyz[2] = (this.#xyz[2] / m) * min;
      this.#computeMagnitude();
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
   * @returns This Vec3 instance for method chaining.
   */
  copy(v: Vec3): this {
    this.#xyz[0] = v.#xyz[0];
    this.#xyz[1] = v.#xyz[1];
    this.#xyz[2] = v.#xyz[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec3): number {
    return this.#xyz[0] * v.#xyz[0] + this.#xyz[1] * v.#xyz[1] + this.#xyz[2] * v.#xyz[2];
  }

  /**
   * Calculates cross product between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  cross(v: Vec3): this {
    const x = this.#xyz[0];
    const y = this.#xyz[1];
    const z = this.#xyz[2];
    const vX = v.#xyz[0];
    const vY = v.#xyz[1];
    const vZ = v.#xyz[2];
    this.#xyz[0] = y * vZ - z * vY;
    this.#xyz[1] = z * vX - x * vZ;
    this.#xyz[2] = x * vY - y * vX;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Reflects this vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns This Vec3 instance for method chaining.
   */
  reflect(normal: Vec3): this {
    const dot = this.#xyz[0] * normal.#xyz[0] + this.#xyz[1] * normal.#xyz[1] + this.#xyz[2] * normal.#xyz[2];

    this.#xyz[0] -= 2 * dot * normal.#xyz[0];
    this.#xyz[1] -= 2 * dot * normal.#xyz[1];
    this.#xyz[2] -= 2 * dot * normal.#xyz[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec3): number {
    return sqrt((this.#xyz[0] - v.#xyz[0]) ** 2 + (this.#xyz[1] - v.#xyz[1]) ** 2 + (this.#xyz[2] - v.#xyz[2]) ** 2);
  }

  /**
   * Calculates the Chebyshev distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec3) {
    const absX = abs(this.#xyz[0] - v.#xyz[0]);
    const absY = abs(this.#xyz[1] - v.#xyz[1]);
    const absZ = abs(this.#xyz[2] - v.#xyz[2]);
    return absX >= absY && absX >= absZ ? absX : absY >= absZ ? absY : absZ;
  }

  /**
   * Calculates the Manhattan distance between vector and another vector.
   * @param v - The other vector.
   * @returns The Manhattan distance between the vectors.
   */
  distanceManhattan(v: Vec3) {
    return abs(this.#xyz[0] - v.#xyz[0]) + abs(this.#xyz[1] - v.#xyz[1]) + abs(this.#xyz[2] - v.#xyz[2]);
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param v - The other vector.
   * @param p - The order of the Minkowski distance.
   * @returns The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec3, p: number) {
    return (
      (abs(this.#xyz[0] - v.#xyz[0]) ** p + abs(this.#xyz[1] - v.#xyz[1]) ** p + abs(this.#xyz[2] - v.#xyz[2]) ** p) **
      (1 / p)
    );
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec3): number {
    return (this.#xyz[0] - v.#xyz[0]) ** 2 + (this.#xyz[1] - v.#xyz[1]) ** 2 + (this.#xyz[2] - v.#xyz[2]) ** 2;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns True if the vector has infinite components, false otherwise.
   */
  isInfinite(): boolean {
    const x = this.#xyz[0];
    const y = this.#xyz[1];
    const z = this.#xyz[2];
    return (
      x === +Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === +Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY ||
      z === +Number.POSITIVE_INFINITY ||
      z === Number.NEGATIVE_INFINITY
    );
  }

  /**
   * Checks if this vector has NaN components.
   * @returns True if the vector has NaN components, false otherwise.
   */
  isNaN(): boolean {
    return Number.isNaN(this.#xyz[0]) || Number.isNaN(this.#xyz[1]) || Number.isNaN(this.#xyz[2]);
  }

  /**
   * Checks if this vector is zero.
   * @returns True if the vector is zero, false otherwise.
   */
  isZero(): boolean {
    return this.#xyz[0] === 0 && this.#xyz[1] === 0 && this.#xyz[2] === 0;
  }

  /**
   * Limits the maximum magnitude of this vector.
   * @param max - The maximum magnitude.
   * @returns This Vec3 instance for method chaining.
   */
  limitMax(max: number): this {
    const m = this.#magnitude;
    if (m > max) {
      this.#xyz[0] = (this.#xyz[0] / m) * max;
      this.#xyz[1] = (this.#xyz[1] / m) * max;
      this.#xyz[2] = (this.#xyz[2] / m) * max;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Limits the minimum magnitude of this vector.
   * @param min - The minimum magnitude.
   * @returns This Vec3 instance for method chaining.
   */
  limitMin(min: number): this {
    const m = this.#magnitude;
    if (m < min) {
      this.#xyz[0] = (this.#xyz[0] / m) * min;
      this.#xyz[1] = (this.#xyz[1] / m) * min;
      this.#xyz[2] = (this.#xyz[2] / m) * min;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns This Vec3 instance for method chaining.
   */
  lookAt(v: Vec3): this {
    const m = this.#magnitude;
    const vM = v.#magnitude;
    this.#xyz[0] = (v.#xyz[0] / vM) * m;
    this.#xyz[1] = (v.#xyz[1] / vM) * m;
    this.#xyz[2] = (v.#xyz[2] / vM) * m;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Negates this vector.
   * @returns This Vec3 instance for method chaining.
   */
  negate(): this {
    this.#xyz[0] *= -1;
    this.#xyz[1] *= -1;
    this.#xyz[2] *= -1;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns This Vec3 instance for method chaining.
   */
  normalize(): this {
    const m = this.#magnitude;
    this.#xyz[0] /= m;
    this.#xyz[1] /= m;
    this.#xyz[2] /= m;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns This Vec3 instance for method chaining.
   */
  project(v: Vec3): this {
    const m = this.#magnitude;
    const vM = v.#magnitude;
    const vX = v.#xyz[0];
    const vY = v.#xyz[1];
    const vZ = v.#xyz[2];
    const f = m * cos(acos((this.#xyz[0] * vX + this.#xyz[1] * vY + this.#xyz[2] * vZ) / (m * vM)));
    this.#xyz[0] = (vX / vM) * f;
    this.#xyz[1] = (vY / vM) * f;
    this.#xyz[2] = (vZ / vM) * f;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Sets this vector to a random direction with the same magnitude.
   * @param random - A function that returns a random number between 0 and 1.
   * @returns This Vec3 instance for method chaining.
   */
  random(random: () => number = Math.random): this {
    let x1: number;
    let x2: number;
    do {
      x1 = random() * 2 - 1;
      x2 = random() * 2 - 1;
    } while (x1 ** 2 + x2 ** 2 >= 1);
    const f = sqrt(1 - x1 ** 2 - x2 ** 2);
    const m = this.#magnitude;
    this.#xyz[0] = m * 2 * x1 * f;
    this.#xyz[1] = m * 2 * x2 * f;
    this.#xyz[2] = m * (1 - 2 * (x1 ** 2 + x2 ** 2));
    this.#computeMagnitude();
    return this;
  }

  /**
   * Rotates this vector around the X-axis.
   * @param phi - The angle of rotation in radians.
   * @returns This Vec3 instance for method chaining.
   */
  rotateX(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const y = this.#xyz[1];
    const z = this.#xyz[2];
    this.#xyz[1] = y * cosPhi - z * sinPhi;
    this.#xyz[2] = y * sinPhi + z * cosPhi;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Rotates this vector around the Y-axis.
   * @param phi - The angle of rotation in radians.
   * @returns This Vec3 instance for method chaining.
   */
  rotateY(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const x = this.#xyz[0];
    const z = this.#xyz[2];
    this.#xyz[0] = x * cosPhi + z * sinPhi;
    this.#xyz[2] = x * sinPhi + z * cosPhi;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Rotates this vector around the Z-axis.
   * @param phi - The angle of rotation in radians.
   * @returns This Vec3 instance for method chaining.
   */
  rotateZ(phi: number): this {
    const cosPhi = cos(phi);
    const sinPhi = sin(phi);
    const x = this.#xyz[0];
    const y = this.#xyz[1];
    this.#xyz[0] = x * cosPhi - y * sinPhi;
    this.#xyz[1] = x * sinPhi + y * cosPhi;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Checks if this vector is equal to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  satisfyEquality(v: Vec3): boolean {
    return this.#xyz[0] === v.#xyz[0] && this.#xyz[1] === v.#xyz[1] && this.#xyz[2] === v.#xyz[2];
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  satisfyOpposition(v: Vec3): boolean {
    return this.#xyz[0] === -v.#xyz[0] && this.#xyz[1] === -v.#xyz[1] && this.#xyz[2] === -v.#xyz[2];
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  equals(v: Vec3, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#xyz[0] - v.#xyz[0]) <= epsilon &&
      abs(this.#xyz[1] - v.#xyz[1]) <= epsilon &&
      abs(this.#xyz[2] - v.#xyz[2]) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns This Vec3 instance for method chaining.
   */
  scale(c: number): this {
    this.#xyz[0] *= c;
    this.#xyz[1] *= c;
    this.#xyz[2] *= c;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns This Vec3 instance for method chaining.
   */
  zero(): this {
    this.#xyz[0] = 0;
    this.#xyz[1] = 0;
    this.#xyz[2] = 0;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Makes the Vec3 instance iterable.
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
  toObject(): { x: number; y: number; z: number } {
    return { x: this.#xyz[0], y: this.#xyz[1], z: this.#xyz[2] };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): { x: number; y: number } {
    return this.toObject();
  }
}
