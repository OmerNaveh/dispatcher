export const isOverOneHundred = (
  pageSize: number = 20,
  page: number = 1
): boolean => {
  return page * pageSize > 100 || pageSize > 100 || page > 100;
};
