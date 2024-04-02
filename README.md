# Next Level Week

**Warning**: In the original project, Diego uses Tailwind, but we'll use Styled Components.

**Warning**: The React folder is using Bun for an experimental version of this project.

Why Styled Components instead of Tailwind? Because I prefer the flexibility of Styled Components over the utility-first approach of Tailwind.

Why Styled Components instead of Tailwind? Because I prefer the flexibility of Styled Components over the utility-first approach of Tailwind and
because I hate the template of CSS to use a class style inside a div or component.

What's this Project?

This is a project for Next Level Week, where we created a website using React, Vite, and TypeScript to manage an event.

In the backend, we are using Node.js.

## Technologies in React (in this project)
- React
- Vite
- TypeScript
- Styled Components
- Bun
- Unicons

## Technologies in Node (in this project)

<p align="center">
  <img src="https://github.com/Yagasaki7K/website-nlwunite/assets/23272064/f1d68ca4-749a-4c44-b76a-3aad2691d8c5"/>
  <img src="https://github.com/Yagasaki7K/website-nlwunite/assets/23272064/a02f5843-c702-46cb-b0a7-6698dc819185"/>
</p>

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
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
