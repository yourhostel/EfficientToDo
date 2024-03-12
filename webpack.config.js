const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: (pathData) => {           //'img/[hash][ext][query]' якщо потрібно всі зображення
            return pathData.filename.replace('src/', ''); // в одну папку не зберігаючи ієрархію
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, // виключає всі файли, що знаходяться в папці node_modules
                use: {
                    loader: 'babel-loader', // зв'язок між Webpack і Babel
                    options: { // Транспіляція необхідна для перетворення сучасного JavaScript (ES6, ESNext)
                        // і JSX у код, сумісний із більш старими браузерами.
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.scss$/, // Додає правило для обробки файлів .scss
                use: [
                    'style-loader', // Додає стилі в DOM за допомогою тега <style>
                    'css-loader', // Інтерпретує @import і url() як import/require() і вирішує їх
                    'sass-loader' // Компілює SCSS в CSS
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource', // Використання asset modules для обробки зображень
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ImageMinimizerPlugin({ // Оптимізація зображень
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        "imagemin-gifsicle",
                        "imagemin-mozjpeg",
                        "imagemin-pngquant",
                        "imagemin-svgo",
                    ],
                },
            },
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), // Мінімізація CSS
            new TerserPlugin(), // Мінімізація JS
        ],
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Встановлення режиму збірки
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map', // Налаштування source maps
};

