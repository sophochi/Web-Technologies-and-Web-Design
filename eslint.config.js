export default [
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "site/**"
        ]
    },

    {
        files: [
            "**/*.js",
            "**/*.mjs"
        ],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly",
                document: "readonly",
                window: "readonly",
                localStorage: "readonly",
                fetch: "readonly",
                URL: "readonly"
            }
        },

        rules: {
            "no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],

            "no-undef": "error",
            "no-console": "off"
        }
    }
];
