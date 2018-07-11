const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV === 'development';

const prodPlugins = [
    new UglifyJsPlugin()
];

const basicPlugins = [
    new CleanWebpackPlugin('src/public/dist'),
    new ExtractTextPlugin('style.css')
];


module.exports = {
    entry: {
        main: path.join(__dirname, './src/public/js/index.js'),
        room: path.join(__dirname, './src/public/js/room.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/public/dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: devMode ? basicPlugins : basicPlugins.concat(prodPlugins)
};