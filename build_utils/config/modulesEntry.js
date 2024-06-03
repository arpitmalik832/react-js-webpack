/**
 * @description Returns the project URLs based on the environment.
 * @param {string} env The environment.
 * @returns {object} The project URLs.
 * @example modulesEntry('production');
 */
module.exports = env => {
  // let exampleUrl;
  let projUrl;

  switch (env) {
    case 'production':
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
      break;
    case 'beta':
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
      break;
    case 'staging':
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
      break;
    case 'development':
      // exampleUrl = 'https://exmaple.com/';
      projUrl = 'https://proj-url.com/';
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
