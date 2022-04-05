import moment from "moment";

export const convertStringToLocaleDate = (string: string) => {
  return moment(new Date(string)).format("dddd MMM D, YYYY");
};
