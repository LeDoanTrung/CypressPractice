import SimplyRecipeHomePage from "../../models/pages/SimplyRecipeHomePage";

describe('SR Homepage', () => {
    it('should be able to get hero card title', () => {
        cy.visit('https://www.simplyrecipes.com/');
        SimplyRecipeHomePage.getHeroCompTitle().then(title =>{
            cy.wrap('').then(()=>{
                expect(title).to.be.eq("The 22 New Cookbooks I'm Cooking From This Fall_")
            })
        })
    });
});