describe('Smoke test', () => {
  it('Makes sure the welcome message comes up', () => {
    cy.visit('http://localhost:1234')
      .contains('(nenhum restaurante adicionado ainda)');
  });
});
