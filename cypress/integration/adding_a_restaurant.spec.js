const NOVO_RESTAURANTE = 'Sushi Place';
const ERRO_NOME_EM_BRANCO = 'Digite o nome do restaurante.';

describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    cy.visit('http://localhost:1234');

    modalNaoEhExibido();
    modalPodeSerCancelado();
    campoNewRestaurantNameTemFocoQuandoAberto();
    modalPermiteAdicionarNovoRestaurante(NOVO_RESTAURANTE);
    modalNaoPermiteAdicionarRestauranteEmBranco();
  });

  const modalNaoEhExibido = () => {
    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');
  };

  const modalPodeSerCancelado = () => {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type("{esc}");

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');
  };

  const campoNewRestaurantNameTemFocoQuandoAberto = () => {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.focused().should('have.attr', 'id', 'newRestaurantNameId');

    cy.get('[data-test="newRestaurantName"]')
      .type("{esc}");
  };

  const modalPermiteAdicionarNovoRestaurante = (nomeRestaurante) => {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(nomeRestaurante);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.exist');

    cy.contains(nomeRestaurante);
  };

  const modalNaoPermiteAdicionarRestauranteEmBranco = () => {
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantNameError"]')
      .contains(ERRO_NOME_EM_BRANCO);

    cy.get('[data-test="newRestaurantName"]')
      .type("{esc}");
  };
});
