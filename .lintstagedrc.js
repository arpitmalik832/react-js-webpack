module.exports = {
  '{src,public,.}**/*.{js,ts,jsx}': ['npm run fix-js', 'npm run fix-prettier'],
  '{src,public,.}**/*.{css,scss}': ['npm run fix-css', 'npm run fix-prettier'],
  '{src,public,.}**/*.json': ['npm run fix-prettier --parser json'],
  '{src,public,.}**/*.md': ['npm run fix-prettier --parser markdown'],
};
