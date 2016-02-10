module.exports = function (plugin) {
  plugin = plugin.bind(null, require);

  return {
    plugins: [
      plugin("babel-plugin-transform-es2015-template-literals"),
      plugin("babel-plugin-transform-es2015-literals"),
      plugin("babel-plugin-transform-es2015-function-name"),
      plugin("babel-plugin-transform-es2015-arrow-functions"),
      plugin("babel-plugin-transform-es2015-block-scoped-functions"),
      plugin("babel-plugin-transform-es2015-classes"),
      plugin("babel-plugin-transform-es2015-object-super"),
      plugin("babel-plugin-transform-es2015-shorthand-properties"),
      plugin("babel-plugin-transform-es2015-computed-properties"),
      plugin("babel-plugin-transform-es2015-for-of"),
      plugin("babel-plugin-transform-es2015-sticky-regex"),
      plugin("babel-plugin-transform-es2015-unicode-regex"),
      plugin("babel-plugin-check-es2015-constants"),
      plugin("babel-plugin-transform-es2015-spread"),
      plugin("babel-plugin-transform-es2015-parameters"),
      plugin("babel-plugin-transform-es2015-destructuring"),
      plugin("babel-plugin-transform-es2015-block-scoping"),
      plugin("babel-plugin-transform-es2015-typeof-symbol"),
      plugin("babel-plugin-transform-es2015-modules-commonjs"),
      plugin("babel-plugin-transform-regenerator", { async: false, asyncGenerators: false }),
    ]
  };
}

module.exports.plugins = [
  require("babel-plugin-transform-es2015-template-literals"),
  require("babel-plugin-transform-es2015-literals"),
  require("babel-plugin-transform-es2015-function-name"),
  require("babel-plugin-transform-es2015-arrow-functions"),
  require("babel-plugin-transform-es2015-block-scoped-functions"),
  require("babel-plugin-transform-es2015-classes"),
  require("babel-plugin-transform-es2015-object-super"),
  require("babel-plugin-transform-es2015-shorthand-properties"),
  require("babel-plugin-transform-es2015-computed-properties"),
  require("babel-plugin-transform-es2015-for-of"),
  require("babel-plugin-transform-es2015-sticky-regex"),
  require("babel-plugin-transform-es2015-unicode-regex"),
  require("babel-plugin-check-es2015-constants"),
  require("babel-plugin-transform-es2015-spread"),
  require("babel-plugin-transform-es2015-parameters"),
  require("babel-plugin-transform-es2015-destructuring"),
  require("babel-plugin-transform-es2015-block-scoping"),
  require("babel-plugin-transform-es2015-typeof-symbol"),
  require("babel-plugin-transform-es2015-modules-commonjs"),
  [require("babel-plugin-transform-regenerator"), { async: false, asyncGenerators: false }],
];
