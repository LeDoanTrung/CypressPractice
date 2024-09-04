import { HomePageAPI } from "../../support/HomePageAPI";
import ProductDetailComponent from "../../models/components/ProductDetailComponent";

describe('Product Detail Component test', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Should be able to verify product details', () => {
        HomePageAPI.getHomePageProducts().then(hpAPIProducts => {
            const randomProduct = hpAPIProducts[Math.floor(Math.random() * hpAPIProducts.length)];
            cy.contains(randomProduct.title.trim().replace("\n","")).click();
            const productDetail = new ProductDetailComponent();

            productDetail.getProductImg().should('be.visible')
            productDetail.getProductName().should("contains.text",randomProduct.title)
            productDetail.getProductPrice().should("contains.text",`$${randomProduct.price}`)
            productDetail.getProductDescription().should("not.be.empty")
        })

        
    });


});