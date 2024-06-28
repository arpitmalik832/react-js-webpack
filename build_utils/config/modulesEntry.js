const { ENVS } = require('./index');

module.exports = env => {
  // let exampleUrl;
  let projUrl;

  switch (env) {
    case ENVS.PRODUCTION:
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
      break;
    case ENVS.BETA:
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
      break;
    case ENVS.STAGING:
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
      break;
    case ENVS.DEVELOPMENT:
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'http://localhost:3000/';
      break;
    default:
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
  }

  return {
    // EXAMPLE: exampleUrl,
    PROJ: projUrl,
  };
};
