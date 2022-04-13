import NewsAPI from "ts-newsapi";
import {
  ApiNewsCountry,
  INewsApiArticle,
  ApiNewsCategory,
} from "ts-newsapi/lib/types";
import dotenv from "dotenv";
import { topHeadlineModel } from "./topHeadlinesModel";
import { topHeadlineEntry } from "../../types/schemaTypes";
import mongoose from "mongoose";
import schedule from "node-schedule";
import { categories, countries } from "../../constants/strings/strings";
dotenv.config();

const populateTopHeadlines = async (
  country: ApiNewsCountry | undefined = undefined,
  category: ApiNewsCategory | undefined = undefined
) => {
  try {
    if (!country && !category) return;
    const newsapiCall = new NewsAPI(process.env.APIKEY as string);
    const apiResponse = await newsapiCall.getTopHeadlines({
      country,
      category,
    });
    if (!apiResponse || !apiResponse.articles || !apiResponse.articles.length)
      return;
    const completeLoop = new Promise((resolve, reject) => {
      apiResponse.articles.forEach(async (article, index) => {
        const entry = convertArticleToEntry(article, country, category);
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

const saveToDB = async (article: topHeadlineEntry) => {
  try {
    await topHeadlineModel.findOneAndUpdate({ title: article.title }, article, {
      upsert: true,
    });
  } catch (error) {
    console.log(error);

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
  await mongoose.connect(process.env.MONGOURI as string);
  const countriesLoop = new Promise((resolve, reject) => {
    countries.forEach(async (country, index) => {
      await populateTopHeadlines(country);
      if (index === countries.length - 1) resolve("");
    });
  });
  await countriesLoop;
  const categoriesLoop = new Promise((resolve, reject) => {
    categories.forEach(async (category, index) => {
      await populateTopHeadlines(undefined, category);
      if (index === countries.length - 1) resolve("");
    });
  });
  await categoriesLoop;
  await mongoose.disconnect();
};

// The scraping function will run twice every day in 10PM and 10AM
const rule = new schedule.RecurrenceRule();
rule.hour = [10, 22];
rule.dayOfWeek = new schedule.Range(0, 6);
const scrappingJob = schedule.scheduleJob(rule, scrapingTopHeadlines);
