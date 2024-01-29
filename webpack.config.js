const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // entry: "./src/hello.js",
    entry: {
        // app: './src/index.js',
        client: [
            // '@babel/polyfill',
            './src/index.js'
        ],
        server: [
            // "@babel/polyfill",
            './src/server.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: [
                    //         [
                    //             "@babel/preset-env",
                    //             {
                    //                 "useBuiltIns": "entry",
                    //                 "corejs": "3.22",
                    //                 // "debug": true  //调试模式
                    //             }
                    //         ]
                    //     ],
                    //     // plugins: [
                    //     //     [
                    //     //         "@babel/plugin-proposal-decorators",
                    //     //         { "version": "2023-05" }
                    //     //     ],
                    //     //     require("@babel/plugin-transform-arrow-functions")
                    //     // ]
                    // }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.s[ac]ss/i,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    // "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[path][name].[ext]",
                            outputPath: 'image/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        // options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'client page',
            filename: 'client.html',
            hash: true,
            template: 'public/index-template.html',
            chunks: ['client']
        }),
        new HtmlWebpackPlugin({
            title: 'server page',
            filename: 'server.html',
            hash: true,
            template: 'public/index-template.html',
            chunks: ['server']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        })
    ],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'public'),
    //     },
    //     compress: true,
    //     port: 6000,
    //     client: {
    //         overlay: true
    //     }
    // },
    // devServer: {  //服务器
    //     static: {
    //         directory: path.join(__dirname, 'public'),
    //     },
    //     compress: true,
    //     port: 6000,
    //     client: {
    //         overlay: true,
    //     },
    // },
    mode: "development",
    // devtool: false
} 