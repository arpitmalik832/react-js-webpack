import('./bootstrap').then(({ mount }) =>
  mount(document.getElementById('app')),
);

if (!__isRelease__) {
  import('./utils/reportWebVitals').then(({ default: func }) => func());
}
