describe('Выбор страны', function() {
    it('Флаг страны получен', function() {
        cy.visit('http://localhost:8080');

        cy.get('.list').select('RU');//.should("deep.equal", "Russian Federation");

        cy.get('#flag').should('have.attr', 'src', "https://www.countryflags.io/RU/flat/64.png");
    })
  })

  describe('test2', function() {
    it('Flag recived!', function() {
        cy.visit('http://localhost:8080');

        cy.get('.list').select('AO').contains('Angola');

       // cy.get('#flag').should.not('have.attr', 'src', "https://www.countryflags.io/RU/flat/64.png");
    })
  })