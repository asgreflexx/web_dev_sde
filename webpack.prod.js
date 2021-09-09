const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    // 1
    // Use the src/index.scripts file as entry point to bundle it.
    // If the src/index.scripts file imports other JS files,
    // bundle them as well
    entry: [
      path.resolve(__dirname, './src/index.js'),
      path.resolve(__dirname, './src/scripts/about.js'),
      path.resolve(__dirname, './src/scripts/doggos.js'),
      path.resolve(__dirname, './src/scripts/home.js'),
    ],
    module: {
      // configuration regarding modules
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/, // files to exclude
          use: ['babel-loader', 'eslint-loader'],
        },
        // CSS and SASS
        {
          test: /\.(scss|css)$/,  // load files that end with scss and css
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/',
                publicPath: 'img/',
              }
            }
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: path.resolve(__dirname, 'src/index.html'),
        },
      ],
    },
    // 2
    // The bundles source code files shall result in a bundle.scripts file
    // in the /dist folder
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    // 3
    // The /dist folder will be used to serve our application
    // to the browser
    devServer: {
      static: path.resolve(__dirname, './dist'),
    },

    // 4
    // Add plugins for webpack here
    plugins: [
        //new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
        title: "Basic Webpack Setup",
        template: path.resolve(__dirname, './src/index.html'),
        })
  ]
  };
