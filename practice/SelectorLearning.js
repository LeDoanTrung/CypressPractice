
describe('Element interaction', () => {
    it('should be able to complete the form', () => {
        //Open the login form page
        cy.visit("/login")

        //find username by ID then input the text
        cy.get("#username").type("tomsmith")

        //find password by attribure name then input the text
        cy.get('[name="password"]').type("SuperSecretPassword!")

        //find login btn by atr and tag name then click
        cy.xpath('//button[@type="submit"]').click()

        //DEBUG ONLY
        cy.wait(3000)
    });
});
