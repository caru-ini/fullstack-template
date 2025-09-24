/** @type {import("prettier").Options} */
const config = {
  printWidth: 100,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  endOfLine: "lf",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
  tailwindFunctions: ["cn"],
};

export default config;
