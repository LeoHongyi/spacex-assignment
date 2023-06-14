module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['react'],
  // 配置解析器支持的语法
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    // 每行最长字数
    'max-len': [1, 80],
    // 禁止 case 语句落空
    'no-fallthrough': [0],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
