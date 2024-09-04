describe('Explore default command time out', () => {
    it('should be able to custom default timeout', () => {
        cy.visit('https://the-internet.herokuapp.com');
        //cy.get('a[href="/login"]').click();
        cy.contains('Form Authentication').click();
        cy.location('pathname',{timeout: 500}).should('eq','/login');
    });



});