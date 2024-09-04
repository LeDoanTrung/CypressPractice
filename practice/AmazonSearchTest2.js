import AmazonSearchResultPage2 from "../../models/pages/AmazonSearchResultPage2";
import amazonHomePage2 from "../../models/pages/AmzonHomePage2";

describe('Verify search method with Amz page', () => {
    it('Search result test', () => {
        const SEARCH_TXT ="Dining Table";
        cy.visit("https://www.amazon.com/");

        amazonHomePage2.element.search_bar().type(SEARCH_TXT);
        amazonHomePage2.element.search_btn().click();
    });
});