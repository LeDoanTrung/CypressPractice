import DemoBlazeHomePage from "../../models/pages/DemoBlazeHomePage";
import {HomePageAPI} from "../../support/HomePageAPI";

describe('BeforeEach function', () => {

    let apiProduct

    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
        HomePageAPI.getHomePageProducts().then(entries => apiProduct = entries)
    })

    it('Using beforeEach', () => {
        cy.log(JSON.stringify(apiProduct))

        let apiProductData = apiProduct.response.body.Items.map(item => {
                return {
                    itemName: item.title.replace('\n',''),
                    itemPrice : '$${item.price}'
                }

            })
            
            DemoBlazeHomePage.getAllCardData().then(allCardData => {
                cy.wrap('').then(()=>{
                    expect(allCardData).to.be.deep.eq(apiProductData);
                })
            })
    });
});