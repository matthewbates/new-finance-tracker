import { useEffect } from "react";

export const useSetTimeout = (setIsLoading) => {
  const handleSetTimeout = () => {
    setTimeout(() => setIsLoading(false), 2500);
  };

  useEffect(() => {
    document.addEventListener("load", handleSetTimeout);
    return () => document.removeEventListener("load", handleSetTimeout);
  }, []);
};
