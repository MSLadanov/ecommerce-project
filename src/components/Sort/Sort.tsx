import { ReactElement } from "react";
import { Select } from "@components/ui/Select";
import { Flex } from "@components/ui/Flex";
import { sortOptions } from "./options";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export const Sort = (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const sortProducts = (sortOption: string) => {
    navigate(
      `${location.pathname + location.search}?sortBy=${sortOption}&order=asc`
    );
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
