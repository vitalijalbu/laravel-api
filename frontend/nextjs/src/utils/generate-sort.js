export const generateSort = (sorters) => {
  const _sort = [];

  if (sorters) {
    sorters.forEach((item) => {
      if (item?.field && (item?.order === "asc" || item?.order === "desc")) {
        _sort.push(`${item?.field}:${item?.order}`);
      }
    });
  }

  return _sort;
};
