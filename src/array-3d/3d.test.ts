import { describe, expect, test } from "vitest";

import {
  type ArrayVector3D,
  add3D,
  angleBetween3D,
  angleX3D,
  angleY3D,
  angleZ3D,
  clamp3D,
  clone3D,
  cross3D,
  distance3D,
  distanceChebyshev3D,
  distanceManhattan3D,
  distanceMinkowski3D,
  distanceSq3D,
  divide3D,
  dot3D,
  fromCylindricalCoords,
  fromObject3D,
  fromSphericalCoords3D,
  immutable3D,
  isEqual3D,
  isEqualApprox3D,
  isInfinite3D,
  isNaN3D,
  isOpposite3D,
  isZero3D,
  lerp3D,
  limitMax3D,
  limitMin3D,
  lookAt3D,
  magnitude3D,
  magnitudeSq3D,
  multiply3D,
  negate3D,
  normalize3D,
  one3D,
  project3D,
  random3D,
  reflect3D,
  rotateX3D,
  rotateY3D,
  rotateZ3D,
  setMagnitude3D,
  subtract3D,
  zero3D,
} from "./index.js";

describe("3D Vector Functions", () => {
  describe("factory methods", () => {
    test("zero creates zero vector", () => {
      const v = zero3D();
      expect(v[0]).toBe(0);
      expect(v[1]).toBe(0);
      expect(v[2]).toBe(0);
      expect(magnitude3D(v)).toBe(0);
      expect(isZero3D(v)).toBe(true);
    });

    test("one creates vector with all components as 1", () => {
      const v = one3D();
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(1);
      expect(v[2]).toBe(1);
      expect(magnitude3D(v)).toBeCloseTo(Math.sqrt(3));
    });

    test("random creates unit vector", () => {
      const v = random3D();
      expect(magnitude3D(v)).toBeCloseTo(1);

      // Test with custom random function
      const v2 = random3D(() => 0.5);
      expect(magnitude3D(v2)).toBeCloseTo(1);
    });

    test("fromObject creates vector correctly", () => {
      const v = fromObject3D({ x: 2, y: 4, z: 6 });
      expect(v[0]).toBe(2);
      expect(v[1]).toBe(4);
      expect(v[2]).toBe(6);
    });

    test("cloning creates vector correctly", () => {
      const original: ArrayVector3D = [2, 4, 6];
      const clone = clone3D(original);
      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
    });

    test("immutable vector is created correctly", () => {
      const immutable = immutable3D([2, 4, 6]);
      // @ts-expect-error
      expect(() => (immutable[0] = 1)).toThrow();
    });

    test("fromSphericalCoords creates vector correctly", () => {
      // fromSphericalCoords3D takes (theta, phi, r)
      const v1 = fromSphericalCoords3D(0, 0, 1); // Unit vector along z-axis
      expect(v1[0]).toBeCloseTo(0);
      expect(v1[1]).toBeCloseTo(0);
      expect(v1[2]).toBeCloseTo(1);

      const v2 = fromSphericalCoords3D(Math.PI / 2, 0, 1); // Unit vector along x-axis
      expect(v2[0]).toBeCloseTo(1);
      expect(v2[1]).toBeCloseTo(0);
      expect(v2[2]).toBeCloseTo(0);

      const v3 = fromSphericalCoords3D(Math.PI / 2, Math.PI / 2, 5); // Vector along y-axis
      expect(v3[0]).toBeCloseTo(0);
      expect(v3[1]).toBeCloseTo(5);
      expect(v3[2]).toBeCloseTo(0);
    });

    test("fromCylindricalCoords creates vector correctly", () => {
      const v1 = fromCylindricalCoords(1, 0, 0); // Unit vector along x-axis
      expect(v1[0]).toBeCloseTo(1);
      expect(v1[1]).toBeCloseTo(0);
      expect(v1[2]).toBeCloseTo(0);

      const v2 = fromCylindricalCoords(1, Math.PI / 2, 0); // Unit vector along y-axis
      expect(v2[0]).toBeCloseTo(0);
      expect(v2[1]).toBeCloseTo(1);
      expect(v2[2]).toBeCloseTo(0);

      const v3 = fromCylindricalCoords(1, 0, 5); // Point at z=5
      expect(v3[0]).toBeCloseTo(1);
      expect(v3[1]).toBeCloseTo(0);
      expect(v3[2]).toBe(5);
    });
  });

  describe("basic vector operations", () => {
    test("add works correctly", () => {
      const v1: ArrayVector3D = [1, 2, 3];
      const v2: ArrayVector3D = [4, 5, 6];
      const result = add3D(v1, v2);

      expect(result[0]).toBe(5);
      expect(result[1]).toBe(7);
      expect(result[2]).toBe(9);

      // Original vectors unchanged
      expect(v1[0]).toBe(1);
      expect(v1[1]).toBe(2);
      expect(v1[2]).toBe(3);
      expect(v2[0]).toBe(4);
      expect(v2[1]).toBe(5);
      expect(v2[2]).toBe(6);
    });

    test("subtract works correctly", () => {
      const v1: ArrayVector3D = [5, 7, 9];
      const v2: ArrayVector3D = [2, 3, 4];
      const result = subtract3D(v1, v2);

      expect(result[0]).toBe(3);
      expect(result[1]).toBe(4);
      expect(result[2]).toBe(5);

      // Original vectors unchanged
      expect(v1[0]).toBe(5);
      expect(v2[0]).toBe(2);
    });

    test("multiply works correctly", () => {
      const v1: ArrayVector3D = [2, 3, 4];
      const v2: ArrayVector3D = [5, 6, 7];
      const result = multiply3D(v1, v2);

      expect(result[0]).toBe(10);
      expect(result[1]).toBe(18);
      expect(result[2]).toBe(28);
    });

    test("divide works correctly", () => {
      const v1: ArrayVector3D = [10, 15, 20];
      const v2: ArrayVector3D = [2, 3, 4];
      const result = divide3D(v1, v2);

      expect(result[0]).toBe(5);
      expect(result[1]).toBe(5);
      expect(result[2]).toBe(5);
    });

    test("divide by zero returns infinity", () => {
      const v1: ArrayVector3D = [5, 10, 15];
      const v2: ArrayVector3D = [0, 2, 3];
      const result = divide3D(v1, v2);

      expect(result[0]).toBe(Number.POSITIVE_INFINITY);
      expect(result[1]).toBe(5);
      expect(result[2]).toBe(5);
    });

    test("normalize works correctly", () => {
      const v: ArrayVector3D = [3, 4, 0];
      const originalMagnitude = magnitude3D(v);
      const result = normalize3D(v);

      expect(magnitude3D(result)).toBeCloseTo(1);
      expect(result[0]).toBeCloseTo(3 / originalMagnitude);
      expect(result[1]).toBeCloseTo(4 / originalMagnitude);

      // Original unchanged
      expect(v[0]).toBe(3);
      expect(v[1]).toBe(4);
      expect(v[2]).toBe(0);
    });

    test("negate works correctly", () => {
      const v: ArrayVector3D = [3, -4, 5];
      const result = negate3D(v);

      expect(result[0]).toBe(-3);
      expect(result[1]).toBe(4);
      expect(result[2]).toBe(-5);

      // Original unchanged
      expect(v[0]).toBe(3);
      expect(v[1]).toBe(-4);
      expect(v[2]).toBe(5);
    });
  });

  describe("dot and cross products", () => {
    test("dot product works correctly", () => {
      const v1: ArrayVector3D = [1, 2, 3];
      const v2: ArrayVector3D = [4, 5, 6];
      const dot = dot3D(v1, v2);

      expect(dot).toBe(32); // 1*4 + 2*5 + 3*6 = 32
    });

    test("cross product works correctly", () => {
      const v1: ArrayVector3D = [1, 0, 0];
      const v2: ArrayVector3D = [0, 1, 0];
      const cross = cross3D(v1, v2);

      // Cross product of x and y should be z
      expect(cross[0]).toBeCloseTo(0);
      expect(cross[1]).toBeCloseTo(0);
      expect(cross[2]).toBeCloseTo(1);
    });

    test("cross product is anti-commutative", () => {
      const v1: ArrayVector3D = [1, 2, 3];
      const v2: ArrayVector3D = [4, 5, 6];
      const cross1 = cross3D(v1, v2);
      const cross2 = cross3D(v2, v1);

      expect(cross1[0]).toBeCloseTo(-cross2[0]);
      expect(cross1[1]).toBeCloseTo(-cross2[1]);
      expect(cross1[2]).toBeCloseTo(-cross2[2]);
    });
  });

  describe("magnitude calculations", () => {
    test("magnitude works correctly", () => {
      const v1: ArrayVector3D = [3, 4, 0];
      expect(magnitude3D(v1)).toBe(5); // 3-4-5 triangle

      const v2: ArrayVector3D = [1, 1, 1];
      expect(magnitude3D(v2)).toBeCloseTo(Math.sqrt(3));

      const v3: ArrayVector3D = [3, 4, 5];
      expect(magnitude3D(v3)).toBeCloseTo(Math.sqrt(50));
    });

    test("magnitudeSq works correctly", () => {
      const v1: ArrayVector3D = [3, 4, 0];
      expect(magnitudeSq3D(v1)).toBe(25);

      const v2: ArrayVector3D = [3, 4, 5];
      expect(magnitudeSq3D(v2)).toBe(50);
    });

    test("setMagnitude works correctly", () => {
      const v: ArrayVector3D = [3, 4, 0];
      const result = setMagnitude3D(v, 10);

      expect(magnitude3D(result)).toBeCloseTo(10);
    });
  });

  describe("distance calculations", () => {
    test("distance works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [3, 4, 0];
      const distance = distance3D(v1, v2);

      expect(distance).toBe(5);
    });

    test("distanceSq works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [3, 4, 0];
      const distanceSq = distanceSq3D(v1, v2);

      expect(distanceSq).toBe(25);
    });

    test("distanceChebyshev works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [3, 4, 5];
      const distance = distanceChebyshev3D(v1, v2);

      expect(distance).toBe(5); // max(|3|, |4|, |5|) = 5
    });

    test("distanceManhattan works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [3, 4, 5];
      const distance = distanceManhattan3D(v1, v2);

      expect(distance).toBe(12); // |3| + |4| + |5| = 12
    });

    test("distanceMinkowski works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [3, 4, 0];
      const distance = distanceMinkowski3D(v1, v2, 2);

      expect(distance).toBeCloseTo(5); // Same as Euclidean for p=2
    });
  });

  describe("vector manipulation methods", () => {
    test("clamp works correctly", () => {
      const v: ArrayVector3D = [3, 4, 0]; // magnitude = 5
      const result = clamp3D(v, 2, 10);

      expect(magnitude3D(result)).toBe(5); // Should be unchanged as it's within range

      const result2 = clamp3D(v, 6, 10);
      expect(magnitude3D(result2)).toBeCloseTo(6);

      const v2: ArrayVector3D = [6, 8, 0]; // magnitude = 10
      const result3 = clamp3D(v2, 2, 8);
      expect(magnitude3D(result3)).toBeCloseTo(8);
    });

    test("limitMax works correctly", () => {
      const v: ArrayVector3D = [6, 8, 0]; // magnitude = 10
      const result = limitMax3D(v, 5);

      expect(magnitude3D(result)).toBeCloseTo(5);
      expect(result[0]).toBeCloseTo(3);
      expect(result[1]).toBeCloseTo(4);

      // Test when already under limit
      const result2 = limitMax3D(result, 10);
      expect(magnitude3D(result2)).toBeCloseTo(5); // Should be unchanged
    });

    test("limitMin works correctly", () => {
      const v: ArrayVector3D = [1.5, 2, 0]; // magnitude = 2.5
      const result = limitMin3D(v, 5);

      expect(magnitude3D(result)).toBeCloseTo(5);

      // Test when already above limit
      const result2 = limitMin3D(result, 2);
      expect(magnitude3D(result2)).toBeCloseTo(5); // Should be unchanged
    });

    test("lookAt works correctly", () => {
      const v: ArrayVector3D = [5, 0, 0]; // magnitude = 5, pointing along x
      const target: ArrayVector3D = [0, 3, 0]; // pointing along y
      const result = lookAt3D(v, target);

      expect(magnitude3D(result)).toBeCloseTo(5); // Magnitude preserved
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(5); // Now pointing along y
      expect(result[2]).toBeCloseTo(0);
    });

    test("project works correctly", () => {
      const v: ArrayVector3D = [3, 4, 0];
      const onto: ArrayVector3D = [1, 0, 0]; // Unit vector along x-axis
      const result = project3D(v, onto);

      expect(result[0]).toBeCloseTo(3); // Projection onto x-axis
      expect(result[1]).toBeCloseTo(0);
      expect(result[2]).toBeCloseTo(0);
    });
  });

  describe("rotation methods", () => {
    test("rotateX works correctly", () => {
      const v: ArrayVector3D = [0, 1, 0]; // Pointing along y-axis
      const result = rotateX3D(v, Math.PI / 2); // Rotate 90 degrees

      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(0);
      expect(result[2]).toBeCloseTo(1); // Now pointing along z-axis
      expect(magnitude3D(result)).toBeCloseTo(1); // Magnitude preserved
    });

    test("rotateY works correctly", () => {
      const v: ArrayVector3D = [1, 0, 0]; // Pointing along x-axis
      const result = rotateY3D(v, Math.PI / 2); // Rotate 90 degrees

      // Rotating [1,0,0] around Y axis by 90° should give [0,0,-1]
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(0);
      expect(result[2]).toBeCloseTo(-1); // Now pointing along negative z-axis
      expect(magnitude3D(result)).toBeCloseTo(1); // Magnitude preserved
    });

    test("rotateZ works correctly", () => {
      const v: ArrayVector3D = [1, 0, 0]; // Pointing along x-axis
      const result = rotateZ3D(v, Math.PI / 2); // Rotate 90 degrees

      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(1); // Now pointing along y-axis
      expect(result[2]).toBeCloseTo(0);
      expect(magnitude3D(result)).toBeCloseTo(1); // Magnitude preserved
    });

    test("rotateX with axis works correctly", () => {
      const v: ArrayVector3D = [0, 2, 1];
      const axis: ArrayVector3D = [0, 0, 0];
      const result = rotateX3D(v, Math.PI / 2, axis);

      // Rotation around origin should work
      expect(result[0]).toBeCloseTo(0);
      expect(magnitude3D(result)).toBeCloseTo(Math.sqrt(5)); // Magnitude preserved
    });

    test("rotateY with axis works correctly", () => {
      const v: ArrayVector3D = [2, 0, 1];
      const axis: ArrayVector3D = [0, 0, 0];
      const result = rotateY3D(v, Math.PI / 2, axis);

      expect(result[1]).toBeCloseTo(0);
      expect(magnitude3D(result)).toBeCloseTo(Math.sqrt(5)); // Magnitude preserved
    });

    test("rotateZ with axis works correctly", () => {
      const v: ArrayVector3D = [2, 1, 0];
      const axis: ArrayVector3D = [0, 0, 0];
      const result = rotateZ3D(v, Math.PI / 2, axis);

      expect(result[2]).toBeCloseTo(0);
      expect(magnitude3D(result)).toBeCloseTo(Math.sqrt(5)); // Magnitude preserved
    });
  });

  describe("reflection", () => {
    test("reflect works correctly", () => {
      const v: ArrayVector3D = [1, 1, 0];
      const normal: ArrayVector3D = [0, 1, 0]; // Horizontal surface normal
      const result = reflect3D(v, normal);

      expect(result[0]).toBeCloseTo(1);
      expect(result[1]).toBeCloseTo(-1); // Y component reflected
      expect(result[2]).toBeCloseTo(0);

      // Original unchanged
      expect(v[0]).toBe(1);
      expect(v[1]).toBe(1);
      expect(v[2]).toBe(0);
    });
  });

  describe("equality and validation methods", () => {
    test("isEqual works correctly", () => {
      const v1: ArrayVector3D = [3, 4, 5];
      const v2: ArrayVector3D = [3, 4, 5];
      const v3: ArrayVector3D = [3, 4, 6];

      expect(isEqual3D(v1, v2)).toBe(true);
      expect(isEqual3D(v1, v3)).toBe(false);
    });

    test("isEqualApprox works correctly", () => {
      const v1: ArrayVector3D = [1.0001, 2.0001, 3.0001];
      const v2: ArrayVector3D = [1.0002, 2.0002, 3.0002];

      expect(isEqualApprox3D(v1, v2, 0.001)).toBe(true);
      expect(isEqualApprox3D(v1, v2, 0.00001)).toBe(false);
    });

    test("isZero works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [0, 0.0001, 0];
      const v3: ArrayVector3D = [1, 0, 0];

      expect(isZero3D(v1)).toBe(true);
      expect(isZero3D(v2)).toBe(false);
      expect(isZero3D(v3)).toBe(false);
    });

    test("isOpposite works correctly", () => {
      const v1: ArrayVector3D = [3, 4, 5];
      const v2: ArrayVector3D = [-3, -4, -5];
      const v3: ArrayVector3D = [3, -4, -5];

      expect(isOpposite3D(v1, v2)).toBe(true);
      expect(isOpposite3D(v1, v3)).toBe(false);
    });

    test("isNaN works correctly", () => {
      const v1: ArrayVector3D = [NaN, 4, 5];
      const v2: ArrayVector3D = [3, NaN, 5];
      const v3: ArrayVector3D = [3, 4, 5];

      expect(isNaN3D(v1)).toBe(true);
      expect(isNaN3D(v2)).toBe(true);
      expect(isNaN3D(v3)).toBe(false);
    });

    test("isInfinite works correctly", () => {
      const v1: ArrayVector3D = [Infinity, 4, 5];
      const v2: ArrayVector3D = [3, Infinity, 5];
      const v3: ArrayVector3D = [3, 4, 5];

      expect(isInfinite3D(v1)).toBe(true);
      expect(isInfinite3D(v2)).toBe(true);
      expect(isInfinite3D(v3)).toBe(false);
    });
  });

  describe("interpolation", () => {
    test("lerp works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 0];
      const v2: ArrayVector3D = [4, 8, 12];

      const result1 = lerp3D(v1, v2, 0);
      expect(result1[0]).toBe(0);
      expect(result1[1]).toBe(0);
      expect(result1[2]).toBe(0);

      const result2 = lerp3D(v1, v2, 0.5);
      expect(result2[0]).toBe(2);
      expect(result2[1]).toBe(4);
      expect(result2[2]).toBe(6);

      const result3 = lerp3D(v1, v2, 1);
      expect(result3[0]).toBe(4);
      expect(result3[1]).toBe(8);
      expect(result3[2]).toBe(12);
    });
  });

  describe("angle calculations", () => {
    test("angleBetween works correctly", () => {
      const v1: ArrayVector3D = [1, 0, 0]; // Along x-axis
      const v2: ArrayVector3D = [0, 1, 0]; // Along y-axis
      const angle = angleBetween3D(v1, v2);

      expect(angle).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector3D = [-1, 0, 0]; // Opposite direction
      const angle2 = angleBetween3D(v1, v3);
      expect(Math.abs(angle2)).toBeCloseTo(Math.PI);
    });

    test("angleX works correctly", () => {
      const v1: ArrayVector3D = [1, 0, 0]; // Along x-axis
      expect(angleX3D(v1)).toBeCloseTo(0);

      const v2: ArrayVector3D = [0, 1, 0]; // Along y-axis
      expect(angleX3D(v2)).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector3D = [0, 0, 1]; // Along z-axis
      expect(angleX3D(v3)).toBeCloseTo(Math.PI / 2);
    });

    test("angleY works correctly", () => {
      const v1: ArrayVector3D = [0, 1, 0]; // Along y-axis
      expect(angleY3D(v1)).toBeCloseTo(0);

      const v2: ArrayVector3D = [1, 0, 0]; // Along x-axis
      expect(angleY3D(v2)).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector3D = [0, 0, 1]; // Along z-axis
      expect(angleY3D(v3)).toBeCloseTo(Math.PI / 2);
    });

    test("angleZ works correctly", () => {
      const v1: ArrayVector3D = [0, 0, 1]; // Along z-axis
      expect(angleZ3D(v1)).toBeCloseTo(0);

      const v2: ArrayVector3D = [1, 0, 0]; // Along x-axis
      expect(angleZ3D(v2)).toBeCloseTo(Math.PI / 2);

      const v3: ArrayVector3D = [0, 1, 0]; // Along y-axis
      expect(angleZ3D(v3)).toBeCloseTo(Math.PI / 2);
    });
  });
});
