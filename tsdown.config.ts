import { defineConfig, type UserConfig } from "tsdown";

const entryPoints = {
  bundle: "src/index.ts",
  array2d: "src/array-2d/index.ts",
  array3d: "src/array-3d/index.ts",
  array4d: "src/array-4d/index.ts",
  vector2d: "src/2d/index.ts",
  vector3d: "src/3d/index.ts",
  vector4d: "src/4d/index.ts",
  Vec2: "src/2d/vec2.ts",
  Vec3: "src/3d/vec3.ts",
  Vec4: "src/4d/vec4.ts",
  ArrayProxyVec2: "src/2d/array-proxy-vec2.ts",
  ArrayProxyVec3: "src/3d/array-proxy-vec3.ts",
  ArrayProxyVec4: "src/4d/array-proxy-vec4.ts",
  ProxyVec2: "src/2d/array-proxy-vec2.ts",
  ProxyVec3: "src/3d/array-proxy-vec3.ts",
  ProxyVec4: "src/4d/array-proxy-vec4.ts",
};

const commonConfig: UserConfig = {
  platform: "browser",
  format: ["esm"],
  target: "es2022",
  dts: true,
  treeshake: true,
  outDir: "bundles",
  inputOptions: {
    optimization: {
      inlineConst: false,
    },
    experimental: {
      attachDebugInfo: "none",
    },
  },
};

export default defineConfig(
  Object.entries(entryPoints).map(([key, entry]) => ({
    entry: {
      [key]: entry,
    },
    ...commonConfig,
  })),
);
