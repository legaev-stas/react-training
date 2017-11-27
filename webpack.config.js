var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname,
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'www', 'build'),
        filename: 'bundle.js'
    },

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: false,
        port: 9000,
        hot: true
    },

    module: {
        loaders: [
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'postcss-loader']
            },
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                },
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    }
};