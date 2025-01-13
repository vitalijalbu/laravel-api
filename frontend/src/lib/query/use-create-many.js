import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMany } from "../api/client";



export const useCreateMany = () => {
  const queryClient = useQueryClient();
    const user = null;

  return useMutation({
    mutationFn: ({ resource, body, appendUser = false }) => {
      const requestBody = appendUser ? { ...body, user: user?.id } : body;
      return createMany({ resource, body: requestBody });
    },
    onError: (error) => {
      toast.error("Errore nella creazione dell'elemento:", error);
    },
    onSuccess: ({ data, resource }) => {
      toast.success(`Elemento creato con successo`);
    },
    onSettled: ({data, error, variables}) => {
      const resource = variables.resource;
      if (resource) {
        queryClient.invalidateQueries([resource]);
      } else {
        console.error("No resource found in mutation variables");
      }
    },
  });
};
