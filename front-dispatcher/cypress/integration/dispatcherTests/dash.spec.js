const url = "http://localhost:3000/dashboard";
describe("Dashboard Page Testing", () => {
  beforeEach(() => {
    cy.visit(url);
  });
  describe("Starting page behaviour", () => {
    it("should show top headlines from users region", () => {
      //Arrange
      //Act
      //Assert
    });
  });
  describe("Dropdowns reaction to endpoint", () => {
    it("should show topheadlines filters when top headlines endpoint is selected", () => {
      //Arrange
      //Act
      //Assert
    });
    it("should show everything filters when everything endpoint is selected", () => {
      //Arrange
      //Act
      //Assert
    });
  });
  describe("Search behaviour", () => {
    it("should show results based on search", () => {
      //Arrange
      //Act
      //Assert
    });
    it("should add recent search to history", () => {
      //Arrange
      //Act
      //Assert
    });
    it("should not add recent search to history if it already is there", () => {
      //Arrange
      //Act
      //Assert
    });
  });
  describe("Graphs behaviour", () => {
    it("should show no results if no data exists", () => {
      //Arrange
      //Act
      //Assert
    });
    describe("Sources Graph", () => {
      it("should show at least 1 source", () => {
        //Arrange
        //Act
        //Assert
      });
    });
    describe("Dates Graph", () => {
      it("should show at least 1 date", () => {
        //Arrange
        //Act
        //Assert
      });
    });
  });
  describe("Tablet Size testing", () => {});
  describe("Mobile Size testing", () => {});
  describe("User Management Testing", () => {
    it("should have users initials on user logout btn", () => {
      //Arrange
      //Act
      //Assert
    });
    it("should resdirect to login page when clicking log out btn", () => {
      //Arrange
      //Act
      //Assert
    });
  });
});
