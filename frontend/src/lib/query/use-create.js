import { useMutation, useQueryClient } from "@tanstack/react-query";
import { create } from "../api/strapi";



export const useCreate = () => {
  const queryClient = useQueryClient();
    const user = null;

  return useMutation({
    mutationFn: ({ resource, body, appendUser = false }) => {
      const requestBody = appendUser ? { ...body, user: user?.id } : body;
      return create({ resource, body: requestBody });
    },
    onError: (error) => {
      toast.error("Errore nella creazione dell'elemento:", error);
    },
    onSuccess: ({ data, resource }) => {
      toast.success(`Elemento creato con successo`);
    },
    onSettled: ({ resource }) => {
      queryClient.invalidateQueries([resource]);
    },
  });
};
