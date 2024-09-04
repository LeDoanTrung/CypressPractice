const SEARCH_RESULT_ITEM = 'div[cel_widget_id^="MAIN-SEARCH_RESULTS"]'

class AmzSearchResultPage {

    get searchItemElemList(){
        return cy.get(SEARCH_RESULT_ITEM);
    }
}

module.exports = AmzSearchResultPage