module.exports = {
  '{src,public,build_utils,.}/**/*.{js,ts,jsx}': [
    'npm run fix-js',
    'npm run fix-prettier',
  ],
  '{src,public,build_utils,.}/**/*.{css,scss}': [
    'npm run fix-css',
    'npm run fix-prettier',
  ],
  '{src,public,build_utils,.}/**/*.json': [
    'npm run fix-prettier --parser json',
  ],
  '{src,public,build_utils,.}/**/*.md': [
    'npm run fix-prettier --parser markdown',
  ],
};
