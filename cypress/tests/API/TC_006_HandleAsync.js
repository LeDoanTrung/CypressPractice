

describe('Handling GET request', () => {
    it('should be able to wait until a request', async () => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let createPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };

        let updatePutBody = {
            id: 1,
            title: 'foo000',
            body: 'bar',
            userId: 1
        };

        cy.createPost(createPostBody).then((response) => {
            cy.getPost((Number(response.body.id)-1).toString()).then(response => {            
                cy.request({
                    method: 'PUT',
                    url: url+"/"+ response.body.id,
                    headers: { "content-type": "application/json", },
                    body: JSON.stringify(updatePutBody)
                }).then(response => {
                   cy.request({
                    method: 'DELETE',
                    url: url+"/"+ response.body.id,
                   }).then(response => {
                       let { status, body } = response;
                       cy.log('Response: ' + JSON.stringify(response.body));
                       expect(status).to.eq(200, 'Verify status code');
                   });
                });
            });
        });



    });
});