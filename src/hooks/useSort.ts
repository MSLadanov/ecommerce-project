import { useLocation, useNavigate } from "react-router";

export const useSort = (clearSelect: () => void) => {
  const location = useLocation();
  const navigate = useNavigate();
  const sortProducts = (options: string) => {
    const searchParams = new URLSearchParams(location.search);
    const [sort, order] = options.split(" ");
    searchParams.set("sortBy", sort);
    searchParams.set("order", order);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };
  const resetSorting = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("sortBy");
    searchParams.delete("order");
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
    clearSelect();
  };
  return { sortProducts, resetSorting };
};
