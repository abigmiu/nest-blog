module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'semi': ['error', 'always'],
        // "indent": ["error", 4],
        "quotes": ['error', 'single'],
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            args: 'none',
            ignoreRestSiblings: true,
        }],
        "vue/html-indent": ['error', 4]
    },
    "overrides": [
        {
            files: ['src/pages/index.vue', 'src/pages/**/index.vue'],   // 匹配views和二级目录中的index.vue
            rules: {
                'vue/multi-word-component-names': "off",
            }
        },
    ]
};
