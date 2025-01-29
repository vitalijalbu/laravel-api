import { useSearchParams, useRouter, usePathname } from "next/navigation";

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateQueryParams = (params) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    Object.keys(params).forEach((key) => {
      if (params[key] === undefined || params[key] === null || !params[key]) {
        currentParams.delete(key);
      } else {
        currentParams.set(key, params[key]);
      }
    });

    const newUrl = `${pathname}?${currentParams.toString()}`;
    router.replace(newUrl, undefined, { shallow: true });
  };

  return { searchParams, updateQueryParams };
};

export { useQueryParams };
