

export default class LoginComponent{
    getUsername = () => cy.get('#loginusername')
    getPassword = () => cy.get('#loginpassword')
    getLoginBtn = () =>  cy.xpath('//button[text()="Log in"]')

}