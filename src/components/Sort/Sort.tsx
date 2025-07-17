import { ReactElement, useState } from "react";
import { Select } from "@components/ui/Select";
import { Flex } from "@components/ui/Flex";
import { sortOptions, orderOptions } from "./options";

interface ISortProps {
  setSortBy: () => void;
}

type TSortType = "" | "rating" | "price";

export const Sort: React.FC<ISortProps> = (): ReactElement => {
  const [sortBy, setSortBy] = useState<TSortType>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  return (
    <Flex justifyContent="flex-end">
      <Select
        name="sort-type"
        options={sortOptions}
        onChangeAction={() => setSortBy}
      />
      <Select
        name="order"
        options={orderOptions}
        onChangeAction={() => setOrder}
      />
    </Flex>
  );
};
