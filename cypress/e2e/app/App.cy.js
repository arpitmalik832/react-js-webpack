/**
 * App e2e tests.
 * @file The file is saved as `App.cy.js`.
 */
describe('app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('display header along with the button', () => {
    cy.get('[data-cy=button]').should('have.text', 'Button');
  });
});
