/*
Runs in node.js environment to create mock data file
*/

const axios = require("axios");
const fs = require("fs");
const url =
  "https://newsapi.org/v2/everything?q=apple&from=2022-03-07&to=2022-03-07&sortBy=popularity&apiKey=28c58c4eb54b45acbd6f61390ccfa776";

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    fs.writeFileSync("mockData.json", JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
};
fetchData();
