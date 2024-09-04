require('cypress-xpath')

class amazonSearchPage2{
    element = {
        listOfResult: ()=> cy.get('div[cel_widget_id^="MAIN-SEARCH_RESULTS"]')
    }
}

module.exports = new amazonSearchPage2()