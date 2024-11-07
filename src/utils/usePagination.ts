export const paginateItems = <T>(
  items: T[],
  itemsPerPage: number,
  currentPage: number
): Array<T & { page: number }> => {
  return items
    .map((item, index) => ({
      ...item,
      page: Math.ceil((index + 1) / itemsPerPage),
    }))
    .filter((item) => item.page === currentPage);
};

export const getTotalPageNum = <T>(
  items: T[],
  itemsPerPage: number
): number[] => {
  const pages = Math.ceil(items.length / itemsPerPage);
  return Array.from({ length: pages }, (_, index) => index + 1);
};
