import { Input } from "@components/ui/Input";
import { ReactElement, useEffect, useState } from "react";
import { useSearch } from "@hooks/useSearch";
import { Flex } from "@components/ui/Flex";
import { useApi } from "@hooks/useApi";
import { IProductsResponse } from "@/types/Products";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@components/Loader";
import { ProductBadge } from "@components/ProductBadge";
import "./style.scss";

interface ISearchResultsProps {
  searchQuery: string;
  isSearchFocused: boolean;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  searchQuery,
  isSearchFocused,
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
      <div
        className={
          isSearchFocused ? `search-results focused` : `search-results`
        }
      >
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (data.products.length === 0) {
    return (
      <div
        className={
          isSearchFocused ? `search-results focused` : `search-results`
        }
      >
        <p>No results</p>
      </div>
    );
  }
  return (
    <div
      className={isSearchFocused ? `search-results focused` : `search-results`}
    >
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

export const Search = (): ReactElement => {
  const { search, setSearch } = useSearch((state) => state);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Flex
      className={isFocused ? `search-box focused` : `search-box`}
      flexDirection="column"
    >
      <Input
        className={isFocused ? `search-bar focused` : `search-bar`}
        id="search"
        type="text"
        value={search}
        setValue={setSearch}
        onFocusAction={() => setIsFocused(true)}
        onBlurAction={() => setIsFocused(false)}
      />
      {!!search.length && (
        <SearchResults searchQuery={search} isSearchFocused={isFocused} />
      )}
    </Flex>
  );
};
