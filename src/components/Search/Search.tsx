import { Input } from "@components/ui/Input";
import { ReactElement } from "react";
import { useSearch } from "@hooks/useSearch";
import "./style.scss";

export const Search = (): ReactElement => {
  const { search, setSearch } = useSearch((state) => state);
  return <Input id="search" type="text" value={search} setValue={setSearch} />;
};
