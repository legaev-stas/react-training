var path = require('path');

module.exports = {
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
                test: /\.css$/,
                loader: ['style-loader', 'postcss-loader']
            },
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: [/*'es2015', 'stage-2', */'react']
                },
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    }
};