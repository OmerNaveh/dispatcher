import NewsAPI from "ts-newsapi";
import dotenv from "dotenv";
import mongoose from "mongoose";
import schedule from "node-schedule";
import { everythingEntry } from "../../types/schemaTypes";
import { everythingModel } from "./everythingSchema";
import { INewsApiArticle, INewsApiSourcesResponse } from "ts-newsapi/lib/types";
import { addingTagsToArticles } from "../../utils/addingTagsToArticles";
import { ArticleWithTags } from "../../types/newsTypes";

dotenv.config();

const populateEverything = async (page: number = 1) => {
  try {
    const newsapiCall = new NewsAPI(process.env.APIKEY as string);
    const sourcesResponse = await newsapiCall.getSources();
    const sources = pullSources(sourcesResponse);
    const apiResponse = await newsapiCall.getEverything({
      sources,
      page,
      sortBy: "publishedAt",
    });
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
    console.log("an error occured");
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

const scrapingEverything = async () => {
  await mongoose.connect(process.env.MONGOURI as string);
  let page = 0;
  while (page < 10) {
    await populateEverything(page);
    page++;
  }
  await mongoose.disconnect();
};

// The scraping function will run twice every day in 10PM and 10AM
const rule = new schedule.RecurrenceRule();
rule.hour = [10, 22];
rule.dayOfWeek = new schedule.Range(0, 6);
const scrappingJob = schedule.scheduleJob(rule, scrapingEverything);
