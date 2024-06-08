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
