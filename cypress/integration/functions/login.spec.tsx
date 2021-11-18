export const login = () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Email"]').type('testman@mail.com');
    cy.get('input[placeholder="Senha"]').type('Myd3arP@ss');
    cy.contains('Entrar').click();

    cy.contains('Quests');
    cy.contains('Minhas Conquistas');
};
