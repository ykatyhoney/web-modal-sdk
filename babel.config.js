module.exports = function (api) {
  api.cache(true);

  return {
    "presets": [
      ["@babel/preset-env", { "targets": "> 0.25%", "useBuiltIns": "usage", "corejs": 3 }],
      ["@babel/preset-react", { "runtime": "automatic" }],
      ["@babel/preset-typescript", { "allExtensions": true, "isTSX": true }],

    ],
    "plugins": [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-class-properties",
      "@babel/plugin-transform-object-rest-spread"
    ]
  }
}