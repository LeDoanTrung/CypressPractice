describe("API POST Request", () => {
  it("should create a new resource", () => {
    let header = {
      "Content-type": "application/json; charset=UTF-8",
    };

    let requestBody = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    let url = "https://jsonplaceholder.typicode.com/posts";

    let requestObject = {
      method: "POST",
      headers: header,
      body: JSON.stringify(requestBody),
      url: url,
    };

    cy.request(requestObject).then((response) => {
      let { status, body } = response;

      expect(status).to.eq(201, "Status is not 201");

      let { title, body: postBody, userId } = body;
      let responseBody = body.body;

      expect(title).to.eq(requestBody.title, "Title is not the same");
      expect(userId).to.eq(requestBody.userId, "UserId is not the same");
      expect(responseBody).to.eq(
        requestBody.body,
        "Response body is not the same"
      );
    });
  });
});
