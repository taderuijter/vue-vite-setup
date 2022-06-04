/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  "rules": {
    "indent": ["error", 2],
    'no-multi-spaces': ['error'],
    'vue/multi-word-component-names': 'off',
    "one-var": [2, "always"],
    "semi": [2, "always"]
  }
};
