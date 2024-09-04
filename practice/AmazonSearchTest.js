import AmazonHomePage from "../../models/pages/AmazonHomePage";
import AmzSearchResultPage from "../../models/pages/AmazonSearchResultPage";

describe('Amz search', () => {
    it('should be able to search dining table', () => {
        const SEARCH_TXT ="Dining Table";
        cy.visit("https://www.amazon.com/");
        let amzHomePage = new AmazonHomePage();

        amzHomePage.searchTxtBox.type(SEARCH_TXT);
        amzHomePage.searchBtn.click();

        let amzSearchResultPage = new AmzSearchResultPage();
        amzSearchResultPage.searchItemElemList.should("not.have.length",0);

    });
});