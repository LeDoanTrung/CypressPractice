export default class SignUpComponent{
    getUsername = () => cy.get('#sign-username')
    getPassword = () => cy.get('#sign-password')
    getSignUpBtn = () => cy.xpath('//button[text()="Sign up"]')

}