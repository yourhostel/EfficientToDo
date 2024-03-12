module.exports = {
    "env": {
        "browser": true, // Додає глобальні змінні браузера, такі як window і document
        "es2021": true, // Визначає версію ECMAScript, яка використовуються
        "node": true // Якщо також використовуються Node.js
    },
    ignorePatterns: ['dist/', 'node_modules/', 'webpack.config.js', '.eslintrc.js'],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": ["error", "always"], // Вимагає використання === та !== замість == та !=
        "no-trailing-spaces": "error", // Визначає, що не повинно бути пробільних символів (пробілів або табуляції) в кінці рядків коду
        "react/no-array-index-key": "warn", // Попередження про використання індексу масиву як ключа до елементів списку
        "react/react-in-jsx-scope": "off", // Для React 17+ не потрібно імпортувати React у файли з JSX
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};