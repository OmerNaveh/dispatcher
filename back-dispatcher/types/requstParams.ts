export interface everythingParams {
  q?: string;
  sources?: string;
  domains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  page?: string;
  pageSize?: string;
  searchIn?: string;
  excludeDomains?: string;
}

export interface topHeadlinesParams {
  q?: string;
  country?: string;
  category?: string;
  sources?: string;
  page?: string;
  pageSize?: string;
}
