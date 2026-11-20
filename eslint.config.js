
export default [
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "site/**"
        ]
    },
    {
        files: ["**/*.js", "**/*.mjs"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];
