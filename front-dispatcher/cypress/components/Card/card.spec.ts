import React from "react";
import { mount } from "@cypress/react";
import Card from "../../../src/features/Card/Card";
import { convertStringToLocaleDate } from "../../../src/helpers/dateConverter";

const mockArticle = {
  source: { id: "engadget", name: "Engadget" },
  author: "Jon Fingas",
  title: "Instagram pulls Boomerang and Hyperlapse from app stores",
  description:
    "Instagram isn't just waving goodbye to its IGTV app. As TechCrunchreports, social media consultant Matt Navarra and various Twitter users (including KenSchillinger and WFBrother) have all noticed that Instagram's dedicated Boomerang and Hyperlapse apps have d…",
  url: "https://www.engadget.com/instagram-removes-boomerang-hyperlapse-apps-213909811.html",
  urlToImage:
    "https://s.yimg.com/os/creatr-uploaded-images/2022-03/0933cb30-9e59-11ec-bb7f-f18d11813eba",
  publishedAt: "2022-03-07T21:39:09Z",
  content:
    "Instagram isn't just waving goodbye to its IGTV app. As TechCrunchreports, social media consultant Matt Navarra and various Twitter users (including KenSchillinger and WFBrother) have all noticed tha… [+1604 chars]",
};
describe("Card Component", () => {
  beforeEach(() => {
    mount(Card(mockArticle));
  });
  describe("Props showing", () => {
    it("should display card image", () => {
      //Arrange

      //Act

      //Assert
      cy.get("img")
        .should("have.attr", "src")
        .should("include", mockArticle.urlToImage);
    });
    it("should display date in moment format", () => {
      //Arrange
      const momentDate = convertStringToLocaleDate(mockArticle.publishedAt);

      //Act

      //Assert
      cy.get("p").first().should("have.text", momentDate);
    });
  });
  describe("Card Logic", () => {
    it("card button should redirect to props url in new window", () => {
      //Arrange

      //Act
      cy.get("button").first().click({ force: true });

      //Assert

      cy.url().should("not.eq", mockArticle.url);
    });
  });
});
