describe("Test PUT method", () => {
  it("should be able to update a resource", () => {
    let header = {
      "Content-type": "application/json; charset=UTF-8",
    };

    let requestBody = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    };

    let url = "https://jsonplaceholder.typicode.com/posts/1";

    let requestObject = {
      method: "PUT",
      headers: header,
      body: JSON.stringify(requestBody),
      url: url,
    };

    cy.request(requestObject).then((response) => {
      let { status, body } = response;
      cy.log('Response: ' + JSON.stringify(response.body));
      expect(status).to.eq(200, "Verify status code");

      let { title, body: postBody, userId } = body;
      let responseBody = body.body;
      cy.log('Response Body: ' + responseBody);
      expect(title).to.eq(requestBody.title, "Verify title");
      expect(userId).to.eq(requestBody.userId, "Verify userId");
      expect(responseBody).to.eq(
        requestBody.body,
        "Verify response body"
      );
    });
  });
});
