# EfficientToDo

- Webpack-dev-server, Webpack, Webpack-cli, Babel-loader, and Babel packages
```bash
npm install --save-dev webpack-dev-server webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin

```
#### To use React
```bash
npm install react react-dom
```
#### To use SASS (SCSS)
```bash
npm install --save-dev sass-loader sass style-loader css-loader sass-loader
```
#### ESLint
`.eslintrc.js`
* [Rules](https://eslint.org/docs/latest/rules/) in ESLint
* [Rules for React](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules) (eslint-plugin-react)
```bash
npm install --save-dev eslint eslint-plugin-react
```
#### Stylelint
`.stylelintrc.js`
* [Rules](https://stylelint.io/user-guide/rules/list) in ESLint
* [Rules for SCSS](https://github.com/stylelint-scss/stylelint-scss#list-of-rules) (stylelint-scss)
```bash
npm install --save-dev stylelint stylelint-declaration-block-no-ignored-properties stylelint-order stylelint-scss
```
To automatically check code using ESLint and Stylelint, to run them before each commit, we will use [Husky](https://typicode.github.io/husky/#/?id=manual) and lint-staged.
```bash
npm install --save-dev husky lint-staged
npx husky init
```
#### Оptimization
```bash
npm install css-minimizer-webpack-plugin  terser-webpack-plugin image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo --save-dev

```

* `npm run start` For local development with a hot reboot
* `npm run build` Assembly for production
* `npm run lint`  ESLint for JavaScript and JSX:
* `npm run lint:fix` For automatic error correction using ESLint
* `npm run stylelint` Stylelint for SCSS/CSS:
* `npm run stylelint:fix` For automatic correction of stylistic errors
