import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

describe('Login test', () => {
    let headerCmp;
    let loginCmp;
    const LOGIN_ACCOUNT = {
        username: "tun",
        password: "admin"
    }
    beforeEach(() => {
        cy.visit('/');
        headerCmp = new HeaderComponent();
        loginCmp = new LoginComponent();
    })

    it('Should be able to login with correct credential', () => {
        
        headerCmp.loginLink().click()
        loginCmp.getUsername().type(LOGIN_ACCOUNT.username, {force: true, waitForAnimation: true})
        loginCmp.getPassword().type(LOGIN_ACCOUNT.password, {force: true, waitForAnimation: true});
        loginCmp.getLoginBtn().click();
        headerCmp.getLoggedUsername().should('be.visible');
        headerCmp.getLoggedUsername().should('contain.text',`Welcome ${LOGIN_ACCOUNT.username}`);
    });


    it('Should be able to login fail with incorrect username', () => {
        
        headerCmp.loginLink().click()
        loginCmp.getUsername().type(LOGIN_ACCOUNT.username + '_WRONG', {force: true, waitForAnimation: true})
        loginCmp.getPassword().type(LOGIN_ACCOUNT.password, {force: true, waitForAnimation: true});
        loginCmp.getLoginBtn().click();
        cy.on('window:alert',alertText =>{
            expect(alertText).to.equal('User does not exist.');
        })
    });


    it('Should be able to login fail with incorrect password', () => {
        
        headerCmp.loginLink().click()
        loginCmp.getUsername().type(LOGIN_ACCOUNT.username, {force: true, waitForAnimation: true})
        loginCmp.getPassword().type(LOGIN_ACCOUNT.password + '_WRONG', {force: true, waitForAnimation: true});
        loginCmp.getLoginBtn().click();
        cy.on('window:alert',alertText =>{
            expect(alertText).to.equal('Wrong password.');
        })
    });
});