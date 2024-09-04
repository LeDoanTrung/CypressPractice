import SimplyRecipeHomePage from "../../models/pages/SimplyRecipeHomePage";

describe('Learn about within and find method', () => {
    it('within method', () => {
        cy.visit('https://www.simplyrecipes.com/');
        SimplyRecipeHomePage.leftPictureClick();
        SimplyRecipeHomePage.verifyHeadingTitle();
    });

    it.only('find method', () => {
        cy.visit('https://www.simplyrecipes.com/');
        SimplyRecipeHomePage.leftPictureClickFindMethod();
        SimplyRecipeHomePage.verifyHeadingTitle();
    });
});