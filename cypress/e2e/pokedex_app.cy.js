describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Navigation works', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur-does-not-exist').click()

    cy.get('.pokemon-ability-name').should('contain', 'chlorophyll').and('have.css', 'text-transform', 'capitalize')
  })
})
