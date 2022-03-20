export const apiStrings: { [key: string]: string[] } = {
  ["Search in"]: ["Top Headlines", "Everything"],
  ["Top Headlines"]: ["Country", "Catagory", "Sources"],
  Country: [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ],
  Catagory: [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ],
  Everything: ["Sort by", "Dates", "Sources", "Language"],
  Language: [
    "ar",
    "de",
    "en",
    "es",
    "fr",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "ru",
    "se",
    "ud",
    "zh",
  ],
  ["Sort by"]: ["relevancy", "popularity", "publishedAt"],
};
export const ipUrls = {
  getClientIpUrl: "https://api.ipify.org/?format=json",
  getInfoFromIpUrl: "http://ip-api.com/json/",
};
export const cardString = {
  NavigateToDispatch: "NAVIGATE TO DISPATCH",
  Continue: "CONTINUE",
};
export const graphString = {
  noDataToDisplay: "No data to display",
  containerClass: "flex column graph",
  cardLayoutClass: "graph",
  graphTypeArray: ["Sources", "Dates", "Tags"],
  Sum: "Sum",
};
export const headerStrings = {
  SignOut: "Sign Out",
  UserInitials: "ON",
  Search: "Search",
};
export const loginString = {
  title: "Welcome to Dispatcher",
  desc: "Locate articles and breaking news headlines from news sources and blogs across the web",
};
export const searchBarStrings = {
  searchDropDownOptions: ["Top Headlines", "Everything"],
  noMatches: "We couldn't find any matches for your query",
  noMatchesContainerClasses: "flex column",
  viewResults: "VIEW RESULTS",
  filter: "FILTER",
  searchIn: "Search in",
  all: "All",
};
export const storyStrings = {
  HeaderTitle: "HEADER",
  UITitle: "UI",
  CardTitle: "CARD",
  DashTitle: "DASHBOARD",
  LoginTitle: "Login",
};
export const routeStrings = {
  dashboardPath: "http://localhost:3000/dashboard",
  loginPath: "http://localhost:3000/login",
  domain: "dev-a194tman.us.auth0.com",
  clientId: "Yyn4S2mF60BUYHMbQjOEf2Nn2kXQsVTg",
};
