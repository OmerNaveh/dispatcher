export const convertStringToLocaleDate = (string: string) => {
  const options: {
    weekday: "long";
    year: "numeric";
    month: "long";
    day: "numeric";
  } = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString(undefined, options);
};
