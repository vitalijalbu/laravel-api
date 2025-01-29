"use client";
import { useMediaQuery } from "usehooks-ts";

export const useDevice = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return { isMobile, isTablet };
};
