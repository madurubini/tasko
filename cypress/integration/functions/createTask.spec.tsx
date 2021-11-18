export const createTask = () => {
    cy.get('svg[class="sc-nVkyK bYTxVD"]').click();
    cy.contains('Adicione uma nova Quest!');
    cy.get('input[placeholder="Tirar o lixo..."]').type('Tarefa genérica');
    cy.contains('Adicionar Tarefa').click();
    cy.contains('Tarefa genérica');
    cy.contains('Completar').click();
    cy.contains('Finalizadas').click();
    cy.contains('Tarefa genérica');
};
