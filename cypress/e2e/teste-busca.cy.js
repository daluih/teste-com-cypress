describe('Busca no DuckDuckGo', () => {
  it('deve buscar por Cypress.io e encontrar o site oficial', () => {
    cy.visit('https://duckduckgo.com/');
    cy.get('input[name="q"]').type('Cypress.io{enter}');
    cy.contains('cypress.io', { timeout: 10000 }).should('be.visible');
  });
});
