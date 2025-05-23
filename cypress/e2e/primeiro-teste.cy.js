describe('Meu primeiro teste', () => {
  it('acessa o site do Google', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress{enter}');
  });
});