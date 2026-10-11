import { describe, expect, it } from "vitest";
import { swizzle2D } from "./swizzle-2d.js";

describe("swizzle2D", () => {
  it("should provide single-character component getters and setters", () => {
    const v = swizzle2D([1, 2], ["x", "y"]);

    expect(v.x).toBe(1);
    expect(v.y).toBe(2);

    v.x = 10;
    v.y = 20;

    expect(v[0]).toBe(10);
    expect(v[1]).toBe(20);
    expect(v.x).toBe(10);
    expect(v.y).toBe(20);
  });

  it("should provide swizzle accessors including repeated components (xx, yy)", () => {
    const v = swizzle2D([3, 4], ["x", "y"]);

    expect(v.xx).toEqual([3, 3]);
    expect(v.xy).toEqual([3, 4]);
    expect(v.yx).toEqual([4, 3]);
    expect(v.yy).toEqual([4, 4]);

    v.xy = [5, 6];

    expect(v[0]).toBe(5);
    expect(v[1]).toBe(6);
    expect(v.xx).toEqual([5, 5]);
    expect(v.xy).toEqual([5, 6]);
    expect(v.yx).toEqual([6, 5]);
    expect(v.yy).toEqual([6, 6]);
  });

  it("should reject invalid parameters", () => {
    expect(() => swizzle2D([1, 2, 3] as any, ["x", "y"])).toThrow("Array must have 2 dimensions");
    expect(() => swizzle2D([1, 2], ["x"] as any)).toThrow("Keys must be two unique lowercase single characters");
    expect(() => swizzle2D([1, 2], ["X", "y"] as any)).toThrow("Keys must be two unique lowercase single characters");
    expect(() => swizzle2D([1, 2], ["x", "x"] as any)).toThrow("Keys must be two unique lowercase single characters");
  });
});
