import request from "supertest";
import app from "../index";
const graphEndpoint = "/top/graph/";
const mockData = {
  data: [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Cherlynn Low",
      title: "iPhone SE review (2022): A small throwback of a phone",
      description:
        "Since the iPhone 5c, Apple’s approach to making a more affordable iPhone has been to stuff premium processors into cases belonging to older models. With the third generation of the iPhone SE, the company has stuck to that strategy. With its home button, top a…",
      url: "https://www.engadget.com/iphone-se-3-2022-review-battery-life-camera-sample-touch-id-home-button-130047678.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a921eec0-a17d-11ec-9eff-a7e1a152f4df",
      publishedAt: "2022-03-14T13:00:47Z",
      content:
        "Since the iPhone 5c, Apples approach to making a more affordable iPhone has been to stuff premium processors into cases belonging to older models. With the third generation of the iPhone SE, the comp… [+8488 chars]",
      tags: ["Tech"],
    },

    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Steve Dent",
      title: "The Lectric XP Lite is a folding e-bike with a low price",
      description:
        "Lectric already has a good reputation for delivering solid electric bikes at budget prices, thanks to models like the $1,000 XP 2.0. Now, it has taken that to a new level with the launch of the Lectric XP Lite. It's a 46 pound folding e-bike with a 48 volt el…",
      url: "https://www.engadget.com/the-lectric-xp-lite-is-a-folding-e-bike-with-a-really-low-price-122558687.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-04/6cb16d80-ba50-11ec-b7df-3ba56d01f04e",
      publishedAt: "2022-04-12T12:25:58Z",
      content:
        "Lectric already has a good reputation for delivering solid electric bikes at budget prices, thanks to models like the $1,000 XP 2.0. Now, it has taken that to a new level with the launch of the Lectr… [+1748 chars]",
      tags: ["Money", "Tech"],
    },
    {
      source: {
        id: null,
        name: "Lifehacker.com",
      },
      author: "Brendan Hesse",
      title: "Yes, You Can Game on a Chromebook",
      description:
        "PC gaming is rightly considered a “high-end” computer task. While plenty of games will run on weak or outdated PCs and laptops, the biggest, newest games require powerful hardware and gaming-friendly operating systems like Windows or SteamOS—features that tin…",
      url: "https://lifehacker.com/yes-you-can-game-on-a-chromebook-1848746540",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a358573206260f6baa81dcd0b8be41e9.jpg",
      publishedAt: "2022-04-04T20:00:00Z",
      content:
        "PC gaming is rightly considered a high-end computer task. While plenty of games will run on weak or outdated PCs and laptops, the biggest, newestgames require powerful hardware and gaming-friendly op… [+5284 chars]",
      tags: ["Tech"],
    },
  ],
};
afterEach(() => app.close());
describe("graph data tests", () => {
  describe("tags data", () => {
    const tagsPath = `${graphEndpoint}tags`;
    it("should respond to post request with no body with status 400", async () => {
      //Arrange
      //Act
      const res = await request(app).post(tagsPath);
      //Assert
      expect(res.statusCode).toEqual(400);
    });
    it("should respond to post request with mock articles with result of the tags in graph data format", async () => {
      //Arrange
      const expectedResult = [
        {
          name: "Tech",
          value: 3,
        },
        {
          name: "Money",
          value: 1,
        },
      ];
      //Act
      const res = await request(app).post(tagsPath).send(mockData);
      //Assert
      expect(res.body).toEqual(expectedResult);
    });
  });
  describe("line graph", () => {
    const linePath = `${graphEndpoint}line`;
    it("should respond to post request with no body with status 400", async () => {
      //Arrange
      //Act
      const res = await request(app).post(linePath);
      //Assert
      expect(res.statusCode).toEqual(400);
    });
    it("should respond to post request with mock articles with result of the tags in graph data format", async () => {
      //Arrange
      const expectedResult = [
        {
          name: "14/03",
          value: 1,
        },
        {
          name: "04/04",
          value: 1,
        },
        {
          name: "12/04",
          value: 1,
        },
      ];
      //Act
      const res = await request(app).post(linePath).send(mockData);
      //Assert
      expect(res.body).toEqual(expectedResult);
    });
  });
  describe("doughnut graph", () => {
    const doughnutPath = `${graphEndpoint}doughnut`;
    it("should respond to post request with no body with status 400", async () => {
      //Arrange
      //Act
      const res = await request(app).post(doughnutPath);
      //Assert
      expect(res.statusCode).toEqual(400);
    });
    it("should respond to post request with mock articles with result of the tags in graph data format", async () => {
      //Arrange
      const expectedResult = [
        {
          name: "Engadget",
          value: 2,
        },
        {
          name: "Lifehacker.com",
          value: 1,
        },
      ];
      //Act
      const res = await request(app).post(doughnutPath).send(mockData);
      //Assert
      expect(res.body).toEqual(expectedResult);
    });
  });
});
