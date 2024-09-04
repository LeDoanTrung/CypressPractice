import DemoBlazeHomePage from "../../models/pages/DemoBlazeHomePage";

describe('Homepage Category Test', () => {
    beforeEach(()=>{
        cy.visit('/');
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
    })

    function verifyCategoryFilterBy(productName){
        cy.intercept('/bycat').as('cats')
        cy.get(`[onclick="byCat(\'${productName}\')"]`).click({force : true});
        cy.wait('@cats')
        cy.request({
            method: "POST",
            url: "https://api.demoblaze.com/bycat",
            body: {
                cat: `${productName}`
            }
        }).then(res =>{
            let apiCateData = res.body.Items.map(item => {
                return {
                    itemName: item.title.replace("\n",""),
                    itemPrice: `$${item.price}`
                }
            })
            cy.log(JSON.stringify(apiCateData))

            DemoBlazeHomePage.getAllCardData().then(allCard =>{
                cy.log(JSON.stringify(allCard))
                cy.wrap('').then(()=>{
                    expect(allCard).to.be.eql(apiCateData)
                })
            })
        })
    }

    const SCENARIOS = ["phone", "notebook" ,"monitor"]

    SCENARIOS.forEach(productName => {
        it(`Test ${productName} Category`, () => {
            verifyCategoryFilterBy(productName);
        });
    });


});