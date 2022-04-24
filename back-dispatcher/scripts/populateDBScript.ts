import schedule from "node-schedule";
import { scrapingEverything } from "../routers/EverythingRoute/populateDBScript";
import { scrapingTopHeadlines } from "../routers/TopHeadlinesRoute/populatingDBScript";

const scrappingFunction = async () => {
  try {
    await scrapingEverything();
    await scrapingTopHeadlines();
  } catch (error) {
    console.log("scripts failed");
  }
};

// The scraping function will run twice every day in 10PM and 10AM
const rule = new schedule.RecurrenceRule();
rule.hour = [10, 22];
rule.dayOfWeek = new schedule.Range(0, 6);

const scrappingJob = schedule.scheduleJob(rule, scrappingFunction);
