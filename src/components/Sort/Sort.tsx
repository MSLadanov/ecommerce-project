import { ReactElement, useState } from "react";
import { Select } from "@components/ui/Select";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import { sortOptions } from "./options";
import { useSort } from "@hooks/useSort";

export const Sort = (): ReactElement => {
  const [selectedOption, setSelectedOption] = useState("");
  const { sortProducts, resetSorting } = useSort(() => setSelectedOption(""));
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
