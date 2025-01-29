import { useMutation } from "@tanstack/react-query";
import { deleteMany } from "@/lib/api/client";

export const useDeleteMany = () => {
  return useMutation(({ resource, ids }) => deleteMany({ resource, ids }));
};
