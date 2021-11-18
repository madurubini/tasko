export const deleteCompletedTask = () => {
    cy.get(':nth-child(2) > .sc-hiwPVj > svg').click();
};

export const deleteCreatedTask = () => {
    cy.get('.sc-hiwPVj > :nth-child(2)').click();
};
