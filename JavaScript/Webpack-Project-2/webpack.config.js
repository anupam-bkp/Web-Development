var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    entry: './src/js/app.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'
                ]

            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })      
    ]
};