const NOVO_RESTAURANTE = 'Sushi Place';

describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    cy.visit('http://localhost:1234');

    // modal nao eh exibido
    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    // modal pode ser cancelado
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type("{esc}");

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    // adicionando novo restaurante
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(NOVO_RESTAURANTE);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.contains(NOVO_RESTAURANTE);
  });
});
