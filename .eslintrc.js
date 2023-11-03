module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // 禁止使用 console
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 禁止使用 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 禁止变量定义未使用
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    // 禁止空代码块
    "no-empty": ["warn", { "allowEmptyCatch": true }],
    // 禁止访问原型属性
    "no-prototype-builtins": "off",
    // 函数括号前的空格
    "space-before-function-paren": ["off", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
    // vue 限制多词组件名称
    "vue/multi-word-component-names": "off",
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": "off",
    "no-undef": 0
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
