import NewsAPI from "ts-newsapi";
import dotenv from "dotenv";
import mongoose from "mongoose";
import schedule from "node-schedule";
import { everythingEntry } from "../../types/schemaTypes";
import { everythingModel } from "./everythingModel";
import { INewsApiArticle } from "ts-newsapi/lib/types";
import { alphabet } from "../../constants/strings/strings";
dotenv.config();

const populateEverything = async (q: string, page: number = 1) => {
  try {
    const newsapiCall = new NewsAPI(process.env.APIKEY as string);
    const apiResponse = await newsapiCall.getEverything({
      q,
      page,
      sortBy: "publishedAt",
    });
    if (!apiResponse || !apiResponse.articles || !apiResponse.articles.length)
      return;
    const completeLoop = new Promise((resolve, reject) => {
      apiResponse.articles.forEach(async (article, index) => {
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

const saveToDB = async (article: everythingEntry) => {
  try {
    await everythingModel.findOneAndUpdate({ title: article.title }, article, {
      upsert: true,
    });
  } catch (error) {
    console.log(error);

    console.log("error communicating with DB");
    return;
  }
};

const convertArticleToEntry = (article: INewsApiArticle): everythingEntry => {
  return { ...article, popularity: 0 };
};

const scrapingEverything = async () => {
  await mongoose.connect(process.env.MONGOURI as string);
  let page = 0;
  while (page < 10) {
    const lettersLoop = new Promise((resolve, reject) => {
      alphabet.forEach(async (letter, index) => {
        await populateEverything(letter, page);
        if (index === alphabet.length - 1) resolve("");
      });
    });
    await lettersLoop;
    page++;
  }
  await mongoose.disconnect();
};

// The scraping function will run twice every day in 10PM and 10AM
const rule = new schedule.RecurrenceRule();
rule.hour = [10, 22];
rule.dayOfWeek = new schedule.Range(0, 6);
const scrappingJob = schedule.scheduleJob(rule, scrapingEverything);
