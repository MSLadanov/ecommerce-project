import { ReactElement, useState } from "react";
import { Select } from "@components/ui/Select";
import { Flex } from "@components/ui/Flex";

interface ISortProps {
  setSortBy: () => void;
}

type TSortType = "" | "rating" | "price";

export const Sort: React.FC<ISortProps> = (): ReactElement => {
  const [sortBy, setSortBy] = useState<TSortType>("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  return (
    <Flex>
      <Select />
      <Select />
    </Flex>
  );
};
