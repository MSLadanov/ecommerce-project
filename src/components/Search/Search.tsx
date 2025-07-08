import { Input } from "@components/ui/Input";
import { ReactElement } from "react";
import { useSearch } from "@hooks/useSearch";
import { Flex } from "@components/ui/Flex";
import { useApi } from "@hooks/useApi";
import { IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@components/Loader";
import { ProductBadge } from "../ProductBadge";
import "./style.scss";

interface ISearchResultsProps {
  searchQuery: string;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  searchQuery,
}): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sale-products"],
    queryFn: () =>
      get<IProductsResponse>("PRODUCTS", `/search?q=${searchQuery}`),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="search-results">
      {data.products.map((product) => (
        <ProductBadge key={product.id} images={product.images} />
      ))}
    </div>
  );
};

export const Search = (): ReactElement => {
  const { search, setSearch } = useSearch((state) => state);
  return (
    <Flex className="search-box" flexDirection="column">
      <Input
        className="search-bar"
        id="search"
        type="text"
        value={search}
        setValue={setSearch}
      />

      {!!search.length && <SearchResults searchQuery={search} />}
    </Flex>
  );
};
