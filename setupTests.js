/**
 * @description Sets the object URL for an image.
 * @param {object} img The image object.
 * @returns {object} The image object.
 * @example window.URL.createObjectURL(img);
 */
window.URL.createObjectURL = img => img;

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
