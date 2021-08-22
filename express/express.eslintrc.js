module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        semi: [2, 'always'],
        camelcase: 0,
        'max-len': ['error', { code: 150, tabWidth: 4 }],
        'no-useless-constructor': 0,
        indent: ['error', 4, { SwitchCase: 1, flatTernaryExpressions: 0 }],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        '@typescript-eslint/no-unused-vars': 'warn',
    },
};
