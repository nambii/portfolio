import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output:{
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                  path.join(__dirname, 'node_modules')
                ],
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server')

                ],
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
            },
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'public/css'),
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'node_modules')
                ],
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                include: [
                    path.join(__dirname, 'client/images'),
                ],
                loader: ['url-loader?limit=8192']
            }


        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
      template: 'server/index.html',
      hash: false,
    })

    ],
    resolve: {
        extensions: ['','.js']

    },
    node: {
        net: 'empty',
        dns: 'empty',
        fs: 'empty',
        child_process: 'empty'
    }
}
