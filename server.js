const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const commonPaths = require('./build_utils/config/commonPaths');
const logs = require('./build_utils/config/logs');

const app = express();
const port = 8080;

// TODO: Move to Utils
// function serveWithNoCacheHeaders(file, res) {
//   const filePath = path.join(__dirname, file);
//   res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//   res.header('Expires', '-1');
//   res.header('Pragma', 'no-cache');
//   res.sendFile(filePath);
// }

app.set('ETag', 'strong');

app.use(
  '/',
  expressStaticGzip(commonPaths.outputPath, {
    urlContains: 'static/',
    setHeaders: res => res.setHeader('Cache-Control', 'private, max-age=60'),
  }),
);

// app.get('/workers/sharedWorker.js', (_, res) => {
//   serveWithNoCacheHeaders(
//     path.join(__dirname, 'build', 'workers/sharedWorker.js'),
//     res,
//   );
// });

app.get('/*', (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(`${commonPaths.outputPath}/index.html`);
});

app.listen(port, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(logs.SERVER_STARTED_SUCCESSFULLY(port));
});
