import { useQuery } from "@tanstack/react-query";
import { getSingular } from "@/lib/api/client";

export const useGetSingular = ({ resource, populate, filters }) => {
  return useQuery({
    queryKey: [resource, populate, filters],
    queryFn: () => getSingular({ resource, populate, filters }),
  });
};
