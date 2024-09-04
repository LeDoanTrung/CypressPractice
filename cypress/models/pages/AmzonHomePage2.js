require('cypress-xpath')

class amazonHomePage2 {
    element = {
        search_bar : () => cy.get('#twotabsearchtextbox'),
        search_btn : () => cy.xpath('//input[@id="nav-search-submit-button"]')
    }

    
}

module.exports = new amazonHomePage2()
