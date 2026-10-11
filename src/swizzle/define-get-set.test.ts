import { describe, expect, it } from "vitest";
import { defineGetSet } from "./define-get-set";

describe("defineGetSet", () => {
  it("should define a getter and setter on an object", () => {
    let internalValue = "initial";
    const obj: any = {};

    const result = defineGetSet(
      obj,
      "value",
      () => internalValue,
      (val: string) => {
        internalValue = val;
      },
    );

    expect(result).toBe(obj);
    expect(obj.value).toBe("initial");

    obj.value = "updated";
    expect(internalValue).toBe("updated");
    expect(obj.value).toBe("updated");
  });

  it("should allow setter to transform or validate input", () => {
    let storedNumber = 0;
    const obj: any = {};

    defineGetSet(
      obj,
      "clamped",
      () => storedNumber,
      (val: number) => {
        storedNumber = Math.max(0, Math.min(100, val));
      },
    );

    obj.clamped = 150;
    expect(obj.clamped).toBe(100);

    obj.clamped = -50;
    expect(obj.clamped).toBe(0);

    obj.clamped = 42;
    expect(obj.clamped).toBe(42);
  });

  it("should set property as enumerable", () => {
    const obj: any = {};
    defineGetSet(
      obj,
      "prop",
      () => 1,
      () => {},
    );

    expect(Object.keys(obj)).toContain("prop");
  });

  describe("Vector facade proxying Float32Array directly", () => {
    interface Vector3 {
      x: number;
      y: number;
      z: number;
      readonly buffer: Float32Array;
    }

    function createVector3(x = 0, y = 0, z = 0): Vector3 {
      const buffer = new Float32Array([x, y, z]);
      const vec = { buffer } as Vector3;

      defineGetSet(
        vec,
        "x",
        () => buffer[0],
        (val: number) => {
          buffer[0] = val;
        },
      );
      defineGetSet(
        vec,
        "y",
        () => buffer[1],
        (val: number) => {
          buffer[1] = val;
        },
      );
      defineGetSet(
        vec,
        "z",
        () => buffer[2],
        (val: number) => {
          buffer[2] = val;
        },
      );

      return vec;
    }

    it("should read initial values directly from Float32Array buffer", () => {
      const vec = createVector3(1.5, 2.5, 3.5);

      expect(vec.x).toBeCloseTo(1.5);
      expect(vec.y).toBeCloseTo(2.5);
      expect(vec.z).toBeCloseTo(3.5);
      expect(vec.buffer[0]).toBeCloseTo(1.5);
      expect(vec.buffer[1]).toBeCloseTo(2.5);
      expect(vec.buffer[2]).toBeCloseTo(3.5);
    });

    it("should write values through property accessors into the Float32Array buffer", () => {
      const vec = createVector3();

      vec.x = 10.25;
      vec.y = -20.5;
      vec.z = 30.75;

      expect(vec.buffer[0]).toBeCloseTo(10.25);
      expect(vec.buffer[1]).toBeCloseTo(-20.5);
      expect(vec.buffer[2]).toBeCloseTo(30.75);

      expect(vec.x).toBeCloseTo(10.25);
      expect(vec.y).toBeCloseTo(-20.5);
      expect(vec.z).toBeCloseTo(30.75);
    });

    it("should reflect direct mutations to the underlying Float32Array buffer", () => {
      const vec = createVector3(0, 0, 0);

      vec.buffer[0] = 100.5;
      vec.buffer[1] = 200.25;
      vec.buffer[2] = -300.125;

      expect(vec.x).toBeCloseTo(100.5);
      expect(vec.y).toBeCloseTo(200.25);
      expect(vec.z).toBeCloseTo(-300.125);
    });

    it("should support in-place arithmetic operators through get/set proxying", () => {
      const vec = createVector3(10, 20, 30);

      vec.x += 5;
      vec.y *= 2;
      vec.z -= 15;

      expect(vec.x).toBeCloseTo(15);
      expect(vec.y).toBeCloseTo(40);
      expect(vec.z).toBeCloseTo(15);

      expect(vec.buffer[0]).toBeCloseTo(15);
      expect(vec.buffer[1]).toBeCloseTo(40);
      expect(vec.buffer[2]).toBeCloseTo(15);
    });

    it("should maintain independent buffers across multiple vector instances", () => {
      const vecA = createVector3(1, 2, 3);
      const vecB = createVector3(10, 20, 30);

      vecA.x = 99;
      expect(vecA.x).toBeCloseTo(99);
      expect(vecB.x).toBeCloseTo(10);
      expect(vecA.buffer[0]).toBeCloseTo(99);
      expect(vecB.buffer[0]).toBeCloseTo(10);
    });

    it("should work with shared Float32Array buffer offsets (e.g. matrix/buffer view)", () => {
      // A single Float32Array backing multiple vectors
      const sharedBuffer = new Float32Array(6); // holds 2 Vector3s
      const createViewVector = (offset: number): Vector3 => {
        const vec = { buffer: sharedBuffer } as Vector3;
        defineGetSet(
          vec,
          "x",
          () => sharedBuffer[offset],
          (v) => {
            sharedBuffer[offset] = v;
          },
        );
        defineGetSet(
          vec,
          "y",
          () => sharedBuffer[offset + 1],
          (v) => {
            sharedBuffer[offset + 1] = v;
          },
        );
        defineGetSet(
          vec,
          "z",
          () => sharedBuffer[offset + 2],
          (v) => {
            sharedBuffer[offset + 2] = v;
          },
        );
        return vec;
      };

      const v1 = createViewVector(0);
      const v2 = createViewVector(3);

      v1.x = 1;
      v1.y = 2;
      v1.z = 3;

      v2.x = 4;
      v2.y = 5;
      v2.z = 6;

      expect(Array.from(sharedBuffer)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(v1.x).toBe(1);
      expect(v2.z).toBe(6);
    });
  });
});
