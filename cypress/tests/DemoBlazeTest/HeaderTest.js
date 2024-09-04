import HeaderComponent from "../../models/components/HeaderComponent";
import expectedResult from "../../testData/nav_bar.json"

describe('Header Component test', () => {
    const BRAND_TEXT = 'PRODUCT STORE'
    let header;

    beforeEach(() => {
        cy.visit('/');
        header = new HeaderComponent();
    })

    it('Test for brand logo', () => {
        header.brandLogo().should('be.visible')
        header.brandLogo().should('contain.text',BRAND_TEXT)
    });

    it('Test for header menu', () => {
        // const expectedResult = [{
        //     "text":"Home (current)","href":"index.html"},
        //     {"text":"Contact","href":"#"},
        //     {"text":"About us","href":"#"},
        //     {"text":"Cart","href":"cart.html"},
        //     {"text":"Log in","href":"#"},
        //     {"text":"Sign up","href":"#"}]
        
        
        header.getMenuDetail().then($actualResult => {
           cy.wrap('').then(()=>{
            expect($actualResult).to.be.deep.equal(expectedResult)
           })

        })
    });
});