module.exports = {
  prettier: true,
  svgo: true,
  exportType: 'named',
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
    ],
  },
  titleProp: true,
  ref: true,
  outputDir: 'dist/assets',
  icon: false,
};
