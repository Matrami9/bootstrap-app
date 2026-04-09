const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const globals = require("globals"); 

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
});

module.exports = [
    js.configs.recommended,
    ...compat.extends("google"),
    {
        languageOptions: {
            globals: {
                ...globals.node, 
            },
        },
        rules: {
            "valid-jsdoc": "off",
            "require-jsdoc": "off",
            "max-len": ["error", { "code": 120 }] 
        },
    },
];