import { describe, expect, test } from "vitest"; // or your preferred testing framework

import { Vec2 } from "./vec2.js";

describe("Vec2", () => {
  describe("constructor variations", () => {
    test("default constructor creates a zero vector", () => {
      const v = new Vec2();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.magnitude).toBe(0);
    });

    test("constructor with single parameter sets both x and y to same value", () => {
      const v = new Vec2(5);
      expect(v.x).toBe(5);
      expect(v.y).toBe(5);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(50)); // √(5² + 5²)
    });

    test("constructor with two parameters", () => {
      const v = new Vec2(3, 4);
      expect(v.x).toBe(3);
      expect(v.y).toBe(4);
      expect(v.magnitude).toBe(5);
    });
  });

  describe("static factory methods", () => {
    test("fromArray creates vector correctly", () => {
      const v1 = Vec2.fromArray([3, 4]);
      expect(v1.x).toBe(3);
      expect(v1.y).toBe(4);

      const v2 = Vec2.fromArray([5]); // Partial array
      expect(v2.x).toBe(5);
      expect(v2.y).toBe(0);

      const v3 = Vec2.fromArray([]); // Empty array
      expect(v3.x).toBe(0);
      expect(v3.y).toBe(0);
    });

    test("fromObject creates vector correctly", () => {
      const v = Vec2.fromObject({ x: 2, y: 4 });
      expect(v.x).toBe(2);
      expect(v.y).toBe(4);
    });

    test("fromJSON creates vector correctly", () => {
      const v = Vec2.fromJSON({ x: 3, y: 6 });
      expect(v.x).toBe(3);
      expect(v.y).toBe(6);
    });

    test("fromPolarCoords creates vector correctly", () => {
      const v1 = Vec2.fromPolarCoords(1, 0); // Unit vector along x-axis
      expect(v1.x).toBeCloseTo(1);
      expect(v1.y).toBeCloseTo(0);

      const v2 = Vec2.fromPolarCoords(1, Math.PI / 2); // Unit vector along y-axis
      expect(v2.x).toBeCloseTo(0);
      expect(v2.y).toBeCloseTo(1);

      const v3 = Vec2.fromPolarCoords(5, Math.PI); // Vector along negative x-axis
      expect(v3.x).toBeCloseTo(-5);
      expect(v3.y).toBeCloseTo(0);
    });

    test("zero creates zero vector", () => {
      const v = Vec2.zero();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.magnitude).toBe(0);
      expect(v.isZero()).toBe(true);
    });

    test("one creates vector with all components as 1", () => {
      const v = Vec2.one();
      expect(v.x).toBe(1);
      expect(v.y).toBe(1);
      expect(v.magnitude).toBeCloseTo(Math.sqrt(2));
    });

    test("random creates unit vector", () => {
      const v = Vec2.random();
      expect(v.magnitude).toBeCloseTo(1);

      // Test with custom random function
      const v2 = Vec2.random(() => 0.5);
      expect(v2.magnitude).toBeCloseTo(1);
    });
  });

  describe("basic vector operations - instance methods", () => {
    test("add method works correctly", () => {
      const v1 = new Vec2(1, 2);
      const v2 = new Vec2(3, 4);
      const result = v1.add(v2);

      expect(result).toBe(v1); // Should return this for chaining
      expect(v1.x).toBe(4);
      expect(v1.y).toBe(6);
    });

    test("subtract method works correctly", () => {
      const v1 = new Vec2(5, 7);
      const v2 = new Vec2(2, 3);
      const result = v1.subtract(v2);

      expect(result).toBe(v1);
      expect(v1.x).toBe(3);
      expect(v1.y).toBe(4);
    });

    test("multiply method works correctly", () => {
      const v1 = new Vec2(2, 3);
      const v2 = new Vec2(4, 5);
      const result = v1.multiply(v2);

      expect(result).toBe(v1);
      expect(v1.x).toBe(8);
      expect(v1.y).toBe(15);
    });

    test("divide method works correctly", () => {
      const v1 = new Vec2(8, 15);
      const v2 = new Vec2(2, 3);
      const result = v1.divide(v2);

      expect(result).toBe(v1);
      expect(v1.x).toBe(4);
      expect(v1.y).toBe(5);
    });

    test("divide by zero returns infinity", () => {
      const v1 = new Vec2(5, 10);
      const v2 = new Vec2(0, 2);
      v1.divide(v2);

      expect(v1.x).toBe(Number.POSITIVE_INFINITY);
      expect(v1.y).toBe(5);
    });

    test("scale method works correctly", () => {
      const v = new Vec2(3, 4);
      const result = v.scale(2);

      expect(result).toBe(v);
      expect(v.x).toBe(6);
      expect(v.y).toBe(8);
      expect(v.magnitude).toBe(10);
    });

    test("normalize method works correctly", () => {
      const v = new Vec2(3, 4);
      const originalMagnitude = v.magnitude;
      const result = v.normalize();

      expect(result).toBe(v);
      expect(v.magnitude).toBeCloseTo(1);
      expect(v.x).toBeCloseTo(3 / originalMagnitude);
      expect(v.y).toBeCloseTo(4 / originalMagnitude);
    });

    test("negate method works correctly", () => {
      const v = new Vec2(3, -4);
      const result = v.negate();

      expect(result).toBe(v);
      expect(v.x).toBe(-3);
      expect(v.y).toBe(4);
    });
  });

  describe("basic vector operations - static methods", () => {
    test("static add works correctly", () => {
      const v1 = new Vec2(1, 2);
      const v2 = new Vec2(3, 4);
      const result = Vec2.add(v1, v2);

      expect(result.x).toBe(4);
      expect(result.y).toBe(6);

      // Original vectors unchanged
      expect(v1.x).toBe(1);
      expect(v1.y).toBe(2);
      expect(v2.x).toBe(3);
      expect(v2.y).toBe(4);
    });

    test("static subtract works correctly", () => {
      const v1 = new Vec2(5, 7);
      const v2 = new Vec2(2, 3);
      const result = Vec2.subtract(v1, v2);

      expect(result.x).toBe(3);
      expect(result.y).toBe(4);

      // Original vectors unchanged
      expect(v1.x).toBe(5);
      expect(v2.x).toBe(2);
    });

    test("static multiply works correctly", () => {
      const v1 = new Vec2(2, 3);
      const v2 = new Vec2(4, 5);
      const result = Vec2.multiply(v1, v2);

      expect(result.x).toBe(8);
      expect(result.y).toBe(15);
    });

    test("static divide works correctly", () => {
      const v1 = new Vec2(8, 15);
      const v2 = new Vec2(2, 3);
      const result = Vec2.divide(v1, v2);

      expect(result.x).toBe(4);
      expect(result.y).toBe(5);
    });

    test("static scale works correctly", () => {
      const v = new Vec2(3, 4);
      const result = Vec2.scale(v, 2);

      expect(result.x).toBe(6);
      expect(result.y).toBe(8);

      // Original unchanged
      expect(v.x).toBe(3);
      expect(v.y).toBe(4);
    });

    test("static normalize works correctly", () => {
      const v = new Vec2(3, 4);
      const result = Vec2.normalize(v);

      expect(result.magnitude).toBeCloseTo(1);
      expect(result.x).toBeCloseTo(0.6);
      expect(result.y).toBeCloseTo(0.8);

      // Original unchanged
      expect(v.magnitude).toBe(5);
    });

    test("static negate works correctly", () => {
      const v = new Vec2(3, -4);
      const result = Vec2.negate(v);

      expect(result.x).toBe(-3);
      expect(result.y).toBe(4);

      // Original unchanged
      expect(v.x).toBe(3);
      expect(v.y).toBe(-4);
    });
  });

  describe("dot and cross products", () => {
    test("dot product - instance method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(2, 1);
      const dot = v1.dot(v2);

      expect(dot).toBe(10); // 3*2 + 4*1 = 10
    });

    test("dot product - static method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(2, 1);
      const dot = Vec2.dot(v1, v2);

      expect(dot).toBe(10);
    });

    test("cross product - instance method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(2, 1);
      const cross = v1.cross(v2);

      expect(cross).toBe(-5); // 3*1 - 4*2 = -5
    });

    test("cross product - static method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(2, 1);
      const cross = Vec2.cross(v1, v2);

      expect(cross).toBe(-5);
    });
  });

  describe("distance calculations", () => {
    test("distance - instance method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = v1.distance(v2);

      expect(distance).toBe(5);
    });

    test("distance - static method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = Vec2.distance(v1, v2);

      expect(distance).toBe(5);
    });

    test("distanceSq - instance method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distanceSq = v1.distanceSq(v2);

      expect(distanceSq).toBe(25);
    });

    test("distanceSq - static method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distanceSq = Vec2.distanceSq(v1, v2);

      expect(distanceSq).toBe(25);
    });

    test("distanceChebyshev - instance method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = v1.distanceChebyshev(v2);

      expect(distance).toBe(4); // max(|3-0|, |4-0|) = 4
    });

    test("distanceChebyshev - static method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = Vec2.distanceChebyshev(v1, v2);

      expect(distance).toBe(4);
    });

    test("distanceManhattan - instance method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = v1.distanceManhattan(v2);

      expect(distance).toBe(7); // |3-0| + |4-0| = 7
    });

    test("distanceManhattan - static method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = Vec2.distanceManhattan(v1, v2);

      expect(distance).toBe(7);
    });

    test("distanceMinkowski - instance method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = v1.distanceMinkowski(v2, 2);

      expect(distance).toBeCloseTo(5); // Same as Euclidean for p=2
    });

    test("distanceMinkowski - static method", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(3, 4);
      const distance = Vec2.distanceMinkowski(v1, v2, 2);

      expect(distance).toBeCloseTo(5);
    });
  });

  describe("vector manipulation methods", () => {
    test("clamp method works correctly", () => {
      const v = new Vec2(3, 4); // magnitude = 5
      const result = v.clamp(2, 10);

      expect(result).toBe(v);
      expect(v.magnitude).toBe(5); // Should be unchanged as it's within range

      v.clamp(6, 10);
      expect(v.magnitude).toBeCloseTo(6);

      const v2 = new Vec2(12, 16); // magnitude = 20
      v2.clamp(2, 10);
      expect(v2.magnitude).toBeCloseTo(10);
    });

    test("limitMax method works correctly", () => {
      const v = new Vec2(6, 8); // magnitude = 10
      const result = v.limitMax(5);

      expect(result).toBe(v);
      expect(v.magnitude).toBeCloseTo(5);
      expect(v.x).toBeCloseTo(3);
      expect(v.y).toBeCloseTo(4);

      // Test when already under limit
      v.limitMax(10);
      expect(v.magnitude).toBeCloseTo(5); // Should be unchanged
    });

    test("limitMin method works correctly", () => {
      const v = new Vec2(1.5, 2); // magnitude = 2.5
      const result = v.limitMin(5);

      expect(result).toBe(v);
      expect(v.magnitude).toBeCloseTo(5);

      // Test when already above limit
      v.limitMin(2);
      expect(v.magnitude).toBeCloseTo(5); // Should be unchanged
    });

    test("lookAt method works correctly", () => {
      const v = new Vec2(5, 0); // magnitude = 5, pointing right
      const target = new Vec2(0, 3); // pointing up
      const result = v.lookAt(target);

      expect(result).toBe(v);
      expect(v.magnitude).toBeCloseTo(5); // Magnitude preserved
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(5); // Now pointing up
    });

    test("project method works correctly", () => {
      const v = new Vec2(3, 4);
      const onto = new Vec2(1, 0); // Unit vector along x-axis
      const result = v.project(onto);

      expect(result).toBe(v);
      expect(v.x).toBeCloseTo(3); // Projection onto x-axis
      expect(v.y).toBeCloseTo(0);
    });

    test("random method works correctly", () => {
      const v = new Vec2(3, 4); // magnitude = 5
      const originalMagnitude = v.magnitude;
      const result = v.random();

      expect(result).toBe(v);
      expect(v.magnitude).toBeCloseTo(originalMagnitude); // Magnitude preserved
    });
  });

  describe("rotation methods", () => {
    test("rotateZ method works correctly", () => {
      const v = new Vec2(1, 0); // Unit vector along x-axis
      const result = v.rotateZ(Math.PI / 2); // Rotate 90 degrees

      expect(result).toBe(v);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(1); // Now pointing up
      expect(v.magnitude).toBeCloseTo(1); // Magnitude preserved
    });

    test("turnLeft method works correctly", () => {
      const v = new Vec2(1, 0); // Pointing right
      const result = v.turnLeft();

      expect(result).toBe(v);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(1); // Now pointing up
    });

    test("turnRight method works correctly", () => {
      const v = new Vec2(1, 0); // Pointing right
      const result = v.turnRight();

      expect(result).toBe(v);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(-1); // Now pointing down
    });
  });

  describe("reflection", () => {
    test("reflect - instance method", () => {
      const v = new Vec2(1, 1);
      const normal = new Vec2(0, 1); // Horizontal surface normal
      const result = v.reflect(normal);

      expect(result).not.toBe(v); // Returns new vector
      expect(result.x).toBeCloseTo(1);
      expect(result.y).toBeCloseTo(-1); // Y component reflected
    });

    test("reflect - static method", () => {
      const v = new Vec2(1, 1);
      const normal = new Vec2(0, 1); // Horizontal surface normal
      const result = Vec2.reflect(v, normal);

      expect(result.x).toBeCloseTo(1);
      expect(result.y).toBeCloseTo(-1);

      // Original unchanged
      expect(v.x).toBe(1);
      expect(v.y).toBe(1);
    });
  });

  describe("utility methods", () => {
    test("clone creates independent copy", () => {
      const v1 = new Vec2(3, 4);
      const v2 = v1.clone();

      expect(v2).not.toBe(v1);
      expect(v2.x).toBe(3);
      expect(v2.y).toBe(4);

      v1.x = 10;
      expect(v2.x).toBe(3); // v2 should be unchanged
    });

    test("copy method works correctly", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(1, 2);
      const result = v2.copy(v1);

      expect(result).toBe(v2);
      expect(v2.x).toBe(3);
      expect(v2.y).toBe(4);
    });

    test("zero method resets vector", () => {
      const v = new Vec2(3, 4);
      const result = v.zero();

      expect(result).toBe(v);
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
      expect(v.magnitude).toBe(0);
      expect(v.isZero()).toBe(true);
    });

    test("equals method with epsilon", () => {
      const v1 = new Vec2(1.0001, 2.0001);
      const v2 = new Vec2(1.0002, 2.0002);

      expect(v1.equals(v2, 0.001)).toBe(true);
      expect(v1.equals(v2, 0.00001)).toBe(false);
    });

    test("static equals method with epsilon", () => {
      const v1 = new Vec2(1.0001, 2.0001);
      const v2 = new Vec2(1.0002, 2.0002);

      expect(Vec2.equals(v1, v2, 0.001)).toBe(true);
      expect(Vec2.equals(v1, v2, 0.00001)).toBe(false);
    });

    test("satisfyEquality method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(3, 4);
      const v3 = new Vec2(3, 5);

      expect(v1.satisfyEquality(v2)).toBe(true);
      expect(v1.satisfyEquality(v3)).toBe(false);
    });

    test("static satisfyEquality method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(3, 4);
      const v3 = new Vec2(3, 5);

      expect(Vec2.satisfyEquality(v1, v2)).toBe(true);
      expect(Vec2.satisfyEquality(v1, v3)).toBe(false);
    });

    test("satisfyOpposition method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(-3, -4);
      const v3 = new Vec2(3, -4);

      expect(v1.satisfyOpposition(v2)).toBe(true);
      expect(v1.satisfyOpposition(v3)).toBe(false);
    });

    test("static satisfyOpposition method", () => {
      const v1 = new Vec2(3, 4);
      const v2 = new Vec2(-3, -4);
      const v3 = new Vec2(3, -4);

      expect(Vec2.satisfyOpposition(v1, v2)).toBe(true);
      expect(Vec2.satisfyOpposition(v1, v3)).toBe(false);
    });
  });

  describe("interpolation", () => {
    test("static lerp method works correctly", () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(4, 8);

      const result1 = Vec2.lerp(v1, v2, 0);
      expect(result1.x).toBe(0);
      expect(result1.y).toBe(0);

      const result2 = Vec2.lerp(v1, v2, 0.5);
      expect(result2.x).toBe(2);
      expect(result2.y).toBe(4);

      const result3 = Vec2.lerp(v1, v2, 1);
      expect(result3.x).toBe(4);
      expect(result3.y).toBe(8);

      // Test clamping
      const result4 = Vec2.lerp(v1, v2, 1.5);
      expect(result4.x).toBe(4);
      expect(result4.y).toBe(8);
    });
  });

  describe("iteration and conversion", () => {
    test("vector is iterable", () => {
      const v = new Vec2(3, 4);
      const components = [...v];
      expect(components).toEqual([3, 4]);
    });

    test("toObject returns correct object", () => {
      const v = new Vec2(3, 4);
      const obj = v.toObject();
      expect(obj).toEqual({ x: 3, y: 4 });
    });

    test("toString returns correct string representation", () => {
      const v = new Vec2(3, 4);
      expect(v.toString()).toBe("Vec2(3, 4)");
    });

    test("toJSON returns correct JSON representation", () => {
      const v = new Vec2(3, 4);
      const json = v.toJSON();
      expect(json).toEqual({ x: 3, y: 4 });
    });
  });

  describe("angle calculations", () => {
    test("static angleBetween method", () => {
      const v1 = new Vec2(1, 0); // Along x-axis
      const v2 = new Vec2(0, 1); // Along y-axis
      const angle = Vec2.angleBetween(v1, v2);

      expect(angle).toBeCloseTo(Math.PI / 2);

      const v3 = new Vec2(-1, 0); // Opposite direction
      const angle2 = Vec2.angleBetween(v1, v3);
      expect(Math.abs(angle2)).toBeCloseTo(Math.PI);
    });

    test("angleBetween instance method", () => {
      const v1 = new Vec2(1, 0);
      const v2 = new Vec2(0, 1);
      const angle = v1.angleBetween(v2);

      expect(angle).toBeCloseTo(Math.PI / 2);
    });
  });
});
