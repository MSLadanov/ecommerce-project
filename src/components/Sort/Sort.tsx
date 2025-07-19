import { ReactElement, useState } from "react";
import { Select } from "@components/ui/Select";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import { sortOptions } from "./options";
import { useNavigate, useLocation } from "react-router";

export const Sort = (): ReactElement => {
  const [selectedOption, setSelectedOption] = useState("");
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
    setSelectedOption("");
  };
  return (
    <Flex className="sort-box">
      <Select
        text="Sort by..."
        options={sortOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        onChangeAction={sortProducts}
      />
      <Button
        onClickAction={resetSorting}
        disabled={!location.search.includes("sortBy")}
      >
        Reset
      </Button>
    </Flex>
  );
};
