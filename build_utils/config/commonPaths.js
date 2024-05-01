import path from 'path';

const PROJECT_ROOT = path.resolve();

export default {
  projectRootPath: PROJECT_ROOT,
  entryPath: path.join(PROJECT_ROOT, 'src', 'index.js'),
  outputPath: path.join(PROJECT_ROOT, 'build'),
  appEntryPath: path.join(PROJECT_ROOT, 'src'),
  buildUtilsPath: path.join(PROJECT_ROOT, 'build_utils'),
};
