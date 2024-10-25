describe('Pagina de login', () => {
  it('logar com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/html/index.html?')
    cy.get('#nome').type('Pedrinho')
    cy.get('#senha').type('Senha123')
    cy.get('#botao').click()
    cy.get('#titulo').contains("DASHBOARD")
  })
})