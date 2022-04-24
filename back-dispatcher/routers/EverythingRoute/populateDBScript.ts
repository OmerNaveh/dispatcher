import NewsAPI from "ts-newsapi";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { everythingEntry } from "../../types/schemaTypes";
import { everythingModel } from "./everythingSchema";
import { INewsApiArticle, INewsApiSourcesResponse } from "ts-newsapi/lib/types";
import { addingTagsToArticles } from "../../utils/addingTagsToArticles";
import { ArticleWithTags } from "../../types/newsTypes";

dotenv.config();

const populateEverything = async (sources: string[]) => {
  let succeded = false;
  let apiCount = 1;
  while (!succeded) {
    const apiKeyCounter = `APIKEY${apiCount == 1 ? "" : apiCount}`;
    const apiKey = process.env[apiKeyCounter] as string;
    if (!apiKey) {
      succeded = true;
      break;
    }
    try {
      const newsapiCall = new NewsAPI(apiKey);
      const apiResponse = await newsapiCall.getEverything({
        sources,
        pageSize: 99,
        sortBy: "publishedAt",
      });
      succeded = true;
      if (!apiResponse || !apiResponse.articles || !apiResponse.articles.length)
        return;
      const responseWithTagsAdded = addingTagsToArticles(apiResponse);
      const completeLoop = new Promise((resolve, reject) => {
        responseWithTagsAdded.articles.forEach(async (article, index) => {
          const entry = convertArticleToEntry(article);
          await saveToDB(entry);
          if (index === apiResponse.articles.length - 1) resolve("");
        });
      });
      await completeLoop;
      console.log("populated");
    } catch (error) {
      console.log("an error occured switching api key");
      apiCount++;
    }
  }
};
const pullSources = (sourcesResponse: INewsApiSourcesResponse) => {
  return sourcesResponse.sources.map((source) => source.name);
};
const saveToDB = async (article: everythingEntry) => {
  try {
    await everythingModel.findOneAndUpdate({ title: article.title }, article, {
      upsert: true,
    });
  } catch (error) {
    console.log("error communicating with DB");
    return;
  }
};

const convertArticleToEntry = (article: ArticleWithTags): everythingEntry => {
  return { ...article, popularity: 0 };
};

export const scrapingEverything = async () => {
  let succeded = false;
  let apiCount = 1;
  while (!succeded) {
    const apiKeyCounter = `APIKEY${apiCount == 1 ? "" : apiCount}`;
    const apiKey = process.env[apiKeyCounter] as string;
    if (!apiKey) {
      succeded = true;
      break;
    }
    try {
      await mongoose.connect(process.env.MONGOURI as string);
      const newsapiCall = new NewsAPI(apiKey);
      const sourcesResponse = await newsapiCall.getSources();
      succeded = true;
      const sources = pullSources(sourcesResponse);
      let sourcesCounter = 0;
      while (sourcesCounter < sources.length) {
        const slicedSources = sources.slice(sourcesCounter, sourcesCounter + 4);
        await populateEverything(slicedSources);
        sourcesCounter += 4;
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("status code 429")) apiCount++;
        else {
          succeded = true;
        }
      }
    }
  }
  await mongoose.disconnect();
};
