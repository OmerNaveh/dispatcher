import NewsAPI from "ts-newsapi";
import {
  ApiNewsCountry,
  INewsApiArticle,
  ApiNewsCategory,
} from "ts-newsapi/lib/types";
import dotenv from "dotenv";
import { topHeadlineEntry } from "../../types/schemaTypes";
import mongoose from "mongoose";
import schedule from "node-schedule";
import { categories, countries } from "../../constants/strings/strings";
import { topHeadlineModel } from "./topHeadlinesSchema";
import { addingTagsToArticles } from "../../utils/addingTagsToArticles";
dotenv.config();

const populateTopHeadlines = async (
  country: ApiNewsCountry | undefined = undefined,
  category: ApiNewsCategory | undefined = undefined
) => {
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
      if (!country && !category) return;
      const newsapiCall = new NewsAPI(apiKey);
      const apiResponse = await newsapiCall.getTopHeadlines({
        country,
        category,
      });
      succeded = true;
      if (!apiResponse || !apiResponse.articles || !apiResponse.articles.length)
        return;
      const responseWithTagsAdded = addingTagsToArticles(apiResponse);
      const completeLoop = new Promise((resolve, reject) => {
        responseWithTagsAdded.articles.forEach(async (article, index) => {
          const entry = convertArticleToEntry(article, country, category);
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

const saveToDB = async (article: topHeadlineEntry) => {
  try {
    await topHeadlineModel.findOneAndUpdate({ title: article.title }, article, {
      upsert: true,
    });
  } catch (error) {
    console.log("error communicating with DB");
    return;
  }
};

const convertArticleToEntry = (
  article: INewsApiArticle,
  country: string = "",
  category: string = ""
): topHeadlineEntry => {
  return { ...article, category, country };
};

const scrapingTopHeadlines = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI as string);
    for (let category of categories) {
      for (let country of countries) {
        console.log(country, category);
        await populateTopHeadlines(country, category);
      }
    }
  } catch (error) {
    console.log(error);
  }
  await mongoose.disconnect();
};

// The scraping function will run twice every day in 10PM and 10AM
const rule = new schedule.RecurrenceRule();
rule.hour = [10, 22];
rule.dayOfWeek = new schedule.Range(0, 6);
const scrappingJob = schedule.scheduleJob(rule, scrapingTopHeadlines);
