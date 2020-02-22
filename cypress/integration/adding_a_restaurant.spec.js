const NOVO_RESTAURANTE = 'Sushi Place'

describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    
    cy.visit('http://localhost:1234');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(NOVO_RESTAURANTE);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.contains(NOVO_RESTAURANTE);
  });
});