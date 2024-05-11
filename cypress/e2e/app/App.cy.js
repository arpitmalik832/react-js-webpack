describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('display header along with the button', () => {
    cy.get('[data-cy=header]').should('have.length', 1);
    cy.get('[data-cy=header]').should('have.text', 'Hello from React!');
    cy.get('[data-cy=button]').should('have.text', 'Button');
  });
});
