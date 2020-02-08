var path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    // entry: {
    //   demo:"../../../Batch5/Day17/ES6/src/ClassDemo/demo.js",
    //   main:"../../../Batch5/Day17/ES6/src/ClassDemo/main.js"
    // },
    mode:"production", // development production
    entry:[
        //"../OO/src/Class/classTushar.js",
       // "../OO/src/Class/main.js"


        "../OO/src/Oops/Models/customerModel.js",
        "../OO/src/Oops/Models/salesModel.js",
        "../OO/src/Oops/Abstractions/salesAbstraction.js",
        "../OO/src/Oops/BussinessLogics/silverCustomer.js",
        "../OO/src/Oops/BussinessLogics/goldCustomer.js",
        "../OO/src/Oops/BussinessLogics/platinumCustomer.js",
        "../OO/src/Oops/BussinessLogics/customerContext.js",

        "../OO/src/Oops/Controllers/salesController.js",
        "../OO/src/Oops/Views/index.html"

        

    ],
    output: {
        publicPath: "./dist/",
        path: path.join(__dirname, "./dist/"),
        //filename: "[name].build.js",
        filename:"build.js",
        library: 'appGlobal'
    },
    module: {
        rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            //{test:/\.css?$/,loaders: ['style-loader', 'css-loader']}
             {
                 test: /\.css$/,
                 use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it uses publicPath in webpackOptions.output
                      publicPath: '../ES6/dist/',
                      hmr: process.env.NODE_ENV === 'development'
                      //minimize:true
                    },
                  },
                  'css-loader',
                ]
              }
        ]
   },
   resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js",".jsx",".json"]
   },
   plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};
