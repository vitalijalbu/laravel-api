import { useMutation, useQueryClient } from "@tanstack/react-query";
import { update } from "../api/strapi";


export const useUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ resource, id, body }) => update({ resource, id, body }),
    onError: (error) => {
      toast.error("Error updating resource:", error);
    },
    onSuccess: ({ data, resource }) => {
      toast.success(`Elemento modificato con successo`);
    },
    onSettled: ({ resource }) => {
      queryClient.invalidateQueries([resource]);
    },
  });
};
