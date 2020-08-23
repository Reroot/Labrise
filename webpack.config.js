var HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require("path");

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
    resolve: {
        extensions: ['.js', '.jsx', 'css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }
}