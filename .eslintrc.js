module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest/globals': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['import', 'jest'],
    'rules': {
        'strict': 0,
        'quotes': [2, 'single'],
        'no-else-return': 0,
        'new-cap': ['error', { 'capIsNewExceptions': ['Router'] }],
        'no-console': 0,
        'import/no-unresolved': [2, { 'caseSensitive': false }],
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
        'no-underscore-dangle': 0,
        'arrow-body-style': 0,
        'one-var': ['error', { 'uninitialized': 'always', 'initialized': 'never' }],
        'one-var-declaration-per-line': ['error', 'initializations'],
        'max-len': ['error', 200],
        'semi': ['error', 'always'],
        'no-extra-parens': 1,
        'no-restricted-syntax': [
            0,
            'DebuggerStatement'
        ],
        'no-debugger': 'warn',

        'linebreak-style': [0, 'unix'],
        'no-multiple-empty-lines': 0, // 1 empty line at the beginning of my files
        'no-trailing-spaces': 0,
        'indent': ['error', 4], // I prefer 4 spaces
        'brace-style': 0,  // I like to have closing braces on their own line for if-else
        'padded-blocks': 0, // for readability
        'no-use-before-define': 0 // for readability
    },
    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx'],
                'moduleDirectory': ['node_modules', 'src/']
            }
        }
    }
};
