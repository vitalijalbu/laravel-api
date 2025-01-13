import { useInfiniteQuery } from "@tanstack/react-query";
import { getList } from "@/lib/api/strapi";

export const useInfiniteList = ({
  resource,
  filters,
  sorters,
  meta,
  pagination = {},
}) => {
  return useInfiniteQuery({
    queryKey: [resource, filters, sorters, meta],
    queryFn: async ({ pageParam = pagination?.page || 1 }) => {
      const result = await getList({
        resource,
        pagination,
        filters,
        sorters,
        meta,
      });
      console.log("🌱 API result:", result);
      return result; // Ensure the result contains the expected structure
    },
    getNextPageParam: (lastPage) => {
      //console.log("🌱 lastPage in getNextPageParam:", lastPage);
      const { page, pageCount } = lastPage?.meta?.pagination || {};
      return page < pageCount ? page + 1 : undefined;
    },
  });
};
