const path = require('path');

const PROJECT_ROOT = path.resolve();

module.exports = {
  projectRootPath: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, 'src', 'index.js'),
  outputPath: path.join(PROJECT_ROOT, 'build'),
  appEntryPath: path.join(PROJECT_ROOT, 'src'),
  assetsPath: path.join(PROJECT_ROOT, 'src', 'assets'),
  componentsPath: path.join(PROJECT_ROOT, 'src', 'components'),
  atomsPath: path.join(PROJECT_ROOT, 'src', 'components', 'atoms'),
  moleculesPath: path.join(PROJECT_ROOT, 'src', 'components', 'molecules'),
  organismsPath: path.join(PROJECT_ROOT, 'src', 'components', 'organisms'),
  configsPath: path.join(PROJECT_ROOT, 'src', 'configs'),
  contextsPath: path.join(PROJECT_ROOT, 'src', 'contexts'),
  enumsPath: path.join(PROJECT_ROOT, 'src', 'enums'),
  hooksPath: path.join(PROJECT_ROOT, 'src', 'hooks'),
  pagesPath: path.join(PROJECT_ROOT, 'src', 'pages'),
  queriesPath: path.join(PROJECT_ROOT, 'src', 'queries'),
  routesPath: path.join(PROJECT_ROOT, 'src', 'routes'),
  servicesPath: path.join(PROJECT_ROOT, 'src', 'services'),
  utilsPath: path.join(PROJECT_ROOT, 'src', 'utils'),
};
