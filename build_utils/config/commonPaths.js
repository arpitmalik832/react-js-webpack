const path = require('path');

const PROJECT_ROOT = path.resolve();

module.exports = {
  projectRootPath: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, 'src', 'index.js'),
  outputPath: path.join(PROJECT_ROOT, 'build'),
  outputHTMLPath: path.join(PROJECT_ROOT, 'build', 'index.html'),
  appEntryPath: path.join(PROJECT_ROOT, 'src'),
  scssPath: path.join(PROJECT_ROOT, 'src', 'scss', 'index.scss'),
};
