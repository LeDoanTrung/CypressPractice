const DROPDOWN_SEL = "select[id='dropdown']"

describe('Dropdown handling', () => {
    it('Should be able to select dropdown options', () => {
        //Visit page
        cy.visit('/dropdown');

        //Select opt 1 by index
        cy.get(DROPDOWN_SEL).select(1)

        //Select opt 2 by value
        cy.get(DROPDOWN_SEL).select("2");

        //Select by visible text 
        cy.get(DROPDOWN_SEL).select("Option 1");


        //Verify the selected option
        cy.get("select option[selected='selected']").invoke("text").should("eq", "Option 1")
    });
});