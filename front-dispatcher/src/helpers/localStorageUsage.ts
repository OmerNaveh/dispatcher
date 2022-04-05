import { historyStrings } from "../strings/strings";

export const getHistory = () => {
  const storageData = localStorage.getItem(historyStrings.History);
  return storageData ? JSON.parse(storageData) : [];
};
export const ClearSearchHistory = () => {
  localStorage.clear();
};
export const addToHistory = (recentSearch: string) => {
  const storageData = localStorage.getItem(historyStrings.History);
  const savedStorage = storageData ? JSON.parse(storageData) : [];
  localStorage.setItem(
    historyStrings.History,
    JSON.stringify([...savedStorage, recentSearch])
  );
};
export const clearSearchFromHistory = (searchToRemove: string) => {
  const storageData = localStorage.getItem(historyStrings.History);
  if (!storageData) return;
  const historySearches: [string] = JSON.parse(storageData);
  const filteredSearches = historySearches.filter(
    (search) => search !== searchToRemove
  );
  localStorage.setItem(
    historyStrings.History,
    JSON.stringify(filteredSearches)
  );
};
