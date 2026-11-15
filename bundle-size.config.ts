export default {
  groups: [
    {
      name: "Bundles",
      include: ["bundles/bundle.js", "bundles/vector*.js"],
    },
    {
      name: "Functional",
      include: "bundles/array*d.js",
    },
    {
      name: "Base Vec Classes",
      include: "bundles/Vec*.js",
    },
    {
      name: "Proxy Vec Classes",
      include: "bundles/*Proxy*.js",
    },
  ],
  minify: true,
};
