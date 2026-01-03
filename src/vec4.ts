/**
 * Documentation for 4D Vector class.
 * @module Vec4
 */

const { sin, cos, acos, atan2, sqrt, abs, log, PI } = Math;

/**
 * Represents a 4D vector with various operations.
 */
export class Vec4 {
  #magnitude = 0;
  #prevXYZW = new Float64Array([0, 0, 0, 0]);
  #xyzw = new Float64Array(4);

  /**
   * Computes and updates the magnitude of the vector.
   * @private
   * @param {number} x - The x-component of the vector.
   * @param {number} y - The y-component of the vector.
   * @param {number} z - The z-component of the vector.
   * @param {number} w - The w-component of the vector.
   * @returns {void}
   */
  #computeMagnitude(x = this.#xyzw[0], y = this.#xyzw[1], z = this.#xyzw[2], w = this.#xyzw[3]) {
    if (x !== this.#prevXYZW[0] || y !== this.#prevXYZW[1] || z !== this.#prevXYZW[2] || w !== this.#prevXYZW[3]) {
      this.#magnitude = sqrt(x ** 2 + y ** 2 + z ** 2 + w ** 2);
      this.#prevXYZW[0] = x;
      this.#prevXYZW[1] = y;
      this.#prevXYZW[2] = z;
      this.#prevXYZW[3] = w;
    }
  }

  /**
   * Creates a new Vec4 instance.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   * @param {number} z - The z-coordinate of the vector.
   * @param {number} w - The w-coordinate of the vector.
   */
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.#xyzw[0] = x;
    this.#xyzw[1] = y;
    this.#xyzw[2] = z;
    this.#xyzw[3] = w;
    this.#computeMagnitude(x, y, z, w);
  }

  /**
   * Adds two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {Vec4} A new Vec4 instance representing the sum.
   */
  static add(v: Vec4, w: Vec4) {
    return new Vec4(v.#xyzw[0] + w.#xyzw[0], v.#xyzw[1] + w.#xyzw[1], v.#xyzw[2] + w.#xyzw[2], v.#xyzw[3] + w.#xyzw[3]);
  }

  /**
   * Subtracts one vector from another.
   * @param {Vec4} v - The vector to subtract from.
   * @param {Vec4} w - The vector to subtract.
   * @returns {Vec4} A new Vec4 instance representing the difference.
   */
  static subtract(v: Vec4, w: Vec4) {
    return new Vec4(v.#xyzw[0] - w.#xyzw[0], v.#xyzw[1] - w.#xyzw[1], v.#xyzw[2] - w.#xyzw[2], v.#xyzw[3] - w.#xyzw[3]);
  }

  /**
   * Multiplies one vector with another.
   * @param v - The first vector.
   * @param w - The second vector.
   * @returns A new Vec4 instance representing the multiplied value.
   */
  static multiply(v: Vec4, w: Vec4): Vec4 {
    return new Vec4(v.x * w.x, v.y * w.y, v.z * w.z, v.w * w.w);
  }

  /**
   * Divides one vector with another.
   * @param v - Divident.
   * @param w - Divisor.
   * @returns A new Vec4 instance representing the divided value.
   */
  static divide(v: Vec4, w: Vec4): Vec4 {
    return new Vec4(
      w.x === 0 ? Number.POSITIVE_INFINITY : v.x / w.x,
      w.y === 0 ? Number.POSITIVE_INFINITY : v.y / w.y,
      v.z === 0 ? Number.POSITIVE_INFINITY : v.z / w.z,
      v.w === 0 ? Number.POSITIVE_INFINITY : v.w / w.w,
    );
  }

  /**
   * Calculates the angle between two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {number} The angle between the vectors in radians.
   */
  static angleBetween(v: Vec4, w: Vec4) {
    return acos(
      (v.#xyzw[0] * w.#xyzw[0] + v.#xyzw[1] * w.#xyzw[1] + v.#xyzw[2] * w.#xyzw[2] + v.#xyzw[3] * w.#xyzw[3]) /
        (v.#magnitude * w.#magnitude),
    );
  }

  /**
   * Calculates the Euclidean distance between two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {number} The distance between the vectors.
   */
  static distance(v: Vec4, w: Vec4) {
    return sqrt(
      (v.#xyzw[0] - w.#xyzw[0]) ** 2 +
        (v.#xyzw[1] - w.#xyzw[1]) ** 2 +
        (v.#xyzw[2] - w.#xyzw[2]) ** 2 +
        (v.#xyzw[3] - w.#xyzw[3]) ** 2,
    );
  }

  /**
   * Calculates the Chebyshev distance between two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {number} The Chebyshev distance between the vectors.
   */
  static distanceChebyshev(v: Vec4, w: Vec4) {
    const absX = abs(v.#xyzw[0] - w.#xyzw[0]);
    const absY = abs(v.#xyzw[1] - w.#xyzw[1]);
    const absZ = abs(v.#xyzw[2] - w.#xyzw[2]);
    const absW = abs(v.#xyzw[3] - w.#xyzw[3]);
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
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {number} The Manhattan distance between the vectors.
   */
  static distanceManhattan(v: Vec4, w: Vec4) {
    return (
      abs(v.#xyzw[0] - w.#xyzw[0]) +
      abs(v.#xyzw[1] - w.#xyzw[1]) +
      abs(v.#xyzw[2] - w.#xyzw[2]) +
      abs(v.#xyzw[3] - w.#xyzw[3])
    );
  }

  /**
   * Calculates the Minkowski distance between two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @param {number} p - The order of the Minkowski distance.
   * @returns {number} The Minkowski distance between the vectors.
   */
  static distanceMinkowski(v: Vec4, w: Vec4, p: number) {
    return (
      (abs(v.#xyzw[0] - w.#xyzw[0]) ** p +
        abs(v.#xyzw[1] - w.#xyzw[1]) ** p +
        abs(v.#xyzw[2] - w.#xyzw[2]) ** p +
        abs(v.#xyzw[3] - w.#xyzw[3]) ** p) **
      (1 / p)
    );
  }

  /**
   * Calculates the squared Euclidean distance between two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {number} The squared distance between the vectors.
   */
  static distanceSq(v: Vec4, w: Vec4) {
    return (
      (v.#xyzw[0] - w.#xyzw[0]) ** 2 +
      (v.#xyzw[1] - w.#xyzw[1]) ** 2 +
      (v.#xyzw[2] - w.#xyzw[2]) ** 2 +
      (v.#xyzw[3] - w.#xyzw[3]) ** 2
    );
  }

  /**
   * Calculates the dot product of two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {number} The dot product of the two vectors.
   */
  static dot(v: Vec4, w: Vec4) {
    return v.#xyzw[0] * w.#xyzw[0] + v.#xyzw[1] * w.#xyzw[1] + v.#xyzw[2] * w.#xyzw[2] + v.#xyzw[3] * w.#xyzw[3];
  }

  /**
   * Reflects a vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param v - The vector to reflect.
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns A new Vec4 instance representing the reflected vector.
   */
  static reflect(v: Vec4, normal: Vec4): Vec4 {
    // R = V - 2(V·N)N
    const dot =
      v.#xyzw[0] * normal.#xyzw[0] +
      v.#xyzw[1] * normal.#xyzw[1] +
      v.#xyzw[2] * normal.#xyzw[2] +
      v.#xyzw[3] * normal.#xyzw[3];

    return new Vec4(
      v.#xyzw[0] - 2 * dot * normal.#xyzw[0],
      v.#xyzw[1] - 2 * dot * normal.#xyzw[1],
      v.#xyzw[2] - 2 * dot * normal.#xyzw[2],
      v.#xyzw[3] - 2 * dot * normal.#xyzw[3],
    );
  }
  /**
   * Creates an immutable Vec4-like object.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   * @param {number} z - The z-coordinate of the vector.
   * @param {number} w - The w-coordinate of the vector.
   * @returns {Readonly<{ x: number; y: number; z: number; w: number; xyzw: readonly number[]; r: number; g: number; b: number; a: number; rgba: readonly number[]; magnitude: number; magnitudeSq: number; angleW: number; angleX: number; angleY: number; angleZ: number; isInfinite: boolean; isNaN: boolean; isZero: boolean }>} An immutable object with Vec4-like properties.
   */
  static immutable(x = 0, y = 0, z = 0, w = 0) {
    const data = new Float64Array(10);
    data[0] = x;
    data[1] = y;
    data[2] = z;
    data[3] = w;
    const xyzSqSum = x ** 2 + y ** 2 + z ** 2;
    data[4] = atan2(sqrt(y ** 2 + z ** 2 + w ** 2), x);
    data[5] = atan2(sqrt(z ** 2 + w ** 2 + x ** 2), y);
    data[6] = atan2(sqrt(w ** 2 + x ** 2 + y ** 2), z);
    data[7] = atan2(sqrt(xyzSqSum), w);
    const magnitudeSq = xyzSqSum + w ** 2;
    data[8] = sqrt(magnitudeSq);
    data[9] = magnitudeSq;
    const isInfinite =
      x === +Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY ||
      y === +Number.POSITIVE_INFINITY ||
      y === Number.NEGATIVE_INFINITY ||
      z === +Number.POSITIVE_INFINITY ||
      z === Number.NEGATIVE_INFINITY ||
      w === +Number.POSITIVE_INFINITY ||
      w === Number.NEGATIVE_INFINITY;
    const _isNaN = Number.isNaN(x) && Number.isNaN(y) && Number.isNaN(z) && Number.isNaN(w);
    const isZero = x === 0 && y === 0 && z === 0 && w === 0;
    const xyzw = Object.freeze([...data.slice(0, 4)]);
    return {
      get x() {
        return data[0];
      },
      get y() {
        return data[1];
      },
      get z() {
        return data[2];
      },
      get w() {
        return data[3];
      },
      get xyzw() {
        return xyzw;
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
      get a() {
        return data[3];
      },
      get rgba() {
        return xyzw;
      },
      get magnitude() {
        return data[8];
      },
      get magnitudeSq() {
        return data[10];
      },
      get angleW() {
        return data[7];
      },
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
    };
  }

  /**
   * Checks if a vector has infinite components.
   * @param {Vec4} v - The vector to check.
   * @returns {boolean} True if the vector has infinite components, false otherwise.
   */
  static isInfinite(v: Vec4) {
    const x = v.#xyzw[0];
    const y = v.#xyzw[1];
    const z = v.#xyzw[2];
    const w = v.#xyzw[3];
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
   * Checks if a vector has NaN components.
   * @param {Vec4} v - The vector to check.
   * @returns {boolean} True if the vector has NaN components, false otherwise.
   */
  static isNaN(v: Vec4) {
    return Number.isNaN(v.#xyzw[0]) || Number.isNaN(v.#xyzw[1]) || Number.isNaN(v.#xyzw[2]) || Number.isNaN(v.#xyzw[3]);
  }

  /**
   * Checks if a vector is zero.
   * @param {Vec4} v - The vector to check.
   * @returns {boolean} True if the vector is zero, false otherwise.
   */
  static isZero(v: Vec4) {
    return v.#xyzw[0] === 0 && v.#xyzw[1] === 0 && v.#xyzw[2] === 0 && v.#xyzw[3] === 0;
  }

  /**
   * Performs linear interpolation between two vectors.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @param {number} t - The interpolation parameter (0 to 1).
   * @returns {Vec4} A new Vec4 instance representing the interpolated vector.
   */
  static lerp(v: Vec4, w: Vec4, t: number) {
    if (t > 1) t = 1;
    else if (t < 0) t = 0;
    const vX = v.#xyzw[0];
    const vY = v.#xyzw[1];
    const vZ = v.#xyzw[2];
    const vW = v.#xyzw[3];
    return new Vec4(
      vX + (w.#xyzw[0] - vX) * t,
      vY + (w.#xyzw[1] - vY) * t,
      vZ + (w.#xyzw[2] - vZ) * t,
      vW + (w.#xyzw[3] - vW) * t,
    );
  }

  /**
   * Negates a vector.
   * @param {Vec4} v - The vector to negate.
   * @returns {Vec4} A new Vec4 instance representing the negated vector.
   */
  static negate(v: Vec4) {
    return new Vec4(-v.#xyzw[0], -v.#xyzw[1], -v.#xyzw[2], -v.#xyzw[3]);
  }

  /**
   * Normalizes a vector.
   * @param {Vec4} v - The vector to normalize.
   * @returns {Vec4} A new Vec4 instance representing the normalized vector.
   */
  static normalize(v: Vec4) {
    const m = v.#magnitude;
    return new Vec4(v.#xyzw[0] / m, v.#xyzw[1] / m, v.#xyzw[2] / m, v.#xyzw[3] / m);
  }

  /**
   * Projects one vector onto another.
   * @param {Vec4} v - The vector to project.
   * @param {Vec4} w - The vector to project onto.
   * @returns {Vec4} A new Vec4 instance representing the projected vector.
   */
  static project(v: Vec4, w: Vec4) {
    const vM = v.#magnitude;
    const wM = w.#magnitude;
    const wX = w.#xyzw[0];
    const wY = w.#xyzw[1];
    const wZ = w.#xyzw[2];
    const wW = w.#xyzw[3];
    const f = vM * cos(acos((v.#xyzw[0] * wX + v.#xyzw[1] * wY + v.#xyzw[2] * wZ + v.#xyzw[3] * wW) / (vM * wM)));
    return new Vec4((wX / wM) * f, (wY / wM) * f, (wZ / wM) * f, (wW / wM) * f);
  }

  /**
   * Creates a random unit vector.
   * @param {() => number} random - A function that returns a random number between 0 and 1.
   * @returns {Vec4} A new Vec4 instance representing a random unit vector.
   */
  static random(random: () => number = Math.random) {
    // 1. Generate four numbers from a Normal Distribution (Box-Muller transform)
    const x = sqrt(-2 * log(random())) * cos(2 * PI * random());
    const y = sqrt(-2 * log(random())) * sin(2 * PI * random());
    const z = sqrt(-2 * log(random())) * cos(2 * PI * random());
    const w = sqrt(-2 * log(random())) * sin(2 * PI * random());

    // 2. Calculate the current length
    const length = sqrt(x * x + y * y + z * z + w * w);

    // 3. Divide by length to make it a unit vector
    return new Vec4(x / length, y / length, z / length, w / length);
  }

  /**
   * Checks if two vectors are equal.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {boolean} True if the vectors are equal, false otherwise.
   */
  static satisfyEquality(v: Vec4, w: Vec4) {
    return (
      v.#xyzw[0] === w.#xyzw[0] && v.#xyzw[1] === w.#xyzw[1] && v.#xyzw[2] === w.#xyzw[2] && v.#xyzw[3] === w.#xyzw[3]
    );
  }

  /**
   * Checks if two vectors are opposite.
   * @param {Vec4} v - The first vector.
   * @param {Vec4} w - The second vector.
   * @returns {boolean} True if the vectors are opposite, false otherwise.
   */
  static satisfyOpposition(v: Vec4, w: Vec4) {
    return (
      v.#xyzw[0] === -w.#xyzw[0] &&
      v.#xyzw[1] === -w.#xyzw[1] &&
      v.#xyzw[2] === -w.#xyzw[2] &&
      v.#xyzw[3] === -w.#xyzw[3]
    );
  }

  /**
   * Compares a vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The first vector.
   * @param w - The second vector.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  static equals(v: Vec4, w: Vec4, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(v.#xyzw[0] - w.#xyzw[0]) <= epsilon &&
      abs(v.#xyzw[1] - w.#xyzw[1]) <= epsilon &&
      abs(v.#xyzw[2] - w.#xyzw[2]) <= epsilon &&
      abs(v.#xyzw[3] - w.#xyzw[3]) <= epsilon
    );
  }

  /**
   * Scales a vector by a scalar value.
   * @param {Vec4} v - The vector to scale.
   * @param {number} c - The scalar value.
   * @returns {Vec4} A new Vec4 instance representing the scaled vector.
   */
  static scale(v: Vec4, c: number) {
    return new Vec4(v.#xyzw[0] * c, v.#xyzw[1] * c, v.#xyzw[2] * c, v.#xyzw[3] * c);
  }

  /**
   * Creates a zero vector.
   * @returns {Vec4} A new Vec4 instance representing a zero vector.
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
   * @param {[number, number, number, number] | number[]} arr - An array containing the x, y, z, and w coordinates.
   * @returns {Vec4} A new Vec4 instance.
   */
  static fromArray(arr: [number, number, number, number] | number[]) {
    return new Vec4(arr[0] ?? 0, arr[1] ?? 0, arr[2] ?? 0, arr[3] ?? 0);
  }

  /**
   * Creates a Vec4 from an object with x, y, z and w properties.
   * @param {{ x: number; y: number; z: number; w: number }} obj - An object with x, y, z, and w properties.
   * @returns {Vec4} A new Vec4 instance.
   */
  static fromObject(obj: { x: number; y: number; z: number; w: number }) {
    return new Vec4(obj.x, obj.y, obj.z, obj.w);
  }

  /**
   * Creates a Vec3 instance from a JSON-parsed object.
   * @param json - The JSON-parsed object containing x and y properties.
   * @returns A new Vec4 instance.
   */
  static fromJSON(json: { x: number; y: number; z: number; w: number }): Vec4 {
    return Vec4.fromObject(json);
  }

  /**
   * Gets the x-component of the vector.
   * @returns {number} The x-component.
   */
  get x() {
    return this.#xyzw[0];
  }

  /**
   * Sets the x-component of the vector.
   * @param {number} x - The new x-component.
   * @returns {void}
   */
  set x(x: number) {
    this.#xyzw[0] = x;
    this.#computeMagnitude();
  }

  /**
   * Gets the y-component of the vector.
   * @returns {number} The y-component.
   */
  get y() {
    return this.#xyzw[1];
  }

  /**
   * Sets the z-component of the vector.
   * @param {number} y - The new z-component.
   * @returns {void}
   */
  set y(y: number) {
    this.#xyzw[1] = y;
    this.#computeMagnitude();
  }

  /**
   * Gets the z-component of the vector.
   * @returns {number} The z-component.
   */
  get z() {
    return this.#xyzw[2];
  }

  /**
   * Sets the z-component of the vector.
   * @param {number} z - The new z-component.
   * @returns {void}
   */
  set z(z: number) {
    this.#xyzw[2] = z;
    this.#computeMagnitude();
  }

  /**
   * Gets the w-component of the vector.
   * @returns {number} The w-component.
   */
  get w() {
    return this.#xyzw[3];
  }

  /**
   * Sets the w-component of the vector.
   * @param {number} w - The new w-component.
   * @returns {void}
   */
  set w(w: number) {
    this.#xyzw[3] = w;
    this.#computeMagnitude();
  }

  /**
   * Gets a copy of the vector's components as an array.
   * @returns {[number, number, number, number]} An array containing the x, y, z and w components of the vector.
   */
  get xyzw(): [number, number, number, number] {
    return Array.from(this.#xyzw.slice()) as [number, number, number, number];
  }

  /**
   * Sets both components of the vector at once.
   * @param {[number, number, number, number]} xyzw - An array containing the new x, y, z and w components.
   * @returns {void}
   */
  set xyzw(xyzw: [number, number, number, number]) {
    this.#xyzw[0] = xyzw[0];
    this.#xyzw[1] = xyzw[1];
    this.#xyzw[2] = xyzw[2];
    this.#xyzw[3] = xyzw[3];
    this.#computeMagnitude();
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
   * @returns {[number, number, number, number]} An array containing the Red, Green, Blue and Alpha components of the Color.
   */
  get rgba(): [number, number, number, number] {
    return this.xyzw;
  }

  /**
   * Sets all components of the Color at once.
   * @param {[number, number, number, number]} rgba - An array containing the new Red, Green, Blue and Alpha components.
   * @returns {void}
   */
  set rgba(rgba: [number, number, number, number]) {
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
    this.#xyzw[0] = (this.#xyzw[0] / M) * m;
    this.#xyzw[1] = (this.#xyzw[1] / M) * m;
    this.#xyzw[2] = (this.#xyzw[2] / M) * m;
    this.#xyzw[3] = (this.#xyzw[3] / M) * m;
    this.#computeMagnitude();
  }

  /**
   * Adds another vector to this vector.
   * @param {Vec4} v - The vector to add.
   * @returns {this} This Vec4 instance for method chaining.
   */
  add(v: Vec4) {
    this.#xyzw[0] += v.#xyzw[0];
    this.#xyzw[1] += v.#xyzw[1];
    this.#xyzw[2] += v.#xyzw[2];
    this.#xyzw[3] += v.#xyzw[3];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param v - The vector to subtract.
   * @returns This Vec4 instance for method chaining.
   */
  subtract(v: Vec4): this {
    this.#xyzw[0] -= v.#xyzw[0];
    this.#xyzw[1] -= v.#xyzw[1];
    this.#xyzw[2] -= v.#xyzw[2];
    this.#xyzw[3] -= v.#xyzw[3];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Multiplies this vector with another vector.
   * @param v - The vector to multiply with.
   * @returns This Vec4 instance for method chaining.
   */
  multiply(v: Vec4): this {
    this.#xyzw[0] *= v.#xyzw[0];
    this.#xyzw[1] *= v.#xyzw[1];
    this.#xyzw[2] *= v.#xyzw[2];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Divides this vector with another vector.
   * @param v - The vector to divide with.
   * @returns This Vec4 instance for method chaining.
   */
  divide(v: Vec4): this {
    this.#xyzw[0] = v.#xyzw[0] === 0 ? Number.POSITIVE_INFINITY : this.#xyzw[0] / v.#xyzw[0];
    this.#xyzw[1] = v.#xyzw[1] === 0 ? Number.POSITIVE_INFINITY : this.#xyzw[1] / v.#xyzw[1];
    this.#xyzw[2] = v.#xyzw[2] === 0 ? Number.POSITIVE_INFINITY : this.#xyzw[2] / v.#xyzw[2];
    this.#xyzw[3] = v.#xyzw[3] === 0 ? Number.POSITIVE_INFINITY : this.#xyzw[3] / v.#xyzw[3];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The other vector.
   * @returns The angle between the vectors in radians.
   */
  angleBetween(v: Vec4): number {
    return acos(
      (this.#xyzw[0] * v.#xyzw[0] +
        this.#xyzw[1] * v.#xyzw[1] +
        this.#xyzw[2] * v.#xyzw[2] +
        this.#xyzw[3] * v.#xyzw[3]) /
        (this.#magnitude * v.#magnitude),
    );
  }

  /**
   * Clamps the magnitude of this vector between a minimum and maximum value.
   * @param {number} min - The minimum magnitude.
   * @param {number} max - The maximum magnitude.
   * @returns {this} This Vec4 instance for method chaining.
   */
  clamp(min: number, max: number) {
    const m = this.#magnitude;
    if (m > max) {
      this.#xyzw[0] = (this.#xyzw[0] / m) * max;
      this.#xyzw[1] = (this.#xyzw[1] / m) * max;
      this.#xyzw[2] = (this.#xyzw[2] / m) * max;
      this.#xyzw[3] = (this.#xyzw[3] / m) * max;
      this.#computeMagnitude();
    } else if (m < min) {
      this.#xyzw[0] = (this.#xyzw[0] / m) * min;
      this.#xyzw[1] = (this.#xyzw[1] / m) * min;
      this.#xyzw[2] = (this.#xyzw[2] / m) * min;
      this.#xyzw[3] = (this.#xyzw[3] / m) * min;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Creates a copy of this vector.
   * @returns {Vec4} A new Vec4 instance with the same components.
   */
  clone() {
    return new Vec4(this.#xyzw[0], this.#xyzw[1], this.#xyzw[2], this.#xyzw[3]);
  }

  /**
   * Copies the components of another vector to this vector.
   * @param v - The vector to copy from.
   * @returns This Vec2 instance for method chaining.
   */
  copy(v: Vec4) {
    this.#xyzw[0] = v.#xyzw[0];
    this.#xyzw[1] = v.#xyzw[1];
    this.#xyzw[2] = v.#xyzw[2];
    this.#xyzw[3] = v.#xyzw[3];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The distance between the vectors.
   */
  distance(v: Vec4): number {
    return sqrt(
      (this.#xyzw[0] - v.#xyzw[0]) ** 2 +
        (this.#xyzw[1] - v.#xyzw[1]) ** 2 +
        (this.#xyzw[2] - v.#xyzw[2]) ** 2 +
        (this.#xyzw[3] - v.#xyzw[3]) ** 2,
    );
  }

  /**
   * Calculates the Chebyshev distance between this vector and another vector.
   * @param {Vec4} v - The other vector.
   * @returns {number} The Chebyshev distance between the vectors.
   */
  distanceChebyshev(v: Vec4) {
    const absX = abs(this.#xyzw[0] - v.#xyzw[0]);
    const absY = abs(this.#xyzw[1] - v.#xyzw[1]);
    const absZ = abs(this.#xyzw[2] - v.#xyzw[2]);
    const absW = abs(this.#xyzw[3] - v.#xyzw[3]);
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
  distanceManhattan(v: Vec4) {
    return (
      abs(this.#xyzw[0] - v.#xyzw[0]) +
      abs(this.#xyzw[1] - v.#xyzw[1]) +
      abs(this.#xyzw[2] - v.#xyzw[2]) +
      abs(this.#xyzw[3] - v.#xyzw[3])
    );
  }

  /**
   * Calculates the Minkowski distance between this vector and another vector.
   * @param {Vec4} v - The other vector.
   * @param {number} p - The order of the Minkowski distance.
   * @returns {number} The Minkowski distance between the vectors.
   */
  distanceMinkowski(v: Vec4, p: number) {
    return (
      (abs(this.#xyzw[0] - v.#xyzw[0]) ** p +
        abs(this.#xyzw[1] - v.#xyzw[1]) ** p +
        abs(this.#xyzw[2] - v.#xyzw[2]) ** p +
        abs(this.#xyzw[3] - v.#xyzw[3]) ** p) **
      (1 / p)
    );
  }

  /**
   * Calculates the squared distance between this vector and another vector.
   * @param v - The other vector.
   * @returns The squared distance between the vectors.
   */
  distanceSq(v: Vec4): number {
    return (
      (this.#xyzw[0] - v.#xyzw[0]) ** 2 +
      (this.#xyzw[1] - v.#xyzw[1]) ** 2 +
      (this.#xyzw[2] - v.#xyzw[2]) ** 2 +
      (this.#xyzw[3] - v.#xyzw[3]) ** 2
    );
  }

  /**
   * Calculates the dot product of this vector with another vector.
   * @param v - The other vector.
   * @returns The dot product of the vectors.
   */
  dot(v: Vec4): number {
    return (
      this.#xyzw[0] * v.#xyzw[0] + this.#xyzw[1] * v.#xyzw[1] + this.#xyzw[2] * v.#xyzw[2] + this.#xyzw[3] * v.#xyzw[3]
    );
  }

  /**
   * Reflects this vector across a normal vector.
   * The normal vector should be normalized (unit length).
   * @param normal - The normal vector to reflect across (must be normalized).
   * @returns This Vec4 instance for method chaining.
   */
  reflect(normal: Vec4): this {
    const dot =
      this.#xyzw[0] * normal.#xyzw[0] +
      this.#xyzw[1] * normal.#xyzw[1] +
      this.#xyzw[2] * normal.#xyzw[2] +
      this.#xyzw[3] * normal.#xyzw[3];

    this.#xyzw[0] -= 2 * dot * normal.#xyzw[0];
    this.#xyzw[1] -= 2 * dot * normal.#xyzw[1];
    this.#xyzw[2] -= 2 * dot * normal.#xyzw[2];
    this.#xyzw[3] -= 2 * dot * normal.#xyzw[3];
    this.#computeMagnitude();
    return this;
  }

  /**
   * Checks if this vector has infinite components.
   * @returns True if the vector has infinite components, false otherwise.
   */
  isInfinite(): boolean {
    const x = this.#xyzw[0];
    const y = this.#xyzw[1];
    const z = this.#xyzw[2];
    const w = this.#xyzw[3];
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
    return (
      Number.isNaN(this.#xyzw[0]) ||
      Number.isNaN(this.#xyzw[1]) ||
      Number.isNaN(this.#xyzw[2]) ||
      Number.isNaN(this.#xyzw[3])
    );
  }

  /**
   * Checks if this vector is zero.
   * @returns True if the vector is zero, false otherwise.
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
    const m = this.#magnitude;
    if (m > max) {
      this.#xyzw[0] = (this.#xyzw[0] / m) * max;
      this.#xyzw[1] = (this.#xyzw[1] / m) * max;
      this.#xyzw[2] = (this.#xyzw[2] / m) * max;
      this.#xyzw[3] = (this.#xyzw[3] / m) * max;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Limits the minimum magnitude of this vector.
   * @param min - The minimum magnitude.
   * @returns This Vec4 instance for method chaining.
   */
  limitMin(min: number): this {
    const m = this.#magnitude;
    if (m < min) {
      this.#xyzw[0] = (this.#xyzw[0] / m) * min;
      this.#xyzw[1] = (this.#xyzw[1] / m) * min;
      this.#xyzw[2] = (this.#xyzw[2] / m) * min;
      this.#xyzw[3] = (this.#xyzw[3] / m) * min;
      this.#computeMagnitude();
    }
    return this;
  }

  /**
   * Sets this vector to point towards another vector.
   * @param v - The vector to look at.
   * @returns This Vec4 instance for method chaining.
   */
  lookAt(v: Vec4): this {
    const m = this.#magnitude;
    const vM = v.#magnitude;
    this.#xyzw[0] = (v.#xyzw[0] / vM) * m;
    this.#xyzw[1] = (v.#xyzw[1] / vM) * m;
    this.#xyzw[2] = (v.#xyzw[2] / vM) * m;
    this.#xyzw[3] = (v.#xyzw[3] / vM) * m;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Negates this vector.
   * @returns This Vec4 instance for method chaining.
   */
  negate(): this {
    this.#xyzw[0] *= -1;
    this.#xyzw[1] *= -1;
    this.#xyzw[2] *= -1;
    this.#xyzw[3] *= -1;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Normalizes this vector.
   * @returns This Ve4 instance for method chaining.
   */
  normalize(): this {
    const m = this.#magnitude;
    this.#xyzw[0] /= m;
    this.#xyzw[1] /= m;
    this.#xyzw[2] /= m;
    this.#xyzw[3] /= m;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns This Vec4 instance for method chaining.
   */
  project(v: Vec4): this {
    const m = this.#magnitude;
    const vM = v.#magnitude;
    const vX = v.#xyzw[0];
    const vY = v.#xyzw[1];
    const vZ = v.#xyzw[2];
    const vW = v.#xyzw[3];
    const f =
      m * cos(acos((this.#xyzw[0] * vX + this.#xyzw[1] * vY + this.#xyzw[2] * vZ + this.#xyzw[3] * vW) / (m * vM)));
    this.#xyzw[0] = (vX / vM) * f;
    this.#xyzw[1] = (vY / vM) * f;
    this.#xyzw[2] = (vZ / vM) * f;
    this.#xyzw[3] = (vW / vM) * f;
    this.#computeMagnitude();
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
  satisfyEquality(v: Vec4): boolean {
    return (
      this.#xyzw[0] === v.#xyzw[0] &&
      this.#xyzw[1] === v.#xyzw[1] &&
      this.#xyzw[2] === v.#xyzw[2] &&
      this.#xyzw[3] === v.#xyzw[3]
    );
  }

  /**
   * Checks if this vector is opposite to another vector.
   * @param v - The other vector.
   * @returns True if the vectors are opposite, false otherwise.
   */
  satisfyOpposition(v: Vec4): boolean {
    return (
      this.#xyzw[0] === -v.#xyzw[0] &&
      this.#xyzw[1] === -v.#xyzw[1] &&
      this.#xyzw[2] === -v.#xyzw[2] &&
      this.#xyzw[3] === -v.#xyzw[3]
    );
  }

  /**
   * Compares this vector with another vector using an epsilon value for floating-point comparison.
   * @param v - The vector to compare with.
   * @param epsilon - The maximum difference between components to consider them equal.
   * @returns True if the vectors are equal within epsilon, false otherwise.
   */
  equals(v: Vec4, epsilon: number = Number.EPSILON): boolean {
    return (
      abs(this.#xyzw[0] - v.#xyzw[0]) <= epsilon &&
      abs(this.#xyzw[1] - v.#xyzw[1]) <= epsilon &&
      abs(this.#xyzw[2] - v.#xyzw[2]) <= epsilon &&
      abs(this.#xyzw[3] - v.#xyzw[3]) <= epsilon
    );
  }

  /**
   * Scales this vector by a scalar value.
   * @param c - The scalar value.
   * @returns This Vec4 instance for method chaining.
   */
  scale(c: number): this {
    this.#xyzw[0] *= c;
    this.#xyzw[1] *= c;
    this.#xyzw[2] *= c;
    this.#xyzw[3] *= c;
    this.#computeMagnitude();
    return this;
  }

  /**
   * Sets this vector to zero.
   * @returns This Vec4 instance for method chaining.
   */
  zero(): this {
    this.#xyzw[0] = 0;
    this.#xyzw[1] = 0;
    this.#xyzw[2] = 0;
    this.#xyzw[3] = 0;
    this.#computeMagnitude();
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
  toObject(): { x: number; y: number; z: number; w: number } {
    const [x, y, z, w] = this.#xyzw;
    return { x, y, z, w };
  }

  /**
   * Serializes the vector to a JSON-friendly format.
   * @returns A JSON-friendly object representation of the vector.
   */
  toJSON(): { x: number; y: number } {
    return this.toObject();
  }
}
