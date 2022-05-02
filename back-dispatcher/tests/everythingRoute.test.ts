import request from "supertest";
import app from "../index";
afterEach(() => app.close());
describe("everything route tests", () => {
  describe("fetching from db testing", () => {
    it("should respond to post request with no body with status 500", async () => {
      //Arrange
      //Act
      const res = await request(app).post("/everything");
      //Assert
      expect(res.statusCode).toEqual(500);
    });
    it("should respond with 10 articles to post request with valid body with pageSize set to 10", async () => {
      //Arrange
      const requestBody = {
        data: {
          pageSize: "10",
          language: "en",
        },
      };
      //Act
      const res = await request(app).post("/everything").send(requestBody);
      //Assert
      expect(res.body.articles.length).toBe(10);
      expect(res.body.status).toBe("ok");
    });
  });
});
