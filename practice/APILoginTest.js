const { HomePageAPI } = require("../../support/HomePageAPI");
const DemoBlazeHomePage = require("../../models/pages/DemoBlazeHomePage");


describe('Login with API not UI', () => {

    let apiProduct

    beforeEach(() =>{
        cy.login('tun', 'admin')
        cy.visit('https://www.demoblaze.com/')
        HomePageAPI.getHomePageProducts().then(entries => apiProduct = entries)
    })

    it('Should be able to login with API', () => {
            let apiProductData = apiProduct.response.body.Items.map(item =>{
                return {
                    itemName: item.title.replace('\n',''),
                    itemPrice: `$${item.price}`
                }
            })

             DemoBlazeHomePage.getAllCardData().then(allcardData => {
                cy.wrap('').then(()=>{
                    expect(allcardData).to.be.deep.eq(apiProductData)
                })
            })
    })
});