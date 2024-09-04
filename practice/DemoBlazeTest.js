import DemoBlazeHomePage from "../../models/pages/DemoBlazeHomePage";
import products from "../../testData/products.json"

describe('DemoBlaze Homepage', () => {

    it('should be able to get all card data', () => {
        cy.visit('https://www.demoblaze.com/');
        DemoBlazeHomePage.getAllCardData().then(allCardData => {
            cy.wrap('').then(()=>{
                expect(allCardData).to.be.deep.eq(products)
            })
        })

    });

    it.only('Use API response to verify', () => {
        cy.visit('https://www.demoblaze.com/');

        //Intercept default homepage 
        cy.intercept('/entries').as('entries')
        cy.wait('@entries') //wait để chờ phản hồi từ phía server
        
        cy.get('@entries').then(entries => {
            let apiProductData = entries.response.body.Items 
            apiProductData= apiProductData.map(item => {
                return {
                    itemName: item.title.replace('\n',''),
                    itemPrice : `$${item.price}`
                }

            })
            
            DemoBlazeHomePage.getAllCardData().then(allCardData => {
                cy.wrap('').then(()=>{
                    expect(allCardData).to.be.deep.eq(apiProductData);
                })
            })
        })

    });
});