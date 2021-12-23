module.exports = {
    root: true,
    // https://eslint.org/docs/rules/no-undef#nodejs
    env: {
        node: true,
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    parser: 'vue-eslint-parser',
    // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:jest/recommended',
        'prettier',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
