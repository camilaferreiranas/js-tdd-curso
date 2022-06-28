const path = require('path');
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src'),
    mode: 'development',
    entry: {
        app: './main.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './example')
    },
    devServer: {
        static: path.resolve(__dirname, './example')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}