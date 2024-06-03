/**
 * @description mock for window.matchMedia
 * @param {object} query refers to the media query
 * @param {boolean} matches refers to the query matches state
 * @returns {object} mocked window.matchMedia
 * @example matchMediaMock(query, true)
 */
const matchMediaMock = (query, matches) => ({
  matches,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

export default matchMediaMock;
