# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## NOTES

- Folder Structure
  src folder
- components folder
  --> Contains reuseable components
- pages folder
  --> Contains components that should be displayed when a user visits a particular route

- Manually adding the 'Header' to all three pages would be really tedious!
- Root Layout shows components that are common to each page

1. Get details on a specific package
   -> registry.npmjs.org/<package name>

2. Search for packages
   -> registry.npmjs.org/-/v1/search?text=react

- We aren't going to use Redux on this project
  ->
  We are going to fetch data through data through React Router
  ->
  Small project? Consider fetching with React Router Medium/Big Use Redux

# Improved Folder Structure

src folder

- api folder

  - queries folder
    - getPackages.ts
      -> Functions to get packages for the details page
    - searchPackages.ts
      -> Contains a function to make the actual API request
  - types folder
    - packageSummary.ts
      -> Interface that describes what a 'PackageDetails' object is
    - packageSummary.ts
      -> Defines the 'PackageSummary' interface

- pages folder
  - details folder -> Details Page + Loader
    - detailLoader.ts
    - DetailPage.tsx
  - search folder
    - searchLoader.ts file
      -> Uses the 'searchPackages' function to fetch data
    - SearchPage.tsx file
