import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser
      },
    }
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      "vue/no-unused-components": "warn",
      "vue/require-v-for-key": "error",

      "vue/define-macros-order": ["error", { order: ["defineProps", "defineEmits", "defineExpose", "withDefaults"] }],
      "vue/no-unused-properties": ["error", {
        groups: ["props", "data", "computed", "methods", "setup"],
      }],
      "vue/no-empty-component-block": "error",

      "require-await": "warn",
      "no-console": "warn",
      "no-duplicate-imports": "error",
      "no-debugger": "error",
      "no-unreachable": "error",
      "no-undef": "error",
      "no-var": "error",
      "no-unused-vars": "error",
      "prefer-const": "error",
      "eqeqeq": ["error", "always"]
    }
  },
  eslintConfigPrettier
]);
