// Jest configuration
// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
  // Modules can be explicitly auto-mocked using jest.mock(moduleName).
  // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
  automock: false, // [boolean]
  // Respect Browserify's "browser" field in package.json when resolving modules.
  // https://facebook.github.io/jest/docs/en/configuration.html#browser-boolean
  // This config option can be used here to have Jest stop running tests after the first failure.
  // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
  bail: false, // [boolean]
  // The directory where Jest should store its cached dependency information.
  // https://facebook.github.io/jest/docs/en/configuration.html#cachedirectory-string
  // cacheDirectory: '/tmp/<path>', // [string]
  // Indicates whether the coverage information should be collected while executing the test.
  // Because this retrofits all executed files with coverage collection statements,
  // it may significantly slow down your tests.
  // https://facebook.github.io/jest/docs/en/configuration.html#collectcoverage-boolean
  // collectCoverage: false, // [boolean]
  // https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.{test,spec}.{js,jsx}',
    '!src/index.js',
    '!src/bootstrap.jsx',
    '!src/redux/**',
  ],
  // https://facebook.github.io/jest/docs/en/configuration.html#coveragedirectory-string
  coverageDirectory: '<rootDir>/coverage', // [string]
  coveragePathIgnorePatterns: ['node_modules'],
  // coverageReporters: [], // [array<string>]
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  // https://facebook.github.io/jest/docs/en/configuration.html#mapcoverage-boolean
  // mapCoverage: false, // [boolean]
  // The default extensions Jest will look for.
  // https://facebook.github.io/jest/docs/en/configuration.html#modulefileextensions-array-string
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleDirectories: ['node_modules'], // [array<string>]
  // A map from regular expressions to module names that allow to stub out resources,
  // like images or styles with a single module.
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
  // modulePathIgnorePatterns: // [array<string>]
  // modulePaths: // [array<string>]
  // notify: false, // [boolean]
  // preset: // [string]
  // projects: // [array<string>]
  // clearMocks: // [boolean]
  // reporters: // [array<moduleName | [moduleName, options]>]
  // resetMocks: // [boolean]
  // resetModules: // [boolean]
  // resolver: // [string]
  // rootDir: // [string]
  // roots: // [array<string>]
  // setupFiles: // [array]
  // setupTestFrameworkScriptFile: // [string]
  // snapshotSerializers: // [array<string>]
  // testEnvironment:'node',
  // testMatch: // [array<string>]
  // testPathIgnorePatterns: // [array<string>]
  testRegex: '/__tests__/[a-zA-Z0-9_]*.(test|spec).jsx?$',
  // testResultsProcessor: // [string]
  // testRunner: // [string]
  // timers: // [string]
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:3000/',
  },

  transform: {
    '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    // '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)':  '<rootDir>/tools/lib/fileTransformer.js',
  },
  // unmockedModulePathPatterns: // [array<string>]

  verbose: true, // [boolean],
  setupFiles: ['<rootDir>/setupTests.js'], // [testConfig files DOM,Mock]
};
