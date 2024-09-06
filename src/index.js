import { SWRegistration } from '@arpitmalik832/react-js-rollup-monorepo-library';

import('./bootstrap').then(({ mount }) =>
  mount(document.getElementById('app')),
);

SWRegistration.register();

if (!__isRelease__) {
  import('@arpitmalik832/react-js-rollup-monorepo-library').then(
    ({ reportWebVitals: func }) => func(),
  );
}
