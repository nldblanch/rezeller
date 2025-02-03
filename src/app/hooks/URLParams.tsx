import { useSearchParams } from "next/navigation";

interface Params {
  searchTerm: string;
  category: string;
  subcategory: string;
  min_price: string;
  max_price: string;
}
export const useURLParams = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const subcategory = searchParams.get("subcategory") ?? "";
  const min_price = searchParams.get("min_price") ?? "";
  const max_price = searchParams.get("max_price") ?? "";

  const createURLParamString = (params: Params) => {
    let queryStr = "";
    Object.entries(params).forEach(([key, value]: string[], i) => {
      if (key === "searchTerm") key = "search";
      if (value) {
        if (i === 0) {
          queryStr += `${key}=${value}`;
        } else {
          queryStr += `&${key}=${value}`;
        }
      }
    });
    console.log(queryStr);
    return queryStr;
  };

  return {
    params: { searchTerm, category, subcategory, min_price, max_price },
    createURLParamString,
  };
};
