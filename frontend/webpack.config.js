//taken from https://blog.logrocket.com/how-to-use-svgs-in-react/

const webpack = require('webpack');

module.exports = {
  entry: './pages/index.tsx',
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
