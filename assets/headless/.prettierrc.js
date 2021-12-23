module.exports = {
    $schema: 'http://json.schemastore.org/prettierrc',
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
