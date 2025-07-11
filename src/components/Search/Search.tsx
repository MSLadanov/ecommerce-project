import { Input } from "@components/ui/Input";
import { ReactElement, useEffect } from "react";
import { Flex } from "@components/ui/Flex";
import { useApi } from "@hooks/useApi";
import { IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@components/Loader";
import { ProductBadge } from "@components/ProductBadge";
import "./style.scss";

interface ISearchResultsProps {
  searchQuery: string;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  searchQuery,
}): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["search-products"],
    queryFn: () =>
      get<IProductsResponse>("PRODUCTS", `/search?q=${searchQuery}`),
  });
  useEffect(() => {
    refetch();
  }, [refetch, searchQuery]);
  if (isLoading) {
    return (
      <div className="search-results">
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (data.products.length === 0) {
    return (
      <div className="search-results">
        <p>No results</p>
      </div>
    );
  }
  return (
    <div className="search-results">
      {data.products.map((product) => (
        <ProductBadge
          key={product.id}
          id={product.id}
          images={product.images}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

interface ISearchProps {
  search: string;
  setSearch: (searchQuery: string) => void;
  onFocusAction: () => void;
  onBlurAction: () => void;
}

export const Search: React.FC<ISearchProps> = ({
  search,
  setSearch,
  onFocusAction,
  onBlurAction,
}): ReactElement => {
  return (
    <Flex className="search-box" flexDirection="column">
      <Input
        className="search-bar"
        id="search"
        type="text"
        value={search}
        setValue={setSearch}
        onFocusAction={() => onFocusAction()}
        onBlurAction={() => onBlurAction()}
      />
      {!!search.length && <SearchResults searchQuery={search} />}
    </Flex>
  );
};
