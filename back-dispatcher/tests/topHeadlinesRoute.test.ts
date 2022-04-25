import request from "supertest";
import app from "../index";
afterEach(() => app.close());
describe("top headlines route tests", () => {
  describe("fetching from db testing", () => {
    it("should respond to post request with no body with status 500", async () => {
      //Arrange
      //Act
      const res = await request(app).post("/top");
      //Assert
      expect(res.statusCode).toEqual(500);
    });
    it("should respond with 10 articles to post request with valid body with pageSize set to 10", async () => {
      //Arrange
      const requestBody = {
        data: {
          pageSize: "10",
          country: "il",
        },
      };
      //Act
      const res = await request(app).post("/top").send(requestBody);
      //Assert
      expect(res.body.articles.length).toBe(10);
      expect(res.body.status).toBe("ok");
    });
  });
});
