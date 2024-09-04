export class HomePageAPI{
    static getHomePageProducts(){
        this.waitForHomePageLoad();
        return cy.get('@entries').then(entries => {
            return entries.response.body.Items;
        });
    }

    static waitForHomePageLoad(){
        this.waitForEntriesRequest();
    }

    static waitForEntriesRequest(){
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
    }
}
