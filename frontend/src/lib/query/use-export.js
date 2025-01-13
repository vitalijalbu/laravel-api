import { useMutation } from "@tanstack/react-query";
import { exportData as exportDataApi } from "@/lib/api/strapi";


export const useExport = () => {
  return useMutation({
    mutationFn: (filters) => exportDataApi(filters),
    onSuccess: (data) => {
      toast.success("Export successfully");
    },
    onError: (error) => {
      toast.error("Export failed:" + error.message);
    },
  });
};
