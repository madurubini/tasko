import {
    deleteCompletedTask,
    deleteCreatedTask,
} from './functions/deleteTask.spec';
import { login } from './functions/login.spec';

context('task CRUD', () => {
    it('should be able to post and complete a task', () => {
        login();
        cy.get('svg[class="sc-nVkyK bYTxVD"]').click();
        cy.contains('Adicione uma nova Quest!');
        cy.get('input[placeholder="Tirar o lixo..."]').type(
            'Hmm bolho de murango',
        );
        cy.contains('Adicionar Tarefa').click();
        cy.contains('Hmm bolho de murango');
        cy.contains('Completar').click();
        deleteCreatedTask();
    });

    it('should be able to edit a task', () => {
        login();

        cy.get('svg[class="sc-nVkyK bYTxVD"]').click();
        cy.contains('Adicione uma nova Quest!');
        cy.get('input[placeholder="Tirar o lixo..."]').type(
            'Hmm bolho de murango',
        );
        cy.contains('Adicionar Tarefa').click();
        cy.contains('Hmm bolho de murango');
        cy.get('.sc-hiwPVj > :nth-child(1)').click();
        cy.get('.sc-jUosCB').select('Médio');
        cy.contains('Salvar Atualizações').click();
        cy.contains('Medium');

        cy.contains('Completar').click();
        deleteCreatedTask();
    });

    it('should be able to delete a task', () => {
        login();

        cy.get('svg[class="sc-nVkyK bYTxVD"]').click();
        cy.contains('Adicione uma nova Quest!');
        cy.get('input[placeholder="Tirar o lixo..."]').type(
            'Hmm bolho de murango',
        );
        cy.contains('Adicionar Tarefa').click();
        cy.contains('Hmm bolho de murango');
        deleteCreatedTask();
    });
});

context('tasks check', () => {
    it('should be check completed tasks', () => {
        login();
        cy.get('svg[class="sc-nVkyK bYTxVD"]').click();
        cy.contains('Adicione uma nova Quest!');
        cy.get('input[placeholder="Tirar o lixo..."]').type('Tarefa genérica');
        cy.contains('Adicionar Tarefa').click();
        cy.contains('Tarefa genérica');
        cy.contains('Completar').click();
        cy.contains('Finalizadas').click();
        cy.contains('Tarefa genérica');
        deleteCompletedTask();
    });
});
