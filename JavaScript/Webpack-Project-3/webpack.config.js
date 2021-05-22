var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

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

            },

            {
                test: /\.html$/i,
                loader: 'html-loader'
            },

            {
                test: /\./,
                use: [
                    {

                    }
                ]
            }
        ]
    },

    plugins: [
        
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        
        new CleanWebpackPlugin(),


    ]
};