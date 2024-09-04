import HeaderComponent from "../../models/components/HeaderComponent";
import SignUpComponent from "../../models/components/SignUpComponent";

const generateRandomUser = usernameLength => {
    const ALL_CHARS = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const LENGTH = ALL_CHARS.length;
    let randomUsername ='';
    for(let i =0; i < usernameLength; i++){
        randomUsername += ALL_CHARS.charAt(Math.floor(Math.random()* LENGTH));
    }

    return randomUsername;
};

const SIGNUP_ACCOUNT = {
    username: generateRandomUser(9),
    password: "admin"
}

describe('Login test', () => {
    let headerCmp;
    let signUpCmp;


    beforeEach(() => {
        cy.visit('/');
        headerCmp = new HeaderComponent();
        signUpCmp = new SignUpComponent();
    })

    it('Should be able to sign up with correct credential', () => {
        
        headerCmp.signUpLink().click()
        signUpCmp.getUsername().type(SIGNUP_ACCOUNT.username, {force: true, waitForAnimation: true})
        signUpCmp.getPassword().type(SIGNUP_ACCOUNT.password, {force: true, waitForAnimation: true});
        signUpCmp.getSignUpBtn().click();
        cy.on("window:alert", alert =>{
            expect(alert).to.equal("Sign up successful.")
        })
    });


    it('Should be able to sign up fail with exist account', () => {
        
        headerCmp.signUpLink().click()
        signUpCmp.getUsername().type('tun', {force: true, waitForAnimation: true})
        signUpCmp.getPassword().type('admin', {force: true, waitForAnimation: true});
        signUpCmp.getSignUpBtn().click();
        cy.on("window:alert", alert =>{
            expect(alert).to.equal("This user already exist.")
        })
    });

    
    it('Should be able to signup fail with empty username', () => {
        
        headerCmp.signUpLink().click()
        signUpCmp.getUsername().type(' ', {force: true, waitForAnimation: true})
        signUpCmp.getPassword().type('admin', {force: true, waitForAnimation: true});
        signUpCmp.getSignUpBtn().click();
        cy.on("window:alert", alert =>{
            expect(alert).to.equal("Please fill out Username and Password.")
        })
    });

    //test
    
});