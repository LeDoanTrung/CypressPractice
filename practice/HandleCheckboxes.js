const CHECKBOXES_SEL = '[type="checkbox"]'

describe('Handling Checkboxes', () => {
    it('should be able tô select/ unselect a checkbox', () => {
        cy.visit('/checkboxes');

        //try to unselect the 2nd checkbox
        cy.get(CHECKBOXES_SEL).eq(1).click();

        //Verify all checkboxes are unselected
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should("have.length",2);

        //Loop over all checkboxes and select all
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").then(item => {
            cy.get(item).click()
        })

    }); 
});