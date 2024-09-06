describe("Test GET request", () => {
  it("should be able to get all users", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      // Destructure
      let { body, status } = response;

      cy.log(JSON.stringify(response.body));

      expect(body.length).to.eq(100);
      expect(status).to.eq(200);

      //Get a random element from the array Object
      let random = Math.floor(Math.random() * body.length);
      let randomObject = body[random];

      //Verify the properties
      cy.log(JSON.stringify(randomObject));
      verifyNotEmpty(randomObject.userId);
      verifyNotEmpty(randomObject.id);
      verifyNotEmpty(randomObject.title);
      verifyNotEmpty(randomObject.body);
    });
  });
});

let verifyNotEmpty = (data) => {
  if (!data) {
    expect(data).to.eq(false, "Data is empty");
  }
};
