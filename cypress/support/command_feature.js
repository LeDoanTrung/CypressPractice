/**
 * @memberof cy
 * @method getPost
 * @param {string} postNum - The post number
 * */

Cypress.Commands.add('getPost', postNum => {
    cy.request({
        method: 'GET',
        url: Cypress.env('apiURL') + '/' + postNum
    })
})