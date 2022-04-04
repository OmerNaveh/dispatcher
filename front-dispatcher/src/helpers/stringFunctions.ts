export const convertStringArrToUpperCase = (stringArr: string[]) => {
  return stringArr.map((originalStr) => originalStr.toUpperCase());
};
export const convertStringArrToLowerCase = (stringArr: string[]) => {
  return stringArr.map((originalStr) => originalStr.toLowerCase());
};
export const lowerCaseFirstLetter = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};
