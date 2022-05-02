import { INewsApiArticle, INewsApiResponse } from "ts-newsapi/lib/types";
import {
  addingTagsToArticles,
  getTagsByString,
  uniqueValuesInTags,
} from "../utils/addingTagsToArticles";
import { separateObjecttoArrayOfObjects } from "../utils/dataStructures";
import { languageRegexDetecor } from "../utils/languageRegexCreator";
describe("testing all utils functions", () => {
  describe("tags to articles functions", () => {
    describe("unique tags function", () => {
      it("should recieve a string array and return distinct values only", () => {
        //Arrange
        const differentTags = ["a", "b", "b", "a", "c"];
        //Act
        const distinctValues = uniqueValuesInTags(differentTags);
        //Assert
        expect(distinctValues).toEqual(["a", "b", "c"]);
      });
    });
    describe("get tags from string function", () => {
      it("should return an array with money tag for money string", () => {
        //Arrange
        const moneyString = "money";
        //Act
        const tags = getTagsByString(moneyString);
        //Assert
        expect(tags).toEqual(["Money"]);
      });
      it("should return an array with money tag for money string that is uppercased", () => {
        //Arrange
        const moneyString = "mOnEY";
        //Act
        const tags = getTagsByString(moneyString);
        //Assert
        expect(tags).toEqual(["Money"]);
      });
      it("should return an array with money tag for a long string which has a keyword that impplies money category", () => {
        //Arrange
        const moneyString = "selling on the stock market is fun";
        //Act
        const tags = getTagsByString(moneyString);
        //Assert
        expect(tags).toEqual(expect.arrayContaining(["Money"]));
      });
    });
    describe("adding tags to articles function", () => {
      it("should add tags array including Money tag to each of article in articles array", () => {
        //Arrange
        const articles: INewsApiArticle[] = [
          {
            source: {
              id: "engadget",
              name: "Engadget",
            },
            author: "Cherlynn Low",
            title: "money",
            description: "money",
            url: "https://www.engadget.com/iphone-se-3-2022-review-battery-life-camera-sample-touch-id-home-button-130047678.html",
            urlToImage:
              "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a921eec0-a17d-11ec-9eff-a7e1a152f4df",
            publishedAt: "2022-03-14T13:00:47Z",
            content: "money",
          },
          {
            source: {
              id: "engadget",
              name: "Engadget",
            },
            author: "Cherlynn Low",
            title: "stock",
            description: "stock",
            url: "https://www.engadget.com/iphone-se-3-2022-review-battery-life-camera-sample-touch-id-home-button-130047678.html",
            urlToImage:
              "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a921eec0-a17d-11ec-9eff-a7e1a152f4df",
            publishedAt: "2022-03-14T13:00:47Z",
            content: "stock",
          },
        ];
        const apiResponse: INewsApiResponse = {
          status: "ok",
          totalResults: 2,
          articles,
        };
        //Act
        const responseWithtaggedArticles = addingTagsToArticles(apiResponse);
        const taggedArticles = responseWithtaggedArticles.articles;
        //Assert
        expect(taggedArticles[0].tags).toEqual(["Money"]);
        expect(taggedArticles[1].tags).toEqual(["Money"]);
      });
    });
  });
  describe("dictionary to graphData array function", () => {
    it("should return an array of names and values for dictionary with keys and number values", () => {
      //Arrange
      const dictionary = { US: 4, IL: 2 };
      //Act
      const graphDataArr = separateObjecttoArrayOfObjects(dictionary);
      //Assert
      expect(graphDataArr).toEqual([
        { name: "US", value: 4 },
        { name: "IL", value: 2 },
      ]);
    });
  });
  describe("language regex creator function", () => {
    it("should recieve he and return hebrew regex", () => {
      //Arrange
      const languge = "he";
      const regex = /[֐-׿]/;
      //Act
      const regexCreated = languageRegexDetecor(languge);
      //Assert
      expect(regexCreated).toEqual(regex);
    });
    it("should recieve ar and return arabic regex", () => {
      //Arrange
      const languge = "ar";
      const regex = /[؀-ۿ]|[ݐ-ݿ]|[ﭐ-﯁]|[ﯓ-﴿]|[ﵐ-ﶏ]|[ﶒ-ﷇ]|[ﹰ-ﻼ]|[ﷰ-﷽]/;
      //Act
      const regexCreated = languageRegexDetecor(languge);
      //Assert
      expect(regexCreated).toEqual(regex);
    });
    it("should recieve en and return engish regex", () => {
      //Arrange
      const languge = "en";
      const regex = /[a-zA-Z]/;
      //Act
      const regexCreated = languageRegexDetecor(languge);
      //Assert
      expect(regexCreated).toEqual(regex);
    });
  });
});
