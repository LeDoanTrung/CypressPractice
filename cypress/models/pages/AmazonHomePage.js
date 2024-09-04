//Khai báo các element

const SEARCH_TEXT_BOX = "#twotabsearchtextbox";
const SEARCH_BTN ="#nav-search-submit-button";

class AmazonHomePage {

    get searchTxtBox(){
        return cy.get(SEARCH_TEXT_BOX);
    }

    get searchBtn(){
        return cy.get(SEARCH_BTN);
    }
}

module.exports = AmazonHomePage