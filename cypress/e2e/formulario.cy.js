describe('Teste de formulário', () => {
  it('preenche e envia um formulário fictício', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-email').type('dara@exemplo.com');
    cy.get('.action-form').submit();
  });
});