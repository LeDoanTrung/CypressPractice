import {DEFAULT} from "../../utils/Method";

describe('Test Delete request', () => {
    it('should be delete resource', () => {
        cy.request({ 
            method: DEFAULT.delete, 
            url: 'https://jsonplaceholder.typicode.com/posts/1' 
        }).then((response) => {
            let { status, body } = response;
            cy.log('Response: ' + JSON.stringify(response.body));
            expect(status).to.eq(200, 'Verify status code');
        });
    });
});