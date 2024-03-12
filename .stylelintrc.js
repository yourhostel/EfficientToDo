module.exports = {
    "ignorePatterns": ["dist/", "node_modules/"],
    "extends": "stylelint-config-recommended-scss",
    "plugins": [
        "stylelint-scss",
        "stylelint-declaration-block-no-ignored-properties",
        "stylelint-order"
    ],
    "rules": {
        "color-hex-length": "short", // Вказує використовувати короткий запис hex-колір, де це можливо
        "property-no-unknown": true, // Забороняє невідомі властивості
        "block-no-empty": true, // Забороняє порожні блоки
        "selector-pseudo-element-no-unknown": true, // Забороняє невідомі псевдо-елементи
        "declaration-block-no-duplicate-properties": true, // Забороняє дублювання властивостей усередині блоку оголошення
        "selector-pseudo-class-no-unknown": true, // Забороняє невідомі псевдокласи
        "no-descending-specificity": null, // Вимикає правило про заборону селекторів із специфічністю, що зменшується.
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-order": ["width", "height"], // Приклад порядку властивостей
    }
};