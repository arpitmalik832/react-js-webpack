module.exports = {
  '**/*.{mjs,cjs,js,jsx,mdx}': [
    'npm run lint-js:fix',
    'npm run prettier:fix -- "**/*.{mjs,cjs,js,jsx,mdx}"',
  ],
  '**/*.{css,scss}': [
    'npm run lint-css:fix',
    'npm run prettier:fix -- "**/*.{css,scss}"',
  ],
  '**/*.json': ['npm run prettier:fix -- "**/*.json" --parser json'],
  '**/*.md': ['npm run prettier:fix -- "**/*.md" --parser markdown'],
};
