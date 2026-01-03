import { describe, expect, test } from "vitest";

import {
  type ArrayVector2D,
  add2D,
  angleBetween2D,
  angleX2D,
  angleY2D,
  clamp2D,
  clone2D,
  cross2D,
  distance2D,
  distanceChebyshev2D,
  distanceManhattan2D,
  distanceMinkowski2D,
  distanceSq2D,
  divide2D,
  dot2D,
  fromAngleX2D,
  fromAngleY2D,
  fromObject2D,
  fromPolarCoords2D,
  immutable2D,
  isEqual2D,
  isEqualApprox2D,
  isInfinite2D,
  isNaN2D,
  isOpposite2D,
  isZero2D,
  lerp2D,
  limitMax2D,
  limitMin2D,
  lookAt2D,
  magnitude2D,
  magnitudeSq2D,
  multiply2D,
  negate2D,
  normalize2D,
  one2D,
  project2D,
  random2D,
  reflect2D,
  rotate2D,
  setMagnitude2D,
  subtract2D,
  zero2D,
} from "./index.js";

describe("2D Vector Functions", () => {
  describe("factory methods", () => {
    test("zero creates zero vector", () => {
      const v = zero2D();
      expect(v[0]).toBe(0);
      expect(v[1]).toBe(0);
      expect(magnitude2D(v)).toBe(0);
      expect(isZero2D(v)).toBe(true);
    });

    test("one creates vector with all components as 1", () => {
      const v = one2D();
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(1);
      expect(magnitude2D(v)).toBeCloseTo(Math.sqrt(2));
    });

    test("random creates unit vector", () => {
      const v = random2D();
      expect(magnitude2D(v)).toBeCloseTo(1);

      // Test with custom random function
      const v2 = random2D(() => 0.5);
      expect(magnitude2D(v2)).toBeCloseTo(1);
    });

    test("fromObject creates vector correctly", () => {
      const v = fromObject2D({ x: 2, y: 4 });
      expect(v[0]).toBe(2);
      expect(v[1]).toBe(4);
    });

    test("cloning creates vector correctly", () => {
      const original: ArrayVector2D = [2, 4];
      const clone = clone2D(original);
      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
    });

    test("immutable vector is created correctly", () => {
      const immutable = immutable2D([2, 4]);
      // @ts-expect-error
      expect(() => (immutable[0] = 1)).toThrow();
    });

    test("fromPolarCoords creates vector correctly", () => {
      const v1 = fromPolarCoords2D(0, 1); // Unit vector along x-axis (phi=0, r=1)
      expect(v1[0]).toBeCloseTo(1);
      expect(v1[1]).toBeCloseTo(0);

      const v2 = fromPolarCoords2D(Math.PI / 2, 1); // Unit vector along y-axis
      expect(v2[0]).toBeCloseTo(0);
      expect(v2[1]).toBeCloseTo(1);

      const v3 = fromPolarCoords2D(Math.PI, 5); // Vector along negative x-axis
      expect(v3[0]).toBeCloseTo(-5);
      expect(v3[1]).toBeCloseTo(0);
    });

    test("fromAngleX creates vector correctly", () => {
      const v = fromAngleX2D(Math.PI / 4);
      expect(magnitude2D(v)).toBeCloseTo(1);
      expect(v[0]).toBeGreaterThan(0);
      expect(v[1]).toBeGreaterThan(0);
    });

    test("fromAngleY creates vector correctly", () => {
      const v = fromAngleY2D(Math.PI / 4);
      expect(magnitude2D(v)).toBeCloseTo(1);
      // fromAngleY creates a vector rotated from y-axis, so x can be negative
      expect(Math.abs(v[0])).toBeCloseTo(0.707);
      expect(v[1]).toBeCloseTo(0.707);
    });
  });

  describe("basic vector operations", () => {
    test("add works correctly", () => {
      const v1: ArrayVector2D = [1, 2];
      const v2: ArrayVector2D = [3, 4];
      const result = add2D(v1, v2);

      expect(result[0]).toBe(4);
      expect(result[1]).toBe(6);

      // Original vectors unchanged
      expect(v1[0]).toBe(1);
      expect(v1[1]).toBe(2);
      expect(v2[0]).toBe(3);
      expect(v2[1]).toBe(4);
    });

    test("subtract works correctly", () => {
      const v1: ArrayVector2D = [5, 7];
      const v2: ArrayVector2D = [2, 3];
      const result = subtract2D(v1, v2);

      expect(result[0]).toBe(3);
      expect(result[1]).toBe(4);

      // Original vectors unchanged
      expect(v1[0]).toBe(5);
      expect(v2[0]).toBe(2);
    });

    test("multiply works correctly", () => {
      const v1: ArrayVector2D = [2, 3];
      const v2: ArrayVector2D = [4, 5];
      const result = multiply2D(v1, v2);

      expect(result[0]).toBe(8);
      expect(result[1]).toBe(15);
    });

    test("divide works correctly", () => {
      const v1: ArrayVector2D = [8, 15];
      const v2: ArrayVector2D = [2, 3];
      const result = divide2D(v1, v2);

      expect(result[0]).toBe(4);
      expect(result[1]).toBe(5);
    });

    test("divide by zero returns infinity", () => {
      const v1: ArrayVector2D = [5, 10];
      const v2: ArrayVector2D = [0, 2];
      const result = divide2D(v1, v2);

      expect(result[0]).toBe(Number.POSITIVE_INFINITY);
      expect(result[1]).toBe(5);
    });

    test("normalize works correctly", () => {
      const v: ArrayVector2D = [3, 4];
      const originalMagnitude = magnitude2D(v);
      const result = normalize2D(v);

      expect(magnitude2D(result)).toBeCloseTo(1);
      expect(result[0]).toBeCloseTo(3 / originalMagnitude);
      expect(result[1]).toBeCloseTo(4 / originalMagnitude);

      // Original unchanged
      expect(v[0]).toBe(3);
      expect(v[1]).toBe(4);
    });

    test("negate works correctly", () => {
      const v: ArrayVector2D = [3, -4];
      const result = negate2D(v);

      expect(result[0]).toBe(-3);
      expect(result[1]).toBe(4);

      // Original unchanged
      expect(v[0]).toBe(3);
      expect(v[1]).toBe(-4);
    });
  });

  describe("dot and cross products", () => {
    test("dot product works correctly", () => {
      const v1: ArrayVector2D = [3, 4];
      const v2: ArrayVector2D = [2, 1];
      const dot = dot2D(v1, v2);

      expect(dot).toBe(10); // 3*2 + 4*1 = 10
    });

    test("cross product works correctly", () => {
      const v1: ArrayVector2D = [3, 4];
      const v2: ArrayVector2D = [2, 1];
      const cross = cross2D(v1, v2);

      expect(cross).toBe(-5); // 3*1 - 4*2 = -5
    });
  });

  describe("magnitude calculations", () => {
    test("magnitude works correctly", () => {
      const v: ArrayVector2D = [3, 4];
      expect(magnitude2D(v)).toBe(5);
    });

    test("magnitudeSq works correctly", () => {
      const v: ArrayVector2D = [3, 4];
      expect(magnitudeSq2D(v)).toBe(25);
    });

    test("setMagnitude works correctly", () => {
      const v: ArrayVector2D = [3, 4];
      const result = setMagnitude2D(v, 10);

      expect(magnitude2D(result)).toBeCloseTo(10);
    });
  });

  describe("distance calculations", () => {
    test("distance works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [3, 4];
      const distance = distance2D(v1, v2);

      expect(distance).toBe(5);
    });

    test("distanceSq works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [3, 4];
      const distanceSq = distanceSq2D(v1, v2);

      expect(distanceSq).toBe(25);
    });

    test("distanceChebyshev works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [3, 4];
      const distance = distanceChebyshev2D(v1, v2);

      expect(distance).toBe(4); // max(|3-0|, |4-0|) = 4
    });

    test("distanceManhattan works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [3, 4];
      const distance = distanceManhattan2D(v1, v2);

      expect(distance).toBe(7); // |3-0| + |4-0| = 7
    });

    test("distanceMinkowski works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [3, 4];
      const distance = distanceMinkowski2D(v1, v2, 2);

      expect(distance).toBeCloseTo(5); // Same as Euclidean for p=2
    });
  });

  describe("vector manipulation methods", () => {
    test("clamp works correctly", () => {
      const v: ArrayVector2D = [3, 4]; // magnitude = 5
      const result = clamp2D(v, 2, 10);

      expect(magnitude2D(result)).toBe(5); // Should be unchanged as it's within range

      const result2 = clamp2D(v, 6, 10);
      expect(magnitude2D(result2)).toBeCloseTo(6);

      const v2: ArrayVector2D = [12, 16]; // magnitude = 20
      const result3 = clamp2D(v2, 2, 10);
      expect(magnitude2D(result3)).toBeCloseTo(10);
    });

    test("limitMax works correctly", () => {
      const v: ArrayVector2D = [6, 8]; // magnitude = 10
      const result = limitMax2D(v, 5);

      expect(magnitude2D(result)).toBeCloseTo(5);
      expect(result[0]).toBeCloseTo(3);
      expect(result[1]).toBeCloseTo(4);

      // Test when already under limit
      const result2 = limitMax2D(result, 10);
      expect(magnitude2D(result2)).toBeCloseTo(5); // Should be unchanged
    });

    test("limitMin works correctly", () => {
      const v: ArrayVector2D = [1.5, 2]; // magnitude = 2.5
      const result = limitMin2D(v, 5);

      expect(magnitude2D(result)).toBeCloseTo(5);

      // Test when already above limit
      const result2 = limitMin2D(result, 2);
      expect(magnitude2D(result2)).toBeCloseTo(5); // Should be unchanged
    });

    test("lookAt works correctly", () => {
      const v: ArrayVector2D = [5, 0]; // magnitude = 5, pointing right
      const target: ArrayVector2D = [0, 3]; // pointing up
      const result = lookAt2D(v, target);

      expect(magnitude2D(result)).toBeCloseTo(5); // Magnitude preserved
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(5); // Now pointing up
    });

    test("project works correctly", () => {
      const v: ArrayVector2D = [3, 4];
      const onto: ArrayVector2D = [1, 0]; // Unit vector along x-axis
      const result = project2D(v, onto);

      expect(result[0]).toBeCloseTo(3); // Projection onto x-axis
      expect(result[1]).toBeCloseTo(0);
    });
  });

  describe("rotation methods", () => {
    test("rotate works correctly", () => {
      const v: ArrayVector2D = [1, 0]; // Unit vector along x-axis
      const result = rotate2D(v, Math.PI / 2); // Rotate 90 degrees

      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(1); // Now pointing up
      expect(magnitude2D(result)).toBeCloseTo(1); // Magnitude preserved
    });

    test("rotate with axis works correctly", () => {
      const v: ArrayVector2D = [2, 0];
      const axis: ArrayVector2D = [1, 0];
      const result = rotate2D(v, Math.PI / 2, axis);

      // Point [2, 0] rotated 90° around [1, 0] should give [1, 1]
      expect(result[0]).toBeCloseTo(1);
      expect(result[1]).toBeCloseTo(1);
    });
  });

  describe("reflection", () => {
    test("reflect works correctly", () => {
      const v: ArrayVector2D = [1, 1];
      const normal: ArrayVector2D = [0, 1]; // Horizontal surface normal
      const result = reflect2D(v, normal);

      expect(result[0]).toBeCloseTo(1);
      expect(result[1]).toBeCloseTo(-1); // Y component reflected

      // Original unchanged
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(1);
    });
  });

  describe("equality and validation methods", () => {
    test("isEqual works correctly", () => {
      const v1: ArrayVector2D = [3, 4];
      const v2: ArrayVector2D = [3, 4];
      const v3: ArrayVector2D = [3, 5];

      expect(isEqual2D(v1, v2)).toBe(true);
      expect(isEqual2D(v1, v3)).toBe(false);
    });

    test("isEqualApprox works correctly", () => {
      const v1: ArrayVector2D = [1.0001, 2.0001];
      const v2: ArrayVector2D = [1.0002, 2.0002];

      expect(isEqualApprox2D(v1, v2, 0.001)).toBe(true);
      expect(isEqualApprox2D(v1, v2, 0.00001)).toBe(false);
    });

    test("isZero works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [0, 0.0001];
      const v3: ArrayVector2D = [1, 0];

      expect(isZero2D(v1)).toBe(true);
      // isZero doesn't use epsilon - it's exact equality
      expect(isZero2D(v2)).toBe(false);
      expect(isZero2D(v3)).toBe(false);
    });

    test("isOpposite works correctly", () => {
      const v1: ArrayVector2D = [3, 4];
      const v2: ArrayVector2D = [-3, -4];
      const v3: ArrayVector2D = [3, -4];

      expect(isOpposite2D(v1, v2)).toBe(true);
      expect(isOpposite2D(v1, v3)).toBe(false);
    });

    test("isNaN works correctly", () => {
      const v1: ArrayVector2D = [NaN, 4];
      const v2: ArrayVector2D = [3, NaN];
      const v3: ArrayVector2D = [3, 4];

      expect(isNaN2D(v1)).toBe(true);
      expect(isNaN2D(v2)).toBe(true);
      expect(isNaN2D(v3)).toBe(false);
    });

    test("isInfinite works correctly", () => {
      const v1: ArrayVector2D = [Infinity, 4];
      const v2: ArrayVector2D = [3, Infinity];
      const v3: ArrayVector2D = [3, 4];

      expect(isInfinite2D(v1)).toBe(true);
      expect(isInfinite2D(v2)).toBe(true);
      expect(isInfinite2D(v3)).toBe(false);
    });
  });

  describe("interpolation", () => {
    test("lerp works correctly", () => {
      const v1: ArrayVector2D = [0, 0];
      const v2: ArrayVector2D = [4, 8];

      const result1 = lerp2D(v1, v2, 0);
      expect(result1[0]).toBe(0);
      expect(result1[1]).toBe(0);

      const result2 = lerp2D(v1, v2, 0.5);
      expect(result2[0]).toBe(2);
      expect(result2[1]).toBe(4);

      const result3 = lerp2D(v1, v2, 1);
      expect(result3[0]).toBe(4);
      expect(result3[1]).toBe(8);
    });
  });

  describe("angle calculations", () => {
    test("angleBetween works correctly", () => {
      const v1: ArrayVector2D = [1, 0]; // Along x-axis
      const v2: ArrayVector2D = [0, 1]; // Along y-axis
      const angle = angleBetween2D(v1, v2);

      expect(angle).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector2D = [-1, 0]; // Opposite direction
      const angle2 = angleBetween2D(v1, v3);
      expect(Math.abs(angle2)).toBeCloseTo(Math.PI);
    });

    test("angleX works correctly", () => {
      const v: ArrayVector2D = [1, 1];
      const angle = angleX2D(v);

      expect(angle).toBeCloseTo(Math.PI / 4);
    });

    test("angleY works correctly", () => {
      const v: ArrayVector2D = [1, 1];
      const angle = angleY2D(v);

      expect(angle).toBeCloseTo(Math.PI / 4);
    });
  });
});
