import SWRegistration from './services/SWRegistration';

import('./bootstrap').then(({ mount }) =>
  mount(document.getElementById('app')),
);

SWRegistration.register();

if (!__isRelease__) {
  import('./utils/reportWebVitals').then(({ default: func }) => func());
}
