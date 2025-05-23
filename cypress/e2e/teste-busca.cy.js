describe('Busca no DuckDuckGo', () => {
  it('deve buscar por Cypress.io e encontrar o site oficial', () => {
    cy.visit('https://duckduckgo.com') // abre o site
    cy.get('input[name="q"]').type('Cypress.io{enter}') // digita no campo e aperta Enter
    cy.contains('https://www.cypress.io').should('exist') // verifica se o link do Cypress aparece
  })
})
