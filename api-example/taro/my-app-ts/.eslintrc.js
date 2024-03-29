module.exports = {
  extends: ["taro/react"],
  settings: { react: { version: "detect" } },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    "react/sort-comp": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "off", // <--- THIS IS THE NEW RULE
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-closing-bracket-location": "off",
    // (x) => {} 箭头函数参数只有一个时是否要有小括号。
    "arrow-parens": "off",
    // for in 中必须有if判断 比如判断hasOwnProperty
    "guard-for-in": "error",
    // error; 结尾必须有分号
    semi: [2, "always"],
    // 禁止在函数的 ( 前面有空格。存在async () => 这种问题，所以干掉这个
    "space-before-function-paren": "off",
    "no-unused-vars": "off",
    // 规定逗号后面必须添加空格
    "comma-spacing": ["error", { before: false, after: true }],
    // 缩进字节数 // case 子句将相对于 switch 语句缩进 2 个空格。
    // indent: ['error', 2, { SwitchCase: 1 }],
    // 字符串最大长度
    "max-len": "off",
    // 字面量属性不严格使用""号
    "quote-props": ["error", "as-needed"],
    // 允许在空行使用空白符\允许在注释块中使用空白符
    "no-trailing-spaces": [
      "error",
      { skipBlankLines: true, ignoreComments: true },
    ],
    // 允许使用常量表达式 if(true)
    "no-constant-condition": "off",
    // 使用单引号代替双引号 | 允许字符串使用``
    quotes: ["error", "single", { allowTemplateLiterals: true }],
    "no-unused-expressions": "off",
    // 允许单行中不使用大括号 if(true) xxx
    curly: ["error", "multi-line"],
    // 这禁止掉 空格报错检查
    "no-irregular-whitespace": "off",
    // 使用驼峰命名
    camelcase: "off",
    /** 不检查JSX属性中引用""用法 */
    "jsx-quotes": ["off", "prefer-single"],
    //es6 模块 -------------------
    // 关闭校验commonjs
    "import/no-commonjs": ["off"],
    // 导出可变的“let”绑定时，请改用“const”。 https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": ["off"],
    // 不校验import顺序
    "import/first": ["off"],
    // error; 箭头函数的箭头前后必须有空格
    "arrow-spacing": [2, { before: true, after: true }],
    // error; 禁止import重复模块
    "no-duplicate-imports": 2,
    // error; 要求使用 let 或 const 而不是 var
    "no-var": "error",
    // 非空文件末尾至少存在一行空行（或缺少换行）off 不用
    "eol-last": ["off"],
    // 关于引入的顺序，这玩意有点智障，关了
    "import/order": ["off"],
    // 允许使用obj["a"]和obj.a的模式
    "dot-notation": ["off"],
    // react 模块 ------------------ https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    // 不需要使用displayName
    "react/display-name": "off",
    // https://eslint.org/docs/rules/no-shadow
    "no-shadow": "off",
    // ts 模块 --------------------- https://github.com/typescript-eslint/typescript-eslint/tree/v2.34.0/packages/eslint-plugin/docs/rules
    // 未使用的参数
    "@typescript-eslint/no-unused-vars": ["off"],
    // 返回值没必要，比如生命周期就没必要加void
    "@typescript-eslint/explicit-function-return-type": ["off"],
  },
};
