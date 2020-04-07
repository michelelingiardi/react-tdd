const NOVO_RESTAURANTE = 'Sushi Place';
const ERRO_NOME_EM_BRANCO = 'Digite o nome do restaurante.';

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

    // campo newRestaurantName esta com foco quando modal eh aberto
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.focused().should('have.attr', 'id', 'newRestaurantNameId');

    // modal permite adicionar novo restaurante
    cy.get('[data-test="newRestaurantName"]')
      .type(NOVO_RESTAURANTE);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.contains(NOVO_RESTAURANTE);

    // modal nao permite adicionar restaurante em branco
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantNameError"]')
      .contains(ERRO_NOME_EM_BRANCO);
  });
});
