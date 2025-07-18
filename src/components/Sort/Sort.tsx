import { ReactElement } from "react";
import { Select } from "@components/ui/Select";
import { Flex } from "@components/ui/Flex";
import { sortOptions } from "./options";
import { useNavigate, useLocation } from "react-router";

export const Sort = (): ReactElement => {
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
  return (
    <Flex justifyContent="flex-end">
      <Select
        name="sort-type"
        options={sortOptions}
        onChangeAction={sortProducts}
      />
    </Flex>
  );
};
