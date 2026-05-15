export default {
  groups: [
    {
      name: "Bundle",
      include: "bundles/bundle.js",
    },
    {
      name: "Functional",
      include: "bundles/fn*d.js",
    },
    {
      name: "Classes",
      include: "bundles/vec*.js",
    },
  ],
  minify: true,
};
