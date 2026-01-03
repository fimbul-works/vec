import { describe, expect, test } from "vitest";

import {
  type ArrayVector4D,
  add4D,
  angleBetween4D,
  angleW4D,
  angleX4D,
  angleY4D,
  angleZ4D,
  clamp4D,
  clone4D,
  distance4D,
  distanceChebyshev4D,
  distanceManhattan4D,
  distanceMinkowski4D,
  distanceSq4D,
  divide4D,
  dot4D,
  fromObject4D,
  immutable4D,
  isEqual4D,
  isEqualApprox4D,
  isInfinite4D,
  isNan4D,
  isOpposite4D,
  isZero4D,
  lerp4D,
  limitMax4D,
  limitMin4D,
  lookAt4D,
  magnitude4D,
  magnitudeSq4D,
  multiply4D,
  negate4D,
  normalize4D,
  one4D,
  project4D,
  random4D,
  reflect4D,
  setMagnitude4D,
  subtract4D,
  zero4D,
} from "./index.js";

describe("4D Vector Functions", () => {
  describe("factory methods", () => {
    test("zero creates zero vector", () => {
      const v = zero4D();
      expect(v[0]).toBe(0);
      expect(v[1]).toBe(0);
      expect(v[2]).toBe(0);
      expect(v[3]).toBe(0);
      expect(magnitude4D(v)).toBe(0);
      expect(isZero4D(v)).toBe(true);
    });

    test("one creates vector with all components as 1", () => {
      const v = one4D();
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(1);
      expect(v[2]).toBe(1);
      expect(v[3]).toBe(1);
      expect(magnitude4D(v)).toBe(2); // √(1² + 1² + 1² + 1²) = √4 = 2
    });

    test("random creates unit vector", () => {
      const v = random4D();
      expect(magnitude4D(v)).toBeCloseTo(1);

      // Just test that it creates a vector with magnitude close to 1
      // (The algorithm is complex for 4D, we won't test with constant random)
    });

    test("fromObject creates vector correctly", () => {
      const v = fromObject4D({ x: 1, y: 2, z: 3, w: 4 });
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(2);
      expect(v[2]).toBe(3);
      expect(v[3]).toBe(4);
    });

    test("cloning creates vector correctly", () => {
      const original: ArrayVector4D = [2, 4, 6, 8];
      const clone = clone4D(original);
      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
    });

    test("immutable vector is created correctly", () => {
      const immutable = immutable4D([2, 4, 6, 8]);
      // @ts-expect-error
      expect(() => (immutable[0] = 1)).toThrow();
    });
  });

  describe("basic vector operations", () => {
    test("add works correctly", () => {
      const v1: ArrayVector4D = [1, 2, 3, 4];
      const v2: ArrayVector4D = [5, 6, 7, 8];
      const result = add4D(v1, v2);

      expect(result[0]).toBe(6);
      expect(result[1]).toBe(8);
      expect(result[2]).toBe(10);
      expect(result[3]).toBe(12);

      // Original vectors unchanged
      expect(v1[0]).toBe(1);
      expect(v1[1]).toBe(2);
      expect(v2[0]).toBe(5);
      expect(v2[1]).toBe(6);
    });

    test("subtract works correctly", () => {
      const v1: ArrayVector4D = [5, 7, 9, 11];
      const v2: ArrayVector4D = [2, 3, 4, 5];
      const result = subtract4D(v1, v2);

      expect(result[0]).toBe(3);
      expect(result[1]).toBe(4);
      expect(result[2]).toBe(5);
      expect(result[3]).toBe(6);

      // Original vectors unchanged
      expect(v1[0]).toBe(5);
      expect(v2[0]).toBe(2);
    });

    test("multiply works correctly", () => {
      const v1: ArrayVector4D = [2, 3, 4, 5];
      const v2: ArrayVector4D = [6, 7, 8, 9];
      const result = multiply4D(v1, v2);

      expect(result[0]).toBe(12);
      expect(result[1]).toBe(21);
      expect(result[2]).toBe(32);
      expect(result[3]).toBe(45);
    });

    test("divide works correctly", () => {
      const v1: ArrayVector4D = [10, 15, 20, 25];
      const v2: ArrayVector4D = [2, 3, 4, 5];
      const result = divide4D(v1, v2);

      expect(result[0]).toBe(5);
      expect(result[1]).toBe(5);
      expect(result[2]).toBe(5);
      expect(result[3]).toBe(5);
    });

    test("divide by zero returns infinity", () => {
      const v1: ArrayVector4D = [5, 10, 15, 20];
      const v2: ArrayVector4D = [0, 2, 3, 4];
      const result = divide4D(v1, v2);

      expect(result[0]).toBe(Number.POSITIVE_INFINITY);
      expect(result[1]).toBe(5);
      expect(result[2]).toBe(5);
      expect(result[3]).toBe(5);
    });

    test("normalize works correctly", () => {
      const v: ArrayVector4D = [3, 4, 0, 0];
      const originalMagnitude = magnitude4D(v);
      const result = normalize4D(v);

      expect(magnitude4D(result)).toBeCloseTo(1);
      expect(result[0]).toBeCloseTo(3 / originalMagnitude);
      expect(result[1]).toBeCloseTo(4 / originalMagnitude);

      // Original unchanged
      expect(v[0]).toBe(3);
      expect(v[1]).toBe(4);
      expect(v[2]).toBe(0);
      expect(v[3]).toBe(0);
    });

    test("negate works correctly", () => {
      const v: ArrayVector4D = [3, -4, 5, -6];
      const result = negate4D(v);

      expect(result[0]).toBe(-3);
      expect(result[1]).toBe(4);
      expect(result[2]).toBe(-5);
      expect(result[3]).toBe(6);

      // Original unchanged
      expect(v[0]).toBe(3);
      expect(v[1]).toBe(-4);
      expect(v[2]).toBe(5);
      expect(v[3]).toBe(-6);
    });
  });

  describe("dot product", () => {
    test("dot product works correctly", () => {
      const v1: ArrayVector4D = [1, 2, 3, 4];
      const v2: ArrayVector4D = [5, 6, 7, 8];
      const dot = dot4D(v1, v2);

      expect(dot).toBe(70); // 1*5 + 2*6 + 3*7 + 4*8 = 5 + 12 + 21 + 32 = 70
    });
  });

  describe("magnitude calculations", () => {
    test("magnitude works correctly", () => {
      const v1: ArrayVector4D = [3, 4, 0, 0];
      expect(magnitude4D(v1)).toBe(5); // 3-4-5 triangle

      const v2: ArrayVector4D = [1, 1, 1, 1];
      expect(magnitude4D(v2)).toBe(2); // √(1² + 1² + 1² + 1²) = √4 = 2

      const v3: ArrayVector4D = [2, 3, 6, 0];
      expect(magnitude4D(v3)).toBe(7); // 2² + 3² + 6² = 4 + 9 + 36 = 49
    });

    test("magnitudeSq works correctly", () => {
      const v: ArrayVector4D = [1, 2, 3, 4];
      expect(magnitudeSq4D(v)).toBe(30); // 1² + 2² + 3² + 4²

      const u: ArrayVector4D = [2, 2, 2, 2];
      expect(magnitudeSq4D(u)).toBe(16); // 2² + 2² + 2² + 2²
    });

    test("setMagnitude works correctly", () => {
      const v: ArrayVector4D = [3, 4, 0, 0];
      const result = setMagnitude4D(v, 10);

      expect(magnitude4D(result)).toBeCloseTo(10);
    });
  });

  describe("distance calculations", () => {
    test("distance works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [3, 4, 0, 0];
      const distance = distance4D(v1, v2);

      expect(distance).toBe(5);
    });

    test("distanceSq works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [3, 4, 0, 0];
      const distanceSq = distanceSq4D(v1, v2);

      expect(distanceSq).toBe(25);
    });

    test("distanceChebyshev works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [3, 4, 5, 2];
      const distance = distanceChebyshev4D(v1, v2);

      expect(distance).toBe(5); // max(|3|, |4|, |5|, |2|) = 5
    });

    test("distanceManhattan works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [3, 4, 5, 2];
      const distance = distanceManhattan4D(v1, v2);

      expect(distance).toBe(14); // |3| + |4| + |5| + |2| = 14
    });

    test("distanceMinkowski works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [3, 4, 0, 0];
      const distance = distanceMinkowski4D(v1, v2, 2);

      expect(distance).toBeCloseTo(5); // Same as Euclidean for p=2
    });
  });

  describe("vector manipulation methods", () => {
    test("clamp works correctly", () => {
      const v: ArrayVector4D = [3, 4, 0, 0]; // magnitude = 5
      const result = clamp4D(v, 2, 10);

      expect(magnitude4D(result)).toBe(5); // Should be unchanged as it's within range

      const result2 = clamp4D(v, 6, 10);
      expect(magnitude4D(result2)).toBeCloseTo(6);

      const v2: ArrayVector4D = [6, 8, 0, 0]; // magnitude = 10
      const result3 = clamp4D(v2, 2, 8);
      expect(magnitude4D(result3)).toBeCloseTo(8);
    });

    test("limitMax works correctly", () => {
      const v: ArrayVector4D = [6, 8, 0, 0]; // magnitude = 10
      const result = limitMax4D(v, 5);

      expect(magnitude4D(result)).toBeCloseTo(5);
      expect(result[0]).toBeCloseTo(3);
      expect(result[1]).toBeCloseTo(4);

      // Test when already under limit
      const result2 = limitMax4D(result, 10);
      expect(magnitude4D(result2)).toBeCloseTo(5); // Should be unchanged
    });

    test("limitMin works correctly", () => {
      const v: ArrayVector4D = [1.5, 2, 0, 0]; // magnitude = 2.5
      const result = limitMin4D(v, 5);

      expect(magnitude4D(result)).toBeCloseTo(5);

      // Test when already above limit
      const result2 = limitMin4D(result, 2);
      expect(magnitude4D(result2)).toBeCloseTo(5); // Should be unchanged
    });

    test("lookAt works correctly", () => {
      const v: ArrayVector4D = [5, 0, 0, 0]; // magnitude = 5
      const target: ArrayVector4D = [0, 3, 0, 0]; // pointing along y
      const result = lookAt4D(v, target);

      expect(magnitude4D(result)).toBeCloseTo(5); // Magnitude preserved
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(5); // Now pointing along y
    });

    test("project works correctly", () => {
      const v: ArrayVector4D = [3, 4, 0, 0];
      const onto: ArrayVector4D = [1, 0, 0, 0]; // Unit vector along x-axis
      const result = project4D(v, onto);

      expect(result[0]).toBeCloseTo(3); // Projection onto x-axis
      expect(result[1]).toBeCloseTo(0);
      expect(result[2]).toBeCloseTo(0);
      expect(result[3]).toBeCloseTo(0);
    });
  });

  describe("reflection", () => {
    test("reflect works correctly", () => {
      const v: ArrayVector4D = [1, 1, 0, 0];
      const normal: ArrayVector4D = [0, 1, 0, 0]; // Reflect across y-axis
      const result = reflect4D(v, normal);

      expect(result[0]).toBeCloseTo(1);
      expect(result[1]).toBeCloseTo(-1); // Y component reflected
      expect(result[2]).toBeCloseTo(0);
      expect(result[3]).toBeCloseTo(0);

      // Original unchanged
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(1);
    });
  });

  describe("equality and validation methods", () => {
    test("isEqual works correctly", () => {
      const v1: ArrayVector4D = [1, 2, 3, 4];
      const v2: ArrayVector4D = [1, 2, 3, 4];
      const v3: ArrayVector4D = [1, 2, 3, 5];

      expect(isEqual4D(v1, v2)).toBe(true);
      expect(isEqual4D(v1, v3)).toBe(false);
    });

    test("isEqualApprox works correctly", () => {
      const v1: ArrayVector4D = [1.0001, 2.0001, 3.0001, 4.0001];
      const v2: ArrayVector4D = [1.0002, 2.0002, 3.0002, 4.0002];

      expect(isEqualApprox4D(v1, v2, 0.001)).toBe(true);
      expect(isEqualApprox4D(v1, v2, 0.00001)).toBe(false);
    });

    test("isZero works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [0, 0.0001, 0, 0];
      const v3: ArrayVector4D = [1, 0, 0, 0];

      expect(isZero4D(v1)).toBe(true);
      expect(isZero4D(v2)).toBe(false);
      expect(isZero4D(v3)).toBe(false);
    });

    test("isOpposite works correctly", () => {
      const v1: ArrayVector4D = [1, 2, 3, 4];
      const v2: ArrayVector4D = [-1, -2, -3, -4];
      const v3: ArrayVector4D = [1, -2, -3, -4];

      expect(isOpposite4D(v1, v2)).toBe(true);
      expect(isOpposite4D(v1, v3)).toBe(false);
    });

    test("isNaN works correctly", () => {
      const v1: ArrayVector4D = [NaN, 2, 3, 4];
      const v2: ArrayVector4D = [1, NaN, 3, 4];
      const v3: ArrayVector4D = [1, 2, 3, 4];

      expect(isNan4D(v1)).toBe(true);
      expect(isNan4D(v2)).toBe(true);
      expect(isNan4D(v3)).toBe(false);
    });

    test("isInfinite works correctly", () => {
      const v1: ArrayVector4D = [Infinity, 2, 3, 4];
      const v2: ArrayVector4D = [1, Infinity, 3, 4];
      const v3: ArrayVector4D = [1, 2, 3, 4];

      expect(isInfinite4D(v1)).toBe(true);
      expect(isInfinite4D(v2)).toBe(true);
      expect(isInfinite4D(v3)).toBe(false);
    });
  });

  describe("interpolation", () => {
    test("lerp works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 0];
      const v2: ArrayVector4D = [4, 8, 12, 16];

      const result1 = lerp4D(v1, v2, 0);
      expect(result1[0]).toBe(0);
      expect(result1[1]).toBe(0);
      expect(result1[2]).toBe(0);
      expect(result1[3]).toBe(0);

      const result2 = lerp4D(v1, v2, 0.5);
      expect(result2[0]).toBe(2);
      expect(result2[1]).toBe(4);
      expect(result2[2]).toBe(6);
      expect(result2[3]).toBe(8);

      const result3 = lerp4D(v1, v2, 1);
      expect(result3[0]).toBe(4);
      expect(result3[1]).toBe(8);
      expect(result3[2]).toBe(12);
      expect(result3[3]).toBe(16);
    });
  });

  describe("angle calculations", () => {
    test("angleBetween works correctly", () => {
      const v1: ArrayVector4D = [1, 0, 0, 0]; // Along x-axis
      const v2: ArrayVector4D = [0, 1, 0, 0]; // Along y-axis
      const angle = angleBetween4D(v1, v2);

      expect(angle).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector4D = [-1, 0, 0, 0]; // Opposite direction
      const angle2 = angleBetween4D(v1, v3);
      expect(Math.abs(angle2)).toBeCloseTo(Math.PI);
    });

    test("angleX works correctly", () => {
      const v1: ArrayVector4D = [1, 0, 0, 0]; // Along x-axis
      expect(angleX4D(v1)).toBeCloseTo(0);

      const v2: ArrayVector4D = [0, 1, 0, 0]; // Along y-axis
      expect(angleX4D(v2)).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector4D = [0, 0, 1, 0]; // Along z-axis
      expect(angleX4D(v3)).toBeCloseTo(Math.PI / 2);

      const v4: ArrayVector4D = [0, 0, 0, 1]; // Along w-axis
      expect(angleX4D(v4)).toBeCloseTo(Math.PI / 2);
    });

    test("angleY works correctly", () => {
      const v1: ArrayVector4D = [0, 1, 0, 0]; // Along y-axis
      expect(angleY4D(v1)).toBeCloseTo(0);

      const v2: ArrayVector4D = [1, 0, 0, 0]; // Along x-axis
      expect(angleY4D(v2)).toBeCloseTo(Math.PI / 2);
    });

    test("angleZ works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 1, 0]; // Along z-axis
      expect(angleZ4D(v1)).toBeCloseTo(0);

      const v2: ArrayVector4D = [1, 0, 0, 0]; // Along x-axis
      expect(angleZ4D(v2)).toBeCloseTo(Math.PI / 2);
    });

    test("angleW works correctly", () => {
      const v1: ArrayVector4D = [0, 0, 0, 1]; // Along w-axis
      expect(angleW4D(v1)).toBeCloseTo(0);

      const v2: ArrayVector4D = [1, 0, 0, 0]; // Along x-axis
      expect(angleW4D(v2)).toBeCloseTo(Math.PI / 2);
    });
  });

  describe("homogeneous coordinates for graphics", () => {
    test("point representation (w=1)", () => {
      const point: ArrayVector4D = [10, 20, 30, 1]; // 3D point at (10, 20, 30)
      expect(point[3]).toBe(1);
      expect(point[0]).toBe(10);
      expect(point[1]).toBe(20);
      expect(point[2]).toBe(30);
    });

    test("direction vector representation (w=0)", () => {
      const direction: ArrayVector4D = [1, 0, 0, 0]; // Direction along x-axis
      expect(direction[3]).toBe(0);
      expect(direction[0]).toBe(1);
      expect(direction[1]).toBe(0);
      expect(direction[2]).toBe(0);
    });

    test("color with alpha representation", () => {
      const color: ArrayVector4D = [0.8, 0.6, 0.2, 0.9]; // Orange with 90% opacity
      expect(color[0]).toBe(0.8);
      expect(color[1]).toBe(0.6);
      expect(color[2]).toBe(0.2);
      expect(color[3]).toBe(0.9);
    });
  });
});
