const webpack = require('webpack');

const settings = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(txt|jpg|png|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: '',
              emitFile: true,
              name: '[path][name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: '/icons/[name].[ext]',
            limit: 10240,
          },
        },
      },
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ENV': JSON.stringify(process.env.ENV),
        __CLIENT__: true,
      }),
    );
    return config;
  },
};

module.exports = settings;
