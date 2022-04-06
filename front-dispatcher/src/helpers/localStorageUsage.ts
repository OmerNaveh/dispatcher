import { historyStrings } from "../strings/strings";

export const getHistory = (): [string] => {
  const storageData = localStorage.getItem(historyStrings.History);
  return storageData ? JSON.parse(storageData) : [];
};
export const ClearSearchHistory = () => {
  localStorage.clear();
};
export const addToHistory = (recentSearch: string) => {
  const storageData = localStorage.getItem(historyStrings.History);
  const savedStorage: [string] = storageData ? JSON.parse(storageData) : [];
  if (isAlreadyInStorage(recentSearch)) return;
  localStorage.setItem(
    historyStrings.History,
    JSON.stringify([...savedStorage, recentSearch])
  );
};
export const isAlreadyInStorage = (recentSearch: string) => {
  const storageData = localStorage.getItem(historyStrings.History);
  if (!storageData) return false;
  const savedStorage: [string] = JSON.parse(storageData);
  return savedStorage.includes(recentSearch);
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
