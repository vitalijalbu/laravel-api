import { useQuery } from "@tanstack/react-query";
import { getOne } from "@/lib/api/strapi";

export const useGetOne = ({ resource, id, meta }) => {
  if (!id) return null;
  return useQuery({
    queryKey: [resource, id, meta],
    queryFn: () => getOne({ resource, id, meta }),
  });
};
