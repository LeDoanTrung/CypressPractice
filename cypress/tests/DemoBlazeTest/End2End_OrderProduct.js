import { HomePageAPI } from "../../support/HomePageAPI";


describe('Order product test', () => {

    const LOGIN_ACCOUNT = {
        username: "tun",
        password: "admin"
    }

    beforeEach(() => {
        cy.visit('/');
    })

    it('Order item as guest', () => {
        purchaseItem();
    });

    it('Order item as logged user', () => {
        //Login
        cy.login(LOGIN_ACCOUNT.username, LOGIN_ACCOUNT.password)
        purchaseItem();
    });
});


const purchaseItem = () => {
    HomePageAPI.getHomePageProducts().then(hpAPIProducts => {
        const randomProduct = hpAPIProducts[Math.floor(Math.random() * hpAPIProducts.length)];
        cy.contains(randomProduct.title.trim().replace("\n","")).click();
        
        //Click on Add to cart btn
        cy.contains('Add to cart').click()


        //Go to cart
        cy.get('#cartur').click();


        //verify cart detail


        //place order
        cy.contains('Place Order').click();

        //Input place order detail
        cy.get('#name').type('tun')
        cy.get('#country').type('Viet Nam')
        cy.get('#city').type('HCM')
        cy.get('#card').type('123123')
        cy.get('#month').type('April')
        cy.get('#year').type('2023')
        cy.contains('Purchase').click();


        //verify thank you alert
        cy.get('.sweet-alert h2').should('contain.text','Thank you for your purchase!');
        cy.get('.sweet-alert .lead').then($info => {
            cy.wrap($info).should('contain.text', randomProduct.price)
            cy.wrap($info).should('contain.text', 'Card Number: 123123')
        });

        cy.xpath('//button[text()="OK"]').click()


        
    })
}