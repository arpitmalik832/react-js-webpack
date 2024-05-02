const commonPaths = require('./build_utils/config/commonPaths');

module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/transform-runtime',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          ...commonPaths.alias,
        },
      },
    ],
  ],
};
