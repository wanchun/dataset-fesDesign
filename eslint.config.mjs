import antfu from '@antfu/eslint-config';

export default antfu({
    rules: {
        'no-console': 'off',
        'style/indent': ['error', 4],
        'style/semi': ['error', 'always'], // 强制使用分号
        'no-case-declarations': 'off',
        'no-template-curly-in-string': 'off',
    },
});
