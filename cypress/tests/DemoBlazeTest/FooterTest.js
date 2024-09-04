import FooterComponent from "../../models/components/FooterComponent";
import expectedResult from "../../testData/footerComp.json";

describe('Footer Component test', () => {
    let footerComp;

    beforeEach(() => {
        cy.visit('/');
        footerComp = new FooterComponent();
    })

    it('Test for About Us footer', () => {
        footerComp.getAboutUsData().then($actualData => {
            cy.log('Actual Data:', $actualData);
            cy.wrap('').then(()=> {
                expect($actualData).to.equal(expectedResult)
            });
        })

        
    });


    it.only('Test for Contact Us footer', () => {

        footerComp.getContactUsData().then($actualData => {
            cy.log('Contact Us Data:', $actualData);
            // cy.wrap('').then(()=> {
            //     expect($actualData).to.equal(expectedResult)
            // });
        })

        
    });

});