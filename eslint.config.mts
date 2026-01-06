import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // База JS-рекомендаций
  pluginJs.configs.recommended,

  // JS-файлы в src
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      semi: "error",
      "no-unused-vars": ["error", { args: "none" }],
      "no-undef": "error",
    },
  },

  // TS-рекомендации
  ...tseslint.configs.recommended,

  // TS-файлы в src (по желанию: отдельный блок под правила)
  {
    files: ["src/**/*.{ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
    // Можно добавить TS-правила сюда, если понадобится
    rules: {},
  },
];
