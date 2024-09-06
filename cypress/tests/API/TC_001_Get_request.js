describe("Test GET request", () => {
  it("should be able to get all users", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      cy.log(JSON.stringify(response.body));

      expect(response.status).to.eq(200);

      expect(response.body.data).to.have.length(6);
      expect(response.body.data[0]).to.have.property("id");
      expect(response.body.data[0]).to.have.property("email");
      expect(response.body.data[0]).to.have.property("first_name");
      expect(response.body.data[0]).to.have.property("last_name");
      expect(response.body.data[0]).to.have.property("avatar");
    });
  });
});
