describe("Auth0", function () {
  beforeEach(function () {
    cy.loginByAuth0Api(
      Cypress.env("AUTH0_USERNAME"),
      Cypress.env("AUTH0_PASSWORD")
    );
  });

  it("shows onboarding", function () {
    cy.contains("Get Started").should("be.visible");
  });
});
