export const convertStringArrToUpperCase = (stringArr: string[]) => {
  return stringArr.map((originalStr) => originalStr.toUpperCase());
};
export const convertStringArrToLowerCase = (stringArr: string[]) => {
  return stringArr.map((originalStr) => originalStr.toLowerCase());
};
export const lowerCaseFirstLetter = (string: string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const toKebabCase = (srcString: string) => {
  if (!srcString) return "";
  const match = srcString.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  if (!match) return "";
  return match.map((x) => x.toLowerCase()).join("-");
};
