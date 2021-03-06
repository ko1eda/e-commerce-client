module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ["prettier", "prettier/standard", "plugin:vue/recommended"],
  // required to lint *.vue files
  plugins: ["vue", "prettier"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "semi" : ["error"],
    "quotes": ["error", "single"],
    "vue/max-attributes-per-line": "off",
    // "prettier/prettier": ["error", { "semi": true }]
  }
}

