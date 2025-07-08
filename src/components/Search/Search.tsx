import { Input } from "@components/ui/Input";
import { ReactElement } from "react";
import { useSearch } from "@hooks/useSearch";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

const SearchResults = (): ReactElement => {
  return <div className="search-results">sdfsd</div>;
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
      <SearchResults />
    </Flex>
  );
};
