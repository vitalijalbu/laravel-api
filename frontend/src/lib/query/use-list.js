import { useQuery } from "@tanstack/react-query";
import { getList } from "@/lib/api/strapi";

export const useList = ({ resource, pagination, filters, sorters, meta }) => {
  return useQuery({
    queryKey: [resource, pagination, filters, sorters, meta],
    queryFn: () => getList({ resource, pagination, filters, sorters, meta }), // Function to fetch data
  });
};
