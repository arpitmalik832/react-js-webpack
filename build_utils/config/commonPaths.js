const path = require('path');

const PROJECT_ROOT = path.resolve();

module.exports = {
  projectRootPath: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, 'src', 'index.js'),
  outputPath: path.join(PROJECT_ROOT, 'build'),
  outputHTMLPath: path.join(PROJECT_ROOT, 'build', 'index.html'),
  appEntryPath: path.join(PROJECT_ROOT, 'src'),
  alias: {
    '@assets': path.join(PROJECT_ROOT, 'src', 'assets'),
    '@components': path.join(PROJECT_ROOT, 'src', 'components'),
    '@atoms': path.join(PROJECT_ROOT, 'src', 'components', 'atoms'),
    '@molecules': path.join(PROJECT_ROOT, 'src', 'components', 'molecules'),
    '@organisms': path.join(PROJECT_ROOT, 'src', 'components', 'organisms'),
    '@configs': path.join(PROJECT_ROOT, 'src', 'configs'),
    '@contexts': path.join(PROJECT_ROOT, 'src', 'contexts'),
    '@enums': path.join(PROJECT_ROOT, 'src', 'enums'),
    '@hooks': path.join(PROJECT_ROOT, 'src', 'hooks'),
    '@pages': path.join(PROJECT_ROOT, 'src', 'pages'),
    '@queries': path.join(PROJECT_ROOT, 'src', 'queries'),
    '@routes': path.join(PROJECT_ROOT, 'src', 'routes'),
    '@services': path.join(PROJECT_ROOT, 'src', 'services'),
    '@utils': path.join(PROJECT_ROOT, 'src', 'utils'),
  },
};
