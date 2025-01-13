import { useQuery } from "@tanstack/react-query";
import { custom } from "@/lib/api/strapi";

export const useCustom = ({
  url,
  method,
  filters,
  sorters,
  payload,
  query,
  headers,
}) => {
  return useQuery({
    queryKey: [url, method, filters, sorters, payload, query, headers],
    queryFn: () =>
      custom({
        url,
        method,
        filters,
        sorters,
        payload,
        query,
        headers,
      }),
  });
};
