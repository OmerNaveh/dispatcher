import { filterActionsStringTypes } from "../store/slicers/filtersSlice";

export const apiStrings: { [key: string]: string[] } = {
  ["Search in"]: ["Top Headlines", "Everything"],
  ["Top Headlines"]: ["Country", "Category", "Sources"],
  Country: [
    "AE",
    "AR",
    "AT",
    "AU",
    "BE",
    "BG",
    "BR",
    "CA",
    "CH",
    "CN",
    "CO",
    "CU",
    "CZ",
    "DE",
    "EG",
    "FR",
    "GB",
    "GR",
    "HK",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IT",
    "JP",
    "KR",
    "LT",
    "LV",
    "MA",
    "MX",
    "MY",
    "NG",
    "NL",
    "NO",
    "NZ",
    "PH",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SA",
    "SE",
    "SG",
    "SI",
    "SK",
    "TH",
    "TR",
    "TW",
    "UA",
    "US",
    "VE",
    "ZA",
  ],
  Category: [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ],
  Everything: ["Sort by", "Dates", "Sources", "Language"],
  Language: [
    "AR",
    "DE",
    "EN",
    "ES",
    "FR",
    "HE",
    "IT",
    "NL",
    "NO",
    "PT",
    "RU",
    "SE",
    "UD",
    "ZH",
  ],
  ["Sort by"]: ["Relevancy", "Popularity", "PublishedAt"],
  Sources: [
    "Engadget",
    "Reuters",
    "MacRumors",
    "The Verge",
    "CNET",
    "ESPN",
    "New York Times",
    "NBC",
    "CNN",
    "Ynet",
  ],
};
export const ReduxString = {
  TopHeadlines: "Top Headlines",
  Everything: "Everything",
  Filters: "filters",
  ApiSlicer: "apiSlicer",
  Set: "set",
  SortBy: "Sort by",
  Sources: "Sources",
  SearchIn: "Search in",
  Dates: "Dates",
  Loading: "loading",
  Failed: "failed",
};
export const filterActionsStrings: filterActionsStringTypes[] = [
  "setEndpoint",
  "setSortBy",
  "setSearchInput",
  "setCategory",
  "setCountry",
  "setLanguage",
  "setDate",
  "setSourceEverything",
  "setSourceTopheadlines",
];
export const ipUrls = {
  getClientIpUrl: "https://api.ipify.org/?format=json",
  getInfoFromIpUrl: "http://ip-api.com/json/",
};
export const cardString = {
  NavigateToDispatch: "NAVIGATE TO DISPATCH",
  Continue: "CONTINUE",
  defaultImageUrl:
    "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=",
};
export const graphString = {
  noDataToDisplay: "No data to display",
  containerClass: "flex column graph",
  cardLayoutClass: "graph",
  graphTypeArray: ["Sources", "Dates", "Tags"],
  Sources: "Sources",
  Dates: "Dates",
  Sum: "Sum",
  Other: "Other",
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
export const historyStrings = {
  RecentSearches: "RECENT SEARCHES",
  Clear: "CLEAR",
};
export const positionString: { [key: string]: "start" | "end" } = {
  Start: "start",
  End: "end",
};
export const cardResultsStrings = {
  totalResults: "Total results",
  topHeadlinesIn: "Top Headlines in Israel",
};
export const dateStrings: {
  Year: "year";
  Month: "month";
  Day: "day";
} = {
  Year: "year",
  Month: "month",
  Day: "day",
};
export const apiUrlsStrings = {
  apiBaseUrl: "https://newsapi.org/v2/",
  questionMark: "?",
  query: "q=",
  dateFrom: "&from=",
  dateTo: "&to=",
  sortBy: "&sortBy=",
  sources: "&sources=",
  language: "&language=",
  category: "&category=",
  country: "&country=",
  topHeadlines: "top-headlines",
  apikey2: "&apiKey=28c58c4eb54b45acbd6f61390ccfa776",
  apikey: "&apiKey=217a73c41e4c4534ae8599769d7d2079",
};
export const usefulStrings = {
  whiteSpace: "\xa0",
};
