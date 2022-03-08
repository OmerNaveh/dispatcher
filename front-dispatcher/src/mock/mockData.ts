import axios from "axios";

const url =
  "https://newsapi.org/v2/everything?q=apple&from=2022-03-07&to=2022-03-07&sortBy=popularity&apiKey=28c58c4eb54b45acbd6f61390ccfa776";
const fetchData = async () => {
  try {
    await axios.get(url);
  } catch (error) {}
};
export {};
