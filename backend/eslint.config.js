import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    {
        languageOptions: { globals: globals.browser },
        rules: {
            eqeqeq: ["error", "always"],
            camelcase: ["error", { properties: "always" }],
            semi: ["error", "always"],
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];