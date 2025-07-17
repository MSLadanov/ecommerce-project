import { ReactElement } from "react";
import { Select } from "@components/ui/Select";
import { Flex } from "@components/ui/Flex";
import { sortOptions } from "./options";

interface ISortProps {
  sortFn: () => void
}

export const Sort: React.FC<ISortProps> = ({sortFn}): ReactElement => {
  return (
    <Flex justifyContent="flex-end">
      <Select
        name="sort-type"
        options={sortOptions}
        onChangeAction={sortFn}
      />
    </Flex>
  );
};
